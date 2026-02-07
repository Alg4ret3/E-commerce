import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { createCustomerAccountWorkflow } from "@medusajs/core-flows";
import { Modules } from "@medusajs/framework/utils";
import jwt from "jsonwebtoken";


export async function POST(req: MedusaRequest, res: MedusaResponse) {
    const { token, password, first_name, last_name, phone } = req.body as any;

    if (!token || !password || !first_name || !last_name) {
        res.status(400).json({ message: "Missing required fields" });
        return;
    }

    const secret = process.env.JWT_SECRET || "supersecret";
    let email: string;

    try {
        const decoded = jwt.verify(token, secret) as any;
        if (!decoded.verified) {
            throw new Error("Token not verified");
        }
        email = decoded.email;
    } catch (e) {
        res.status(401).json({ message: "Invalid or expired verification token" });
        return;
    }

    const authModule = req.scope.resolve(Modules.AUTH);

    try {
        const { default: scrypt } = await import("scrypt-kdf") as any;
        // Hash password for emailpass provider
        // Default config from @medusajs/auth-emailpass
        const hashConfig = { logN: 15, r: 8, p: 1 };
        const passwordHashBuffer = await scrypt.kdf(password, hashConfig);
        const passwordHash = passwordHashBuffer.toString("base64");

        const [authIdentity] = await authModule.createAuthIdentities([
            {
                provider_identities: [
                    {
                        provider: "emailpass",
                        entity_id: email,
                        provider_metadata: {
                            password: passwordHash
                        }
                    }
                ]
            }
        ]);

        // Create Customer Linked to Auth Identity
        const { result } = await createCustomerAccountWorkflow(req.scope).run({
            input: {
                authIdentityId: authIdentity.id,
                customerData: {
                    first_name,
                    last_name,
                    email,
                    phone
                }
            }
        });

        res.json({
            message: "Customer registered successfully",
            customer: result
        });

    } catch (error: any) {
        console.error("Registration failed:", error);
        res.status(500).json({ message: "Registration failed", error: error.message || "Unknown error" });
    }
}
