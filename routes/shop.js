const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const routes = express.Router();

routes.get('/', (req, res, next) => {
  console.log('shopJS', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = routes;
