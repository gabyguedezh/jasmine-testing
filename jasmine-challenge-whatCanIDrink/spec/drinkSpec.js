describe("whatCanIDrink", function() {

	// Quote from solution: A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

	beforeEach(function() {
		drink = new whatCanIDrink();
	})

	describe("checks Age", function() {
		// Specs are defined by calling the global Jasmine function it
		it("should exist", function() {
			// Expectations are built with the function expect which takes a value, called the actual.
			// Each matcher implements a boolean comparison between the actual value and the expected value.
			// Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
			expect(whatCanIDrink).toBeDefined;
		});
		it("should return drink toddy when called as whatCanIDrink(13)", function() {
			var result = whatCanIDrink(13)
			expect(result).toBe("Drink Toddy");
		});
		it("should return drink whiskey when called as whatCanIDrink(55)", function(){
			var result = whatCanIDrink(55)
			expect(result).toBe("Drink Whisky");
		});
		it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(150)", function(){
			var result = whatCanIDrink(150)
			expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
		});
			it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(-44)", function(){
			var result = whatCanIDrink(-44)
			expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
		});
	});
});
