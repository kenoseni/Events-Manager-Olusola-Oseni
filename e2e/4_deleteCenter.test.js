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
  'Admin should see the buttons on the navigation bar': (browser) => {
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
  'Admin should be able to click the center button on the navbar': (browser) => {
    browser.assert
      .visible('#center')
      .pause(2000)
      .click('#center')
      .pause(2000);
  },
  'Admin should be able to delete a center': (browser) => {
    browser.assert
      .visible('.card-footer')
      .assert.visible('.nav')
      .assert.visible('#delete')
      .pause(2000)
      .assert.visible('#deletecenter')
      .click('#deletecenter')
      .pause(2000)
      .assert.visible('.deletemodal')
      .assert.visible('#deletemodal')
      .assert.visible('#deletemodalcontent')
      .assert.visible('#deleteButton')
      .click('#deleteButton')
      .pause(1000)
      .end();
  }
};
