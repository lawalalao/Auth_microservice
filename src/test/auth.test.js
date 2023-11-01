const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); 
const expect = require('chai').expect;
const User = require('../models/User'); 

let savedUser; 

describe('Auth Endpoints', () => {
  it('should create a new user', async () => {
  const res = await request(app)
    .post('/api/user/signup')
    .send({
      email: 'testtest@example.com',
      password: 'password1234'
    });
  if (res.statusCode !== 200) {
    console.log(res.body); 
  }
  expect(res.statusCode).to.equal(200);
  expect(res.body).to.have.property('user');
});

  it('should login the user', async () => {
    const res = await request(app)
      .post('/api/user/login') 
      .send({
        email: 'testtest@example.com',
        password: 'password1234'
      });
    expect(res.statusCode).to.equal(200);
    expect(res.header).to.have.property('auth-token');
  });
});

after(async () => {
  try {
    if (savedUser && savedUser._id) {
      await User.deleteOne({ _id: savedUser._id });
    }
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error during database cleanup after tests', error);
  }
});
