const APP_BASE_URL = 'http://localhost:8000';

module.exports = {
  // beforeEach(browser, done) {
  //   browser.resizeWindow(1480, 1480, done);
  // },
  'Admin should be able to see the landing page': (browser) => {
    browser
      .url(APP_BASE_URL)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_URL}/`)
      .pause(2000);
  },
  'Admin should see the navigation bar and the brand logo': (browser) => {
    browser.assert
      .visible('body')
      .assert.visible('.navbar')
      .assert.visible('.container-fluid')
      .assert.containsText('.navbar-brand', 'Encore');
  },
  'Admin should be able to click the login button on the navbar': (browser) => {
    browser
      .pause(2000)
      .assert.visible('#signin')
      .pause(2000)
      .click('#signin')
      .pause(2000);
  },
  'Admin should be able to see the intro on the sign-in page': (browser) => {
    browser.assert
      .visible('#logIn')
      .assert.visible('#centerlogin')
      .assert.visible('#signinTitle')
      .assert.containsText('#signinTitle', 'Log In');
  },
  'Admin should be able to see the elements of the sign-in form': (browser) => {
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
  'Admin should be able to modify a center': (browser) => {
    browser.assert
      .visible('.card-footer')
      .assert.visible('.nav')
      .assert.visible('#modify')
      .pause(2000)
      .assert.visible('#modifycenter')
      .click('#modifycenter')
      .pause(2000)
      .assert.visible('#modifyCenterModal')
      .assert.visible('#modifyCenterTitle')
      .assert.containsText('#modifyCenterTitle', 'MODIFY CENTER')
      .assert.visible('#modifyCenterForm')

      .waitForElementVisible('#modifiedCenterName', 1000)
      .assert.visible('#modifiedCenterName')
      .click('#modifiedCenterName')
      .clearValue('#modifiedCenterName')
      .setValue('#modifiedCenterName', '.')

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterName', 1000)
      .assert.visible('#modifiedCenterName')
      .click('#modifiedCenterName')
      .clearValue('#modifiedCenterName')
      .setValue('#modifiedCenterName', 'cocodom')

      .waitForElementVisible('#modifiedCenterDescription', 1000)
      .assert.visible('#modifiedCenterDescription')
      .click('#modifiedCenterDescription')
      .clearValue('#modifiedCenterDescription')
      .setValue('#modifiedCenterDescription', ' ')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterDescription', 1000)
      .assert.visible('#modifiedCenterDescription')
      .click('#modifiedCenterDescription')
      .clearValue('#modifiedCenterDescription')
      .setValue('#modifiedCenterDescription', 'Simply Amazing')

      .waitForElementVisible('#modifiedCenterLocation', 1000)
      .assert.visible('#modifiedCenterLocation')
      .click('#modifiedCenterLocation')
      .clearValue('#modifiedCenterLocation')
      .setValue('#modifiedCenterLocation', ' ')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterLocation', 1000)
      .assert.visible('#modifiedCenterLocation')
      .click('#modifiedCenterLocation')
      .setValue('#modifiedCenterLocation', '8, Angola way Banana Island')

      .waitForElementVisible('#modifiedCenterPrice', 1000)
      .assert.visible('#modifiedCenterPrice')
      .click('#modifiedCenterPrice')
      .clearValue('#modifiedCenterPrice')
      .setValue('#modifiedCenterPrice', ' ')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterPrice', 1000)
      .assert.visible('#modifiedCenterPrice')
      .click('#modifiedCenterPrice')
      .setValue('#modifiedCenterPrice', '50000')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterFacilities', 1000)
      .assert.visible('#modifiedCenterFacilities')
      .click('#modifiedCenterFacilities')
      .clearValue('#modifiedCenterFacilities')
      .setValue('#modifiedCenterFacilities', ' ')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterFacilities', 1000)
      .assert.visible('#modifiedCenterFacilities')
      .click('#modifiedCenterFacilities')
      .clearValue('#modifiedCenterFacilities')
      .setValue('#modifiedCenterFacilities', 'Swimming pool')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterCapacity', 1000)
      .assert.visible('#modifiedCenterCapacity')
      .click('#modifiedCenterCapacity')
      .clearValue('#modifiedCenterCapacity')
      .setValue('#modifiedCenterCapacity', ' ')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterCapacity', 1000)
      .assert.visible('#modifiedCenterCapacity')
      .click('#modifiedCenterCapacity')
      .clearValue('#modifiedCenterCapacity')
      .setValue('#modifiedCenterCapacity', 'we')
      .pause(2000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(2000)

      .waitForElementVisible('#modifiedCenterCapacity', 1000)
      .assert.visible('#modifiedCenterCapacity')
      .click('#modifiedCenterCapacity')
      .clearValue('#modifiedCenterCapacity')
      .setValue('#modifiedCenterCapacity', 5000)

      .waitForElementVisible('button[name=modify]', 5000)
      .assert.visible('button[name=modify]')
      .pause(2000)
      .click('button[name=modify]')
      .pause(3000)
      .end();
  }
};
