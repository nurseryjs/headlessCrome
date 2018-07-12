const Mocha = require("mocha");

const mocha = new Mocha({
	ui: "bdd",
	reporter: "list"
});

module.exports = paths => {
	paths.forEach(path => {
		mocha.addFile(path);
	});
	return mocha;
};
