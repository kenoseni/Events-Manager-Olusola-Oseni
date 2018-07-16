const APP_BASE_URL = 'http://localhost:8000';

module.exports = {
  // beforeEach(browser, done) {
  //   browser.resizeWindow(1480, 1480, done);
  // },
  'SuperAdmin should be able to see the landing page': (browser) => {
    browser
      .url(APP_BASE_URL)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_URL}/`)
      .pause(2000);
  },
  'SuperAdmin should see the navigation bar and the brand logo': (browser) => {
    browser.assert
      .visible('body')
      .assert.visible('.navbar')
      .assert.visible('.container-fluid')
      .assert.containsText('.navbar-brand', 'Encore');
  },
  'SuperAdmin should be able to click the login button on the navbar': (browser) => {
    browser
      .pause(2000)
      .assert.visible('#signin')
      .pause(2000)
      .click('#signin')
      .pause(2000);
  },
  'SuperAdmin should be able to see the intro on the sign-in page': (browser) => {
    browser.assert
      .visible('#logIn')
      .assert.visible('#centerlogin')
      .assert.visible('#signinTitle')
      .assert.containsText('#signinTitle', 'Log In');
  },
  'SuperAdmin should be able to see the elements of the sign-in form': (browser) => {
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
  'SuperAdmin should see the buttons on the navigation bar': (browser) => {
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
  'Admin should be able to add a event': (browser) => {
    browser.assert
      .visible('#eventpage')
      .assert.visible('.float')
      .click('.float')
      .pause(1000)
      .assert.visible('#addEventModal')
      .assert.visible('#addEventTitle')
      .assert.containsText('#addEventTitle', 'ADD EVENT')
      .assert.visible('#addEventForm')
      .waitForElementVisible('#eventName', 1000)
      .assert.visible('#eventName')
      .setValue('#eventName', ' ')

      .waitForElementVisible('#eventLocation', 1000)
      .assert.visible('#eventLocation')
      .click('#eventLocation')
      .pause(1000)

      .waitForElementVisible('#chooseCenter', 1000)
      .assert.visible('#chooseCenter')
      .click('#chooseCenter')
      .pause(1000)

      .waitForElementVisible('#startDate', 1000)
      .assert.visible('#startDate')
      .click('#startDate')
      .pause(2000)
      .setValue('#startDate', '12-12-2018')

      .waitForElementVisible('#endDate', 1000)
      .assert.visible('#endDate')
      .click('#endDate')
      .pause(2000)
      .setValue('#endDate', '12-12-2018')

      .waitForElementVisible('button[name=submitButton]', 5000)
      .assert.visible('button[name=submitButton]')
      .pause(1000)
      .click('button[name=submitButton]')
      .pause(3000)

      .waitForElementVisible('#eventName', 1000)
      .assert.visible('#eventName')
      .setValue('#eventName', 'Seminar')

      .waitForElementVisible('button[name=submitButton]', 5000)
      .assert.visible('button[name=submitButton]')
      .pause(1000)
      .click('button[name=submitButton]')
      .pause(3000)

      .waitForElementVisible('#timeT', 1000)
      .assert.visible('#timeT')
      .setValue('#timeT', '8 am')

      .waitForElementVisible('#startDate', 1000)
      .assert.visible('#startDate')
      .click('#startDate')
      .pause(2000)
      .setValue('#startDate', '000000')

      .waitForElementVisible('button[name=submitButton]', 5000)
      .assert.visible('button[name=submitButton]')
      .pause(1000)
      .click('button[name=submitButton]')
      .pause(3000)

      .waitForElementVisible('#startDate', 1000)
      .assert.visible('#startDate')
      .click('#startDate')
      .pause(2000)
      .setValue('#startDate', '12-12-2018')

      .waitForElementVisible('button[name=submitButton]', 5000)
      .assert.visible('button[name=submitButton]')
      .pause(1000)
      .click('button[name=submitButton]')
      .pause(3000)
      .end();
  }
};
