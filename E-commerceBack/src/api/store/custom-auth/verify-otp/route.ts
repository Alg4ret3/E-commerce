import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { OtpService } from "../../../../lib/otp";
import jwt from "jsonwebtoken";

export async function POST(req: MedusaRequest, res: MedusaResponse) {
    const { email, code } = req.body as { email: string, code: string };

    if (!email || !code) {
        res.status(400).json({ message: "Email and code are required" });
        return;
    }

    try {
        const isValid = await OtpService.verify(email, code);

        if (!isValid) {
            res.status(400).json({ message: "Invalid or simple code" });
            return;
        }

        const secret = process.env.JWT_SECRET || "supersecret";
        const token = jwt.sign({ email, verified: true }, secret, { expiresIn: "1h" });

        res.json({
            message: "Email verified",
            token,
            email
        });
    } catch (error: any) {
        res.status(500).json({ message: "Verification failed", error: error.message });
    }
}
