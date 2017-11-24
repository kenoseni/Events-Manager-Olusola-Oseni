import chai from 'chai';
import supertest from 'supertest';
import app from '../server/app';

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
  invalidSignupSeed = [
    {
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
    }],
  validLoginSeed = [
    {
      email: 'kenolusola@gmail.com',
      password: 'thisisapassword'
    },
    {
      email: 'efosaokpugie@gmail.com',
      password: 'iloveandela'
    },
  ],
  invalidLoginSeed = [
    {
      email: ' ',
      password: 'thisisapassword'
    },
    {
      email: 'efosaokpugie@gmail.com',
      password: '    '
    }
  ],
  validEventSeed = [
    {
      name: 'wedding',
      date: '2017-12-25',
      time: '5:00 pm',
      centerId: 1
    }
  ],
  validCenterSeed = [
    {
      name: 'Baltic Center',
      description: 'A lovely place to party',
      location: 'Lagos State',
      address: '5, Alapere road Ketu',
      capacity: '2000 guests'
    },
    {
      name: 'Crematoria',
      description: 'A lovely experience',
      location: 'Abuja',
      address: '14, NNPC road Kruminmashi',
      capacity: '1000 guests'
    },
    {
      name: 'Double tree',
      description: 'Experience the feeling of euphoria',
      location: 'Ogun State',
      address: '12, Sabo road',
      capacity: '8000 guests'
    }
  ],
  invalidCenterSeed = [
    {
      name: '    ',
      description: 'A lovely place to party',
      location: 'Lagos State',
      address: '5, Alapere road Ketu',
      capacity: '2000 guests'
    },
    {
      name: 'Crematoria',
      description: '   ',
      location: 'Abuja',
      address: '14, NNPC road Kruminmashi',
      capacity: '1000 guests'
    },
    {
      name: 'Double tree',
      description: 'Experience the feeling of euphoria',
      location: '    ',
      address: '12, Sabo road',
      capacity: '8000 guests'
    },
    {
      name: 'The Gooche',
      description: 'Experience the feeling of euphoria',
      location: 'Ogun State',
      address: '   ',
      capacity: '8000 guests'
    },
    {
      name: 'The Gooche',
      description: 'Experience the feeling of euphoria',
      location: 'Ogun State',
      address: '4, association road',
      capacity: ''
    }
  ],
  userToken = [];
let userId1,
  centerId1;

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
  it('should allow a user to login', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[0])
      .end((err, res) => {
        // console.log(res.body)
        expect(res.statusCode).to.equal(201);
        expect(res.body.message).to.equal('User successfully signed up');
        done();
      });
  });
  it('should allow another  user to login', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[1])
      .end((err, res) => {
        // console.log(res.body)
        expect(res.statusCode).to.equal(201);
        expect(res.body.message).to.equal('User successfully signed up');
        done();
      });
  });
  it('should allow a user to signin', (done) => {
    request
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validLoginSeed[0])
      .end((err, res) => {
        userToken[0] = res.body.data.token;
        expect(res.statusCode).to.equal(200);
        expect(res.body.status).to.equal('Success');
        expect(res.body.message).to.equal('User logged in');
        done();
      });
  });
  it('should allow another user to signin', (done) => {
    request
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validLoginSeed[1])
      .end((err, res) => {
        userToken[1] = res.body.data.token;
        expect(res.statusCode).to.equal(200);
        expect(res.body.status).to.equal('Success');
        expect(res.body.message).to.equal('User logged in');
        done();
      });
  });
  it('should show an error message when no email is supplied for login', (done) => {
    request
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidLoginSeed[0])
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Email required');
        done();
      });
  });
  it('should show an error message when no password is supplied for login', (done) => {
    request
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(invalidLoginSeed[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Password required');
        done();
      });
  });
});

