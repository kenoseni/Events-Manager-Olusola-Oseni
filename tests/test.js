import chai from 'chai';
import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app);
const { expect } = chai;

const validSignupSeed = [{
    firstname: 'Olusola',
    lastname: 'Oseni',
    email: 'kenolusola@gmail.com',
    password: 'thisisapassword'
  }, {
    firstname: 'Efosa',
    lastname: 'Okpugie',
    email: 'efosaokpugie@gmail.com',
    password: 'iloveandela'
  }, {
    firstname: 'Idris',
    lastname: 'Ibrahim',
    email: 'kenolusola@gmail.com',
    password: 'iamawesome'
  }],
  invalidSignupSeed = [{
    firstname: '   ',
    lastname: 'Smith',
    email: 'paulsmith@gmail.com',
    password: 'thisisapassword',
  }, {
    firstname: 'Paul',
    lastname: '   ',
    email: 'paulsmith@gmail.com',
    password: 'thisisapassword',
  }, {
    firstname: 'Paul',
    lastname: 'Smith',
    email: 'paulsmith@gmail.com',
    password: '   '
  }, {
    firstname: 'Paul',
    lastname: 'Smith',
    email: '  ',
    password: 'thisisapassword',
  }];


describe('Event Manager', () => {
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
      .send({
        firstname: 'Olusola',
        lastname: 'Oseni',
        email: 'kenolusola@gmail.com',
        password: 'thisisapassword'
      })
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
  it('should return 400 for empty firstname', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidSignupSeed[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
  it('should return 400 for empty lastname', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidSignupSeed[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.message).to.equal('Lastname required');
        done();
      });
  });
  it('should return 400 for empty password', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidSignupSeed[2])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.message).to.equal('Password required');
        done();
      });
  });
  it('should return 400 for empty email', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidSignupSeed[3])
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body.message).to.equal('Email required');
        done();
      });
  });
});
