import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await emailjs.send(
      "service_xxxxxxx", // Replace with your actual EmailJS service ID
      "template_rb1gaff", // Your EmailJS template ID
      {
        name,
        email,
        message,
        to_email: "adoreluxuryshop@gmail.com",
      },
      "tF6RXKQCoerDYVvr3" // Your EmailJS public key
    );

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("EmailJS error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}

