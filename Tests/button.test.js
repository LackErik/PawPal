const puppeteer = require('puppeteer');

describe('Button Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Ändern Sie die URL entsprechend Ihrer Anwendung
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should simulate a click event on the button and redirect to the expected location', async () => {
    jest.setTimeout(10000); // Timeout-Limit auf 10 Sekunden erhöhen
    await page.click('.button1'); // Ändern Sie den Selektor entsprechend Ihrer Button-Klasse
    await page.waitForNavigation();

    const url = await page.evaluate(() => window.location.href);
    expect(url).toBe('http://localhost:3000/question'); // Ändern Sie die URL entsprechend der erwarteten Weiterleitungs-URL
  });
});