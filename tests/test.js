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
    },
    {
      name: 'Birthday',
      date: '2017-12-30',
      time: '4:00 pm',
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
  userToken = [],
  adminToken = [];
let userId1,
  centerId1;

describe('Event Manager', () => {
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
  it('should allow a user to signup', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[0])
      .end((err, res) => {
        userToken[0] = res.body.data.token;
        expect(res.statusCode).to.equal(201);
        expect(res.body.message).to.equal('User successfully signed up');
        done();
      });
  });
  
  it('should allow another  user to signup', (done) => {
    request
      .post('/api/v1/users')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send(validSignupSeed[1])
      .end((err, res) => {
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
  describe('Create admin API', () => {
    it('should update a user to an admin', (done) => {
      request
        .put('/api/v1/admins')
        .set('Connection', 'keep alive')
        .set('x-access-token', userToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send()
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Admin created successfully');
          done();
        });
    });
    it('should allow an admin to signin again', (done) => {
      request
        .post('/api/v1/users/login')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .type('form')
        .send(validLoginSeed[0])
        .end((err, res) => {
          adminToken[0] = res.body.data.token;
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('User logged in');
          done();
        });
    });
  });
  describe(' Center API', () => {
    it('should allow an admin to create a center', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(validCenterSeed[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Center created successfully');
          done();
        });
    });
    it('should return an error when a token is not supplied when creating a center', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', '')
        .set('Content-Type', 'application/json')
        .type('form')
        .send()
        .end((err, res) => {
          expect(res.statusCode).to.equal(401);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Access denied, no token provided');
          done();
        });
    });
    it('should return an error when no center name is provided', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(invalidCenterSeed[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Center name required');
          done();
        });
    });
    it('should return an error when no center description provided', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(invalidCenterSeed[1])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Description field required');
          done();
        });
    });
    it('should return an error when no center location is provided', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(invalidCenterSeed[2])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Location required');
          done();
        });
    });
    it('should return an error when no center address is provided', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(invalidCenterSeed[3])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Center address required');
          done();
        });
    });
    it('should return an error when no center capacity is provided', (done) => {
      request
        .post('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(invalidCenterSeed[4])
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal('Fail');
          expect(res.body.message).to.equal('Capacity required');
          done();
        });
    });
    it('should allow an admin to modify a center', (done) => {
      request
        .put('/api/v1/centers/1')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(validCenterSeed[0])
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Center updated');
          done();
        });
    });
    it('should allow an admin to modify another a center', (done) => {
      request
        .put('/api/v1/centers/1')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send(validCenterSeed[1])
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Center updated');
          done();
        });
    });
    it('should allow users get one center', (done) => {
      request
        .get('/api/v1/centers/1')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .type('form')
        .send()
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('List of one center');
          done();
        });
    });
    it('should allow admin get all centers', (done) => {
      request
        .get('/api/v1/centers')
        .set('Connection', 'keep alive')
        .set('x-access-token', adminToken[0])
        .set('Content-Type', 'application/json')
        .type('form')
        .send()
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('List of all centers');
          done();
        });
    });
  });
});

