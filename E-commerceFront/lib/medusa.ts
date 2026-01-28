import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL || "http://localhost:9000",
  debug: process.env.NODE_ENV === "development",
  publishableKey: import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "pk_test_somethingsomething",
})
