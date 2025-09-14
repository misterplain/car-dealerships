/*jshint esversion: 8 */
const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express()
const port = 3030;

app.use(cors())
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: false }));

// Load data from JSON files
let reviews_data, dealerships_data;
try {
  reviews_data = JSON.parse(fs.readFileSync("data/reviews.json", 'utf8'));
  dealerships_data = JSON.parse(fs.readFileSync("data/dealerships.json", 'utf8'));
  console.log('Data loaded successfully');
  console.log(`Loaded ${dealerships_data.dealerships?.length || 0} dealerships`);
  console.log(`Loaded ${reviews_data.reviews?.length || 0} reviews`);
} catch (error) {
  console.error('Error loading data files:', error);
  reviews_data = { reviews: [] };
  dealerships_data = { dealerships: [] };
}

// In-memory storage for development
let reviews = reviews_data.reviews || [];
let dealerships = dealerships_data.dealerships || [];


// Express route to home
app.get('/', async (req, res) => {
    res.send("Welcome to the Mongoose API")
});

// Express route to fetch all reviews
app.get('/fetchReviews', (req, res) => {
  try {
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch reviews by a particular dealer
app.get('/fetchReviews/dealer/:id', (req, res) => {
  try {
    const dealerReviews = reviews.filter(review => review.dealership == req.params.id);
    res.json(dealerReviews);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch all dealerships
app.get('/fetchDealers', (req, res) => {
  try {
    console.log(`Returning ${dealerships.length} dealerships`);
    res.json(dealerships);
  } catch (error) {
    console.error('Error fetching dealerships:', error);
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch Dealers by a particular state
app.get('/fetchDealers/:state', (req, res) => {
  try {
    const stateDealers = dealerships.filter(dealer => dealer.state === req.params.state);
    console.log(`Returning ${stateDealers.length} dealerships for state ${req.params.state}`);
    res.json(stateDealers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch dealer by a particular id
app.get('/fetchDealer/:id', (req, res) => {
  try {
    const dealer = dealerships.find(dealer => dealer.id == req.params.id);
    if (dealer) {
      res.json([dealer]);
    } else {
      res.status(404).json({ error: 'Dealer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

//Express route to insert review
app.post('/insert_review', (req, res) => {
  try {
    const data = req.body;
    const maxId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) : 0;
    const new_id = maxId + 1;

    const review = {
      "id": new_id,
      "name": data.name,
      "dealership": data.dealership,
      "review": data.review,
      "purchase": data.purchase,
      "purchase_date": data.purchase_date,
      "car_make": data.car_make,
      "car_model": data.car_model,
      "car_year": data.car_year,
    };

    reviews.push(review);
    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error inserting review' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
