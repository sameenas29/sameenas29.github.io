const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');
var fs = require('fs');

const DEFAULT_TIMEOUT = 5000;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);

  await page.goto('https://sameenas29.github.io./');
  await page.waitForTimeout(DEFAULT_TIMEOUT);
  

  const results = await new AxePuppeteer(page).withTags(['wcag21aa','wcag21a', 'wcag21aaa', 'wcag2a', 'wcag2aa', 'wcag2aaa']).analyze();

  console.log("List of violations");
  console.log(results.violations);
  console.log(" ");

  console.log("individual list of the elements causing these errors");
  results.violations.forEach(function (arrayItem) {
    var currentObject = arrayItem.nodes;
    console.log(currentObject);
   });

  await page.close();
  await browser.close();
})();
