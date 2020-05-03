//import { browser } from "protractor";

describe('SAMPLE Smoke TEST Case', () => {

    xit('execute sample test case', () => {

        browser.driver.get('https://angular.io/events');
        browser.driver.getTitle().then(function (title) {
        console.log('Title of the page :', title);
        });
    });

        it('execute sample test case ASYNC : WAIT', async () => {

        browser.driver.get('https://angular.io/events');
        let requiredTitle = await browser.driver.getTitle();
        console.log('Title of the page :', requiredTitle);
        await expect(requiredTitle).toEqual('Angular - EVENTS');
        });
   

   let times=4;
    for(let i=0;i<=times;i++)
    {
        xit('execute sample test case ASYNC : WAIT', async () => {

        browser.driver.get('https://angular.io/events');
        let requiredTitle = await browser.driver.getTitle();
        console.log('Title of the page :', requiredTitle);
        await expect(requiredTitle).toEqual('Angular - EVENTS');
        });
   }
});