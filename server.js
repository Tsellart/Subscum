const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/subscriptiondb", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.get('/api/items', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/items', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
