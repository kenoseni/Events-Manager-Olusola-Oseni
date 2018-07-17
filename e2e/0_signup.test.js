const APP_BASE_URL = 'http://localhost:8000';

module.exports = {
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
  'User should see the buttons on the navigation bar': (browser) => {
    browser.assert
      .visible('.container-fluid')
      .assert.visible('.collapse.navbar-collapse')
      .pause(2000)
      .assert.visible('.nav-item')
      .assert.containsText('.nav-link', 'Home')
      .assert.visible('#signin')
      .assert.containsText('#signin', 'Log In')
      .assert.visible('#signup')
      .assert.containsText('#signup', 'Sign Up');
  },
  'User should be able to click the signup button on the navbar': (browser) => {
    browser
      .pause(2000)
      .assert.visible('#signup')
      .pause(2000)
      .click('#signup')
      .pause(4000);
  },
  'User should be able to see the intro on the sign-up page': (browser) => {
    browser.assert.visible('#signUp').assert.containsText('#signUp', 'Sign Up');
  },
  'User should be able to see the elements of the signup form': (browser) => {
    browser
      .pause(1000)
      .assert.visible('#modalbody')
      .assert.visible('div> label[for=name]')
      .assert.containsText('div> label[for=name]', 'First Name:')
      .assert.visible('div > input[name=firstname]')
      .setValue('div > input[name=firstname]', 'Megan')
      .pause('1000')

      .assert.visible('#lastname')
      .assert.visible('div> label[for=lname]')
      .assert.containsText('div> label[for=lname]', 'Last Name:')
      .assert.visible('div > input[name=lastname]')
      .setValue('div > input[name=lastname]', 'Adewole')
      .pause('1000')

      .assert.visible('#email')
      .assert.visible('div> label[for=email]')
      .assert.containsText('div> label[for=email]', 'Email:')
      .assert.visible('div > input[name=email]')
      .setValue(
        'div > input[name=email]',
        `${Math.floor(Math.random() * 100)}@example.com`
      )
      .pause('1000')

      .assert.visible('#pswd')
      .assert.visible('div> label[for=password]')
      .assert.containsText('div> label[for=password]', 'Password:')
      .assert.visible('div > input[name=password]')
      .setValue('div > input[name=password]', '1234567890')
      .pause('1000')
      .assert.visible('.btn.btn-success')
      .click('.btn.btn-success')
      .pause(1000)
      .end();
  }
};
