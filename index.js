const initBrowser = require("./lib/browser");
const getTasks = require("./lib/loadTask");
const [, , ...args] = process.argv;

const run = async () => {
	await initBrowser();
	const mocha = await getTasks(args);
	return new Promise((res, rej) => {
		mocha.run(err => {
			if (err) {
				rej(err);
			} else {
				res();
			}
		});
	});
};

run()
.then(() => {
	if (global.browser) {
		browser.close();
	}
})
.catch(err => {
	if (global.browser) {
		browser.close();
	}
	console.error(err);
});
