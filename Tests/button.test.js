const puppeteer = require('puppeteer');

describe('Button Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Hier die URL der HTML-Seite einfügen
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should simulate a click event on the button and redirect to the expected location', async () => {
    await page.waitForSelector('.button1'); // Hier den Selektor des Buttons angeben

    const button = await page.$('.button1');
    await button.click();

    await page.waitForNavigation();

    const url = await page.url();
    expect(url).toBe('http://localhost:3000/question'); // Hier die erwartete Weiterleitungs-URL einfügen
  });
});