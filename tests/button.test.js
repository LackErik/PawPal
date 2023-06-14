const puppeteer = require('puppeteer');
const app = require('../app');



describe('Button Test', () => {

  let browser;
  let page;

  beforeAll(async () => {
    app.start();
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Hier die URL der HTML-Seite einfügen
  }, 30000);

  afterAll(async () => {
    await browser.close();
    app.close();
  });

  it('should simulate a click event on the button and redirect to the expected location', async () => {
    await page.waitForSelector('.button1'); // Hier den Selektor des Buttons angeben

    const button = await page.$('.button1');
    await button.click();

    await page.waitForNavigation({ timeout: 10000 });

    const url = await page.url();
    expect(url).toBe('http://localhost:3000/question'); // Hier die erwartete Weiterleitungs-URL einfügen
  });

  it('should simulate a click event on the "Go Back" button and redirect back to the main page', async () => {
    await page.waitForSelector('#back_btn'); // Hier den Selektor des "Go Back" Buttons angeben

    const goBackButton = await page.$('#back_btn');
    await goBackButton.click();

    await page.waitForNavigation({ timeout: 10000 });

    const url = await page.url();
    expect(url).toBe('http://localhost:3000/home'); // Hier die erwartete Weiterleitungs-URL zurück zur Hauptseite einfügen
  });

  it('should simulate a click event on the home button and redirect to the home page', async () => {
    await page.waitForSelector('#logo'); // Hier den Selektor des Home Buttons angeben
  
    const homeButton = await page.$('#logo');
    await homeButton.click();
  
    await page.waitForNavigation({ timeout: 10000 });
  
    const url = await page.url();
    expect(url).toBe('http://localhost:3000/home'); // Hier die erwartete Weiterleitungs-URL zur Startseite einfügen
  });

  it('should simulate a click event on the "Impressum" link and redirect to the impressum page', async () => {
    await page.waitForSelector('#impressum_btn'); // Hier den Selektor des "Impressum" Links angeben

    const impressumLink = await page.$('#impressum_btn');
    await impressumLink.click();

    await page.waitForNavigation({ timeout: 10000 });

    const url = await page.url();
    expect(url).toBe('http://localhost:3000/impressum'); // Hier die erwartete Weiterleitungs-URL zur Impressum-Seite einfügen
  });
});
