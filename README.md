# Events-Manager-Olusola-Oseni
[![Build Status](https://travis-ci.org/kenoseni/Events-Manager-Olusola-Oseni.svg?branch=develop)](https://travis-ci.org/kenoseni/Events-Manager-Olusola-Oseni)
[![Coverage Status](https://coveralls.io/repos/github/kenoseni/Events-Manager-Olusola-Oseni/badge.svg?branch=chore-158763881-e2e)](https://coveralls.io/github/kenoseni/Events-Manager-Olusola-Oseni?branch=chore-158763881-e2e)
[![Maintainability](https://api.codeclimate.com/v1/badges/ffa0db640ea996e30e9e/maintainability)]
[![codecov](https://codecov.io/gh/kenoseni/Events-Manager-Olusola-Oseni/branch/develop/graph/badge.svg)](https://codecov.io/gh/kenoseni/Events-Manager-Olusola-Oseni)


Event Manager is an application where users who are managed by admin can create events and choose a center where they want the event to take place


## Getting Started
This is a javascript application built with [**Express**](https://expressjs.com/) framework on the nodejs platform. Authentication of users is done via [**JSON Web Tokens**](https://jwt.io/). To view the Events Manager web application, you should click on this here [**Events-Manager**](https://emanager1980.herokuapp.com/)


## Installation & Starting

1. Install [**Node JS**](https://nodejs.org/en/) and [**Postgres**](https://www.postgresql.org/)

For Windows OS users, follow the instruction in this link [**Node JS**](http://blog.teamtreehouse.com/install-node-js-npm-windows) to install and setup Node Js
For Mac OS users, follow the instruction in this link [**Node JS**](http://blog.teamtreehouse.com/install-node-js-npm-mac) to install and setup Node Js
To download Node Js go to https://nodejs.org/en/download
To download and install Postgres on your machine please follow this link https://www.postgresql.org/download/

2. Clone this repository

- To clone this repository, scroll to the top of the page and look for `clone or download` green botton
- Click on this green button and copy the link
- Go to your terminal and `cd` to the directory where you would want the repository to be cloned
- In your terminal run the command `git clone https://github.com/kenoseni/Events-Manager-Olusola-Oseni.git`

3. Change directory into the root of the project directory

- After cloning the repository, change directory into the project directory
- Create Postgresql database and run migrations
- You can run the following command from your terminal for migrations `npm run migrate`

4. Create a `.env` file in the root directory of the application. Use a different database for your testing and development.          Example of the content of a .env file is shown in the .env.sample
- In the root directory of the project, run `npm install` in the terminal to install all Dependencies
    a. [**cd**] into the root of the **project directory**.
    b. Run `npm install` on the terminal to install Dependecies
    c. Install sequelize-cli, Create Postgresql database, Navigate to server directory and run migrations:
```
npm install -g seqeulize-cli
cd server
sequelize db:migrate
```
5. To start the application:

In **Production** To run the application in production, ensure that you have an Heroku account and if not below are links on how to signup and host an application on Heroku:

- https://signup.heroku.com/node
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction
- https://devcenter.heroku.com/articles/deploying-nodejs


6. To try out the API you can either use the API documentation which can be found on Heroku here Event-Manager [**API-DOC**](https://emanager1980.herokuapp.com/api-docs/)

## Tests
**Server-Side Tests** For Sever side tests run npm test on the terminal while within the **project root directory**. Server side testing is done through the use of the `supertest`, `mocha` & `chai` npm packages. `supertest` is used to make requests to the api,`mocha` is the testing framework and `chai` is the assertion library. They will both be installed when you run the npm install command while setting up the project above and the tests will run when you run npm test.

**Client-Side Tests** To run the the client-side test, run the command `npm run jest` and `nightwatch` in the terminal in the root **project directory.** Note that `jest` is a frontend `reactjs` testing framework, while `nightwatch` is an End-2-End integration testing

### Features
Event Manager consists of the following features:

### Authentication

- It uses JSON Web Token (JWT) for authentication.
- Token is generated on user signup or login
- Token is perpetually verified to check the state of the user if logged in or not.
- Admin User will be created in the application with administrative priviledges to create centers by a Super-Admin

### Users

- Users can register
- Users can log in
- Users can add event
- Users can modify event they created
- Users can delete event they created
- Users can search for centers

### Admin Users
- Admins can edit center
- Admins can add new center
- Admins can delete a center they added
- SuperAdmin can do all the above and upgrade a `user` to an `admin`

## API Documentation
You can view the API Documentation [here](https://emanager1980.herokuapp.com/api-docs)

### Technology Stack & State of Project
**Client Side**
1. HTML & CSS
2. Bootstrap4 Material Designs
3. Javascript
4. ReactJs
5. Redux
6. Jest
7. JQuery

**Server Side**
1. NodeJs
2. ExpressJs
3. Sequelize
4. Swagger
5. Postgresql
6. Postman

### Current State of Application
- still in development

### Support or Contribution
For any suggestions or contributions  please do not hesistate to contact me (kenolusola@gmail.com)

Contributions to this project are welcomed by all, If you need to contribute to this project, follow the steps below
* **Fork** the repository
* Follow [Installation and Setup](#installation-and-setup) as explained earlier
* Make neccessary changes, commit and raise a pull request against develop
**Note** when making contributions, please endevour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide.

## License
This project is authored by **Olusola Oseni** (kenolusola@gmail.com) and is licensed for your use, modification and distribution under the **MIT** license.
[MIT][license] © [olusola-oseni][author]
<!-- Definitions -->
[license]: LICENSE
[author]: olusola-oseni
