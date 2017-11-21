import chai from 'chai';
import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app);
const { expect } = chai;

const validSignupSeed = [{
    firstname: 'Olusola',
    lastname: 'Oseni',
    password: 'thisisapassword',
    email: 'kenolusola@gmail.com'
  }, {
    firstname: 'Efosa',
    lastname: 'Okpugie',
    password: 'iloveandela',
    email: 'efosaokpugie@gmail.com',
  }, {
    firstname: 'Idris',
    lastname: 'Ibrahim',
    password: 'iamawesome',
    email: 'idrisibrahim@gmail.com',
  }],
  invalidSignupSeed = [{
    firstname: '   ',
    lastname: 'Smith',
    password: 'thisisapassword',
    email: 'paulsmith@gmail.com'
  }, {
    firstname: 'Paul',
    lastname: '   ',
    password: 'thisisapassword',
    email: 'paulsmith@gmail.com'
  }, {
    firstname: 'Paul',
    lastname: 'Smith',
    password: '   ',
    email: 'paulsmith@gmail.com'
  }, {
    firstname: 'Paul',
    lastname: 'Smith',
    password: 'thisisapassword',
    email: '  '
  }];


describe('More Recipes', () => {
  describe('Test Server Connection', () => {
    it('should respond with welcome message and status code 200', (done) => {
      request
        .get('/api/v1')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect('Content-Type', /json/);
          expect(res.body.message).to.equal('Welcome to my API.');
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
describe('signup API', () => {
  it('should allow user to create an account', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.status).to.equal('Success');
        expect(typeof res.body.message).to.equal('string');
        done();
      });
  });
  it('should allow another user to create an account', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body.status).to.equal('Success');
        expect(typeof res.body.message).to.equal('string');
        done();
      });
  });
});
