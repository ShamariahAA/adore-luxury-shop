import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { items } = req.body;

      // Transform items into Stripe line items
      const line_items = items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image], // optional, but good for checkout page
          },
          unit_amount: item.price * 100, // Stripe expects cents
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong creating the checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
