import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await emailjs.send(
      "service_ajgbzqr", // ✅ your service ID
      "template_rb1gaff", // ✅ your template ID
      {
        name,
        email,
        message,
        to_email: "adoreluxuryshop@gmail.com",
      },
      "tF6RXKQCoerDYVvr3" // ✅ your public key
    );

    console.log("✅ Email sent successfully:", response);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}




