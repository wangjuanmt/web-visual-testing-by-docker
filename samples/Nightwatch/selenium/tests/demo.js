describe('Demo', function() {

    before(browser => browser.url('https://www.ecosia.org/'));

    test('Demo test', function(browser) {

        browser.maximizeWindow()
            .waitForElementVisible('body')

        // write test script here
        browser.assert.visible('body')
        browser.pause(5000)

    });

    after(browser => browser.end());
});