const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/eCommerce', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

app.use(express.static('public'));
app.use(express.json());

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/cart', (req, res) => {
  // Handle adding items to the cart (you might want to store this in the database)
  console.log(req.body);
  res.send('Item added to cart!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
