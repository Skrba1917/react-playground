const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LKhOdKXqmPjlC9Et4lEKHA4MpFv31ibYYhhHwldXeHgWKLQzgTyppaHG7azXFoNzEctZFWUV3TAnSx0zJQxXI5U00OBUM1QQq"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - CREATED
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// EXAMPLE ENDPOINT
// http://localhost:5001/clone-8bb89/us-central1/api
