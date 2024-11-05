const Stock = require('../models/Stock.js');

// Create a stock entry
exports.createStock = async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create stock entry' });
  }
};

// Get all stock entries
exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find().populate('product');
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock entries' });
  }
};

// Update stock entry
exports.updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!stock) return res.status(404).json({ error: 'Stock entry not found' });
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update stock entry' });
  }
};

// Delete stock entry
exports.deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) return res.status(404).json({ error: 'Stock entry not found' });
    res.status(200).json({ message: 'Deleted stock entry successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete stock entry' });
  }
};
