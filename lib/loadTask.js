// const { promisifyAll } = require("bluebird");
// const fs = promisifyAll(require("fs"), { suffix: "A" });
// const { exec } = promisifyAll(require("child_process"), { suffix: "A" });
// const run = require("./runTask");
const getMocha = require("./mocha");

module.exports = async (paths = []) => {
	// return Promise.all(
	// 	paths.map(path => (async () => {
	// 		const file = await fs.readFileA(path, 'utf-8');
	// 		run(file);
	// 	})())
	// );
	// console.log(paths, exec)
	// for (path of paths) {
	// 	const { stdout, stderr } = await exec(`echo ${path}`)
	// 	console.log(stdout, stderr)
	// }
	const mocha = getMocha(paths)
	return mocha
};
