const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const stocks = require('./stocks.js');

const app = express();
const port = 3010;
app.use(cors());

//Endpoint 1: Get the stocks sorted by pricing
function SortByPricing(stock1, stock2, pricing) {
  if (pricing.toLowerCase() === 'low-to-high') {
    return stock1.price - stock2.price;
  } else {
    return stock2.price - stock1.price;
  }
}
app.get('/stocks/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let stocksCopy = stocks.slice();
  let sortedStocks = stocksCopy.sort((stock1, stock2) =>
    SortByPricing(stock1, stock2, pricing)
  );
  res.json({
    stocks: sortedStocks,
  });
});

//Endpoint 2: Get the stocks sorted based on their Growth.
function SortByGrowth(stock1, stock2, growth) {
  if (growth.toLowerCase() === 'low-to-high') {
    return stock1.growth - stock2.growth;
  } else {
    return stock2.growth - stock1.growth;
  }
}
app.get('/stocks/sort/growth', (req, res) => {
  let growth = req.query.growth;
  let stocksCopy = stocks.slice();
  let sortedStocks = stocksCopy.sort((stock1, stock2) =>
    SortByGrowth(stock1, stock2, growth)
  );
  res.json({
    stocks: sortedStocks,
  });
});

//Endpoint 3: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)
function filterByExchange(stock, exchange) {
  return stock.exchange.toLowerCase() === exchange.toLowerCase();
}
app.get('/stocks/filter/exchange', (req, res) => {
  let exchange = req.query.exchange;
  let stocksCopy = stocks.slice();
  let sortedStocks = stocksCopy.filter((stock) =>
    filterByExchange(stock, exchange)
  );
  res.json({
    stocks: sortedStocks,
  });
});

//Endpoint 4: Filter the stocks based on the Industrial Sector.
function filterByIndustry(stock, industry) {
  return stock.industry.toLowerCase() === industry.toLowerCase();
}
app.get('/stocks/filter/industry/:industry', (req, res) => {
  let industry = req.query.industry;
  let stocksCopy = stocks.slice();
  let sortedStocks = stocksCopy.filter((stock) =>
    filterByIndustry(stock, industry)
  );
  res.json({
    stocks: sortedStocks,
  });
});

//Endpoint 5: Send all available stocks
app.get('/stocks', (req, res) => {
  let sortedStocks = stocks;
  res.json({
    stocks: sortedStocks,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
