var assert = require("assert");
describe("Array", async function() {
	await describe("#indexOf()", async function() {
		it("should return -1 when the value is not present", async function() {
			await page.goto("http://ya.ru");
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
