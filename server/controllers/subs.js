const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const prices = async (req, res) => {
  const prices = await stripe.prices.list();
  console.log("prices", prices);
  res.json(prices.data);
};

export const createSubscription = async (req, res) => {
  console.log(req.body);
};
