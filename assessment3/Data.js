'use strict';

module.exports = {
  generateRandomData
};

const Faker = require('faker');

function generateRandomData() {  
  const contentFaker = Faker.random.word();
  //return contentFaker;
}