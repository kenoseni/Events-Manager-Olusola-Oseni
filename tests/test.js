import chai from 'chai';
import supertest from 'supertest';
// import moment from 'moment';
import app from '../server/app';

const request = supertest.agent(app);
const { expect } = chai;

const validSignupSeed = [{
    firstname: 'Olusola',
    lastname: 'Oseni',
    email: 'kenoseni@gmail.com',
    password: 'thisisapassword'
  },
  {
    firstname: 'Efosa',
    lastname: 'Okpugie',
    email: 'efosaokpugie@gmail.com',
    password: 'iloveandela'
  },
  {
    firstname: 'Idris',
    lastname: 'Ibrahim',
    email: 'kenoseni@gmail.com',
    password: 'iamawesome'
  },
  {
    firstname: 'Olusola',
    lastname: 'Oseni',
    email: 'kenolusola@gmail.com',
    password: 'Iimpeccable1'
  }],
  invalidSignupSeed = [
    {
      firstname: '   ',
      lastname: 'Smith',
      email: 'paulsmith@gmail.com',
      password: 'thisisapassword',
    },
    {
      firstname: 'Paul',
      lastname: '   ',
      email: 'paulsmith@gmail.com',
      password: 'thisisapassword',
    },
    {
      firstname: 'Paul',
      lastname: 'Smith',
      email: 'paulsmith@gmail.com',
      password: '   '
    },
    {
      firstname: 'Paul',
      lastname: 'Smith',
      email: '  ',
      password: 'thisisapassword',
    }],
  validLoginSeed = [
    {
      email: 'kenoseni@gmail.com',
      password: 'thisisapassword'
    },
    {
      email: 'efosaokpugie@gmail.com',
      password: 'iloveandela'
    },
    {
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    }
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
      date: new Date('2017-12-25').toISOString(),
      time: '5:00 pm',
      centerId: 1
    },
    {
      name: 'Birthday',
      date: new Date('2018-12-25').toISOString(),
      time: '4:00 pm',
      centerId: 2
    },
    {
      name: 'Seminar',
      date: new Date('2018-12-30').toISOString(),
      time: '4:00 pm',
      centerId: 2
    }
  ],
  validCenterSeed = [
    {
      name: 'Baltic Center',
      description: 'A lovely place to party',
      location: '5, Alapere road Ketu Lagos State',
      price: '200',
      facilities: 'Swimming pool, generator',
      capacity: 2000
    },
    {
      name: 'Crematoria',
      description: 'A lovely experience',
      location: '14, NNPC road Kruminmashi Abuja',
      price: '2000',
      facilities: 'Swimming pool, generator',
      capacity: 1000
    },
    {
      name: 'Double tree',
      description: 'Experience the feeling of euphoria',
      location: '12, Sabo road Ogun State',
      price: '8000',
      facilities: 'Swimming pool, generator',
      capacity: 8000
    }
  ],
  invalidCenterSeed = [
    {
      name: '    ',
      description: 'A lovely place to party',
      location: '5, Alapere road Ketu Lagos State',
      price: '200',
      facilities: 'Swimming pool, generator',
      capacity: 2000
    },
    {
      name: 'Crematoria',
      description: '   ',
      location: '14, NNPC road Kruminmashi Abuja',
      price: '2000',
      facilities: 'Swimming pool, generator',
      capacity: 1000
    },
    {
      name: 'Double tree',
      description: 'Experience the feeling of euphoria',
      location: '    ',
      price: '8000',
      facilities: 'Swimming pool, generator',
      capacity: 8000
    },
    {
      name: 'The Gooche',
      description: 'Experience the feeling of euphoria',
      location: '4, association road Ogun State',
      price: ' ',
      facilities: 'Swimming pool, generator',
      capacity: 8000
    },
    {
      name: 'The Gooche',
      description: 'Experience the feeling of euphoria',
      location: '4, association road Ogun State',
      price: '4000',
      facilities: '  ',
      capacity: 8000
    },
    {
      name: 'The Gooche',
      description: 'Experience the feeling of euphoria',
      location: '4, association road Ogun State',
      price: '4000',
      facilities: 'Swimming pool, generator',
      capacity: null
    }
  ],
  userToken = [],
  adminToken = [];

describe('Event Manager', () => {
  describe('Users', () => {
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
            expect(res.body.data.message).to.equal('Lastname required');
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
            expect(res.body.data.message).to.equal('Password required');
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
            expect(res.body.data.message).to.equal('Email required');
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
            // expect(res.statusCode).to.equal(201);
            expect(res.body.data.message).to
              .equal('User successfully signed up');
            done();
          });
      });

      it('should allow another user to signup', (done) => {
        request
          .post('/api/v1/users')
          .set('Connection', 'keep alive')
          .set('Content-Type', 'application/json')
          .type('form')
          .send(validSignupSeed[1])
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.data.message).to
              .equal('User successfully signed up');
            done();
          });
      });
    });
    describe('SIGNIN API', () => {
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
            expect(res.body.data.status).to.equal('Success');
            expect(res.body.data.message).to
              .equal('User successfully logged in');
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
            expect(res.body.data.status).to.equal('Success');
            expect(res.body.data.message).to
              .equal('User successfully logged in');
            done();
          });
      });
      it('should allow superadmin to signin', (done) => {
        request
          .post('/api/v1/users/login')
          .set('Connection', 'keep alive')
          .set('Content-Type', 'application/json')
          .type('form')
          .send(validLoginSeed[2])
          .end((err, res) => {
            adminToken[0] = res.body.data.token;
            expect(res.statusCode).to.equal(200);
            expect(res.body.data.status).to.equal('Success');
            expect(res.body.data.message).to
              .equal('User successfully logged in');
            done();
          });
      });
      it('should show an error when no email is supplied for login', (done) => {
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
      it('should show an error when no password is supplied', (done) => {
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
    describe('Admin', () => {
      describe('Create admin API', () => {
        it('should update a user to an admin', (done) => {
          request
            .put('/api/v1/users/2')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('User successfully upgraded to admin');
              done();
            });
        });
        it('should allow an admin to signin again', (done) => {
          request
            .post('/api/v1/users/login')
            .set('Connection', 'keep alive')
            .set('Content-Type', 'application/json')
            .type('form')
            .send(validLoginSeed[2])
            .end((err, res) => {
              adminToken[1] = res.body.data.token;
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('User successfully logged in');
              done();
            });
        });
      });
    });
    describe('Centers', () => {
      describe(' Center API', () => {
        it('should allow an admin to create a center', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[1])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(validCenterSeed[0])
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Center created successfully');
              done();
            });
        });
        it('should allow an superadmin to create a center', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(validCenterSeed[1])
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Center created successfully');
              done();
            });
        });
        it(
          'should return an error when no token is supplied creating a center',
          (done) => {
            request
              .post('/api/v1/centers')
              .set('Connection', 'keep alive')
              .set('x-access-token', '')
              .set('Content-Type', 'application/json')
              .type('form')
              .send()
              .end((err, res) => {
                expect(res.statusCode).to.equal(401);
                expect(res.body.data.status).to.equal('Fail');
                expect(res.body.data.message).to
                  .equal('Access denied, no token provided');
                done();
              });
          }
        );
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
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('Center name is required');
              done();
            });
        });
        it('should return an error when no description provided', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(invalidCenterSeed[1])
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to
                .equal('Description field required');
              done();
            });
        });
        it('should return an error when no location is provided', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(invalidCenterSeed[2])
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('Center location is required');
              done();
            });
        });
        it('should return an error when no price is provided', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(invalidCenterSeed[3])
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('Center price is required');
              done();
            });
        });
        it('should return an error when no facilities are provided', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(invalidCenterSeed[4])
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('Center facilities is required');
              done();
            });
        });
        it('should return an error when no capacity is provided', (done) => {
          request
            .post('/api/v1/centers')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(invalidCenterSeed[5])
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('Center capacity is required');
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
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to.equal('Center updated');
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
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to.equal('Center updated');
              done();
            });
        });
        it('should allow admin delete a center', (done) => {
          request
            .delete('/api/v1/centers/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', adminToken[1])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Center has been successfully deleted');
              done();
            });
        });
        it('should not allow a user delete a center', (done) => {
          request
            .delete('/api/v1/centers/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(401);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('User unauthorized');
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
    describe('Events', () => {
      describe('Event API', () => {
        it('should allow a user to create an event', (done) => {
          request
            .post('/api/v1/events')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(validEventSeed[1])
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Event was successfully created');
              done();
            });
        });
        it('should allow a user to modify an event', (done) => {
          request
            .put('/api/v1/events/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send(validEventSeed[2])
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Event was successfully modified');
              done();
            });
        });
        it('should allow a user to get one event', (done) => {
          request
            .get('/api/v1/events/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to.equal('Event available');
              done();
            });
        });
        it('should allow a user to get all events', (done) => {
          request
            .get('/api/v1/events')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to.equal('These are your events');
              done();
            });
        });
        it('should return an error when no token is provided', (done) => {
          request
            .get('/api/v1/events')
            .set('Connection', 'keep alive')
            .set('x-access-token', '')
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(401);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to
                .equal('Access denied, no token provided');
              done();
            });
        });
        it('should allow a user to delete an event', (done) => {
          request
            .delete('/api/v1/events/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body.data.status).to.equal('Success');
              expect(res.body.data.message).to
                .equal('Event has been successfully deleted');
              done();
            });
        });
        it('should return an error if event is not found', (done) => {
          request
            .get('/api/v1/events/1')
            .set('Connection', 'keep alive')
            .set('x-access-token', userToken[0])
            .set('Content-Type', 'application/json')
            .type('form')
            .send()
            .end((err, res) => {
              expect(res.statusCode).to.equal(404);
              expect(res.body.data.status).to.equal('Fail');
              expect(res.body.data.message).to.equal('No such event available');
              done();
            });
        });
      });
    });
  });
});
