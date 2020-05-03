//import { browser } from "protractor";

describe('SAMPLE Smoke TEST Case', () => {

    it('execute sample test case ASYNC : WAIT', async () => {

        browser.driver.get('https://angular.io/events');
        let requiredTitle = await browser.driver.getTitle();
        console.log('Title of the page :', requiredTitle);
        await expect(requiredTitle).toEqual('Angular - EVENTS');
        });

    
});