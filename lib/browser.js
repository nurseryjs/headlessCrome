require("dotenv").config();

const {
	TARGET_HOST = "https://example.com",
	HEADLESS = false,
	USE_INFO = false
} = process.env;

const puppeteer = require("puppeteer");
//init browser
module.exports = async ({
	headless = HEADLESS,
	host = TARGET_HOST,
	...config
} = {}) => {
	const browser = await puppeteer.launch({
		headless: HEADLESS,
		slowMo: 250, // slow down by 250ms
		...config
	});
	global.browser = browser;
	const [page] = await browser.pages();
	global.page = page;
	await page.goto(host);
};
