require('dotenv').config({ path: './.env' });

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.PRIVATE_STRIPE_KEY);

const app = express();


const PORT = 4242;
const YOUR_DOMAIN = 'http://localhost:4242';

app.use(cors());
app.use(express.static('public'));

app.use((req, res, next) => {
  bodyParser.json()(req, res, next);
});

app.post('/create-checkout-session', async (req, res) => {
  console.log(req);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1KsR75A3FxV88R1ixXh9pCBu',
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?successful_payment`,
    cancel_url: `${YOUR_DOMAIN}?canceled_payment`
  });

  return res.redirect(303, session.url);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));