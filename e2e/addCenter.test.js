import path from 'path';

const APP_BASE_URL = 'http://localhost:8000';

module.exports = {
  // beforeEach(browser, done) {
  //   browser.resizeWindow(1480, 1480, done);
  // },
  'User should be able to see the landing page': (browser) => {
    browser
      .url(APP_BASE_URL)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_URL}/`)
      .pause(2000);
  },
  'User should see the navigation bar and the brand logo': (browser) => {
    browser.assert
      .visible('body')
      .assert.visible('.navbar')
      .assert.visible('.container-fluid')
      .assert.containsText('.navbar-brand', 'Encore');
  },
  'User should be able to click the login button on the navbar': (browser) => {
    browser
      .pause(2000)
      .assert.visible('#signin')
      .pause(2000)
      .click('#signin')
      .pause(2000);
  },
  'User should be able to see the intro on the sign-in page': (browser) => {
    browser.assert
      .visible('#logIn')
      .assert.visible('#centerlogin')
      .assert.visible('#signinTitle')
      .assert.containsText('#signinTitle', 'Log In');
  },
  'User should be able to see the elements of the sign-in form': (browser) => {
    browser
      .pause('2000')
      .assert.visible('#loginform')
      .assert.visible('#formgroup')
      .pause(3000)
      .assert.visible('label[for=l-email]')
      .assert.containsText('div> label[for=l-email]', 'Email:')
      .waitForElementVisible('input[name=mail]', 1000)
      .assert.visible('input[name=mail]')
      .setValue('input[name=mail]', 'kenolusola@gmail.com')
      .pause('1000')

      .assert.visible('#lpswd')
      .assert.visible('div> label[for=l-password]')
      .assert.containsText('div> label[for=l-password]', 'Password:')
      .assert.visible('input[name=pswd]')
      .setValue('input[name=pswd]', 'Iimpeccable1')
      .pause('1000')
      .assert.visible('#l-button')
      .click('#l-button')
      .pause(2000);
  },
  'Users should see the buttons on the navigation bar': (browser) => {
    browser.assert
      .visible('.container-fluid')
      .assert.visible('.collapse.navbar-collapse')
      .pause(2000)
      .assert.visible('.nav-item')
      .assert.containsText('.nav-link', 'Home')
      .assert.visible('#center')
      .assert.containsText('#center', 'Centers')
      .assert.visible('#events')
      .assert.containsText('#events', 'Events')
      .assert.visible('#admin')
      .assert.containsText('#admin', 'Admin');
  },
  'User should be able to click the center button on the navbar': (browser) => {
    browser.assert
      .visible('#center')
      .pause(2000)
      .click('#center')
      .pause(2000);
  },
  'User should be able to see add and click the center button': (browser) => {
    browser.assert
      .visible('.float')
      .click('.float')
      .pause(1000);
  },
  'User should be able to see the add center modal and title "Add Center"': (browser) => {
    browser.assert
      .visible('#addCenter')
      .assert.visible('#addCenterModal')
      .assert.visible('#addCenterTitle')
      .assert.containsText('#addCenterTitle', 'Add Center');
  },
  'User should be able to upload an image on Add Center modal': (browser) => {
    browser.assert
      .visible('#imageFile')
      // .click('#imageFile')
      .pause(15000)
      // .waitForElementVisible('input[name=file]', 5000)
      .waitForElementVisible('#addCenter #filefield1', 5000)
      // .assert.visible('#filefield')
      // .assert.visible('#fileinput')
      .assert.visible('#addCenter input[name=file]')
      .setValue(
        '#addCenter input[name=file]',
        path.resolve(`${__dirname}/../client/components/img/img3.jpg`)
      )
      .pause(10000);
  },
  'User should be able to add the details of a center and create the center': (browser) => {
    browser.assert
      .visible('#addCenter #addCenterForm')
      .waitForElementVisible('#addCenter input[name=centerName]', 1000)
      .assert.visible('#addCenter input[name=centerName]')
      .setValue('#addCenter input[name=centerName]', 'Cincinati')

      .waitForElementVisible('#addCenter input[name=centerDescription]', 1000)
      .assert.visible('#addCenter input[name=centerDescription]')
      .setValue('#addCenter input[name=centerDescription]', 'Simply the best')

      .waitForElementVisible('#addCenter input[name=centerLocation]', 1000)
      .assert.visible('#addCenter input[name=centerLocation]')
      .setValue(
        '#addCenter input[name=centerLocation]',
        '188, Maryland drive Abuja'
      )

      .waitForElementVisible('#addCenter input[name=centerPrice]', 1000)
      .assert.visible('#addCenter input[name=centerPrice]')
      .setValue('#addCenter input[name=centerPrice]', '100000')

      .waitForElementVisible('#addCenter input[name=centerFacilities]', 1000)
      .assert.visible('#addCenter input[name=centerFacilities]')
      .setValue('#addCenter input[name=centerFacilities]', 'Gen, AC')

      .waitForElementVisible('#addCenter input[name=centerCapacity]', 1000)
      .assert.visible('#addCenter input[name=centerCapacity]')
      .setValue('#addCenter input[name=centerCapacity]', 1000)
      .waitForElementVisible('#addCenter button[name=submitButton]', 5000)
      .assert.visible('#addCenter button[name=submitButton]')
      .pause(2000)
      .click('#addCenter button[name=submitButton]')
      .pause(20000);
  }
};
