import Stripe from "stripe";
const stripe = new Stripe(import.meta.env.VITE_STRIPE_PRIVATE_KEY);
const YOUR_DOMAIN = "http://localhost:3000/checkout";

export default async function handler(req, res) {
  const { cart, totalAmount } = req.body;

  const lineItems = cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.image],
        },
      },
      quantity: item.amount,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ url: session.url });
}