describe("My fizzBuzz function", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Returns one of four result words", function() {

        it("should return FizzBuzz", function() {
            expect(fizzBuzz(30)).toBe("FizzBuzz");
        });
        it("should return Fizz", function() {
            expect(fizzBuzz(12)).toBe("Fizz");
        });
        it("should return Buzz", function() {
            expect(fizzBuzz(25)).toBe("Buzz");
        });
        it("should return Number", function() {
            expect(fizzBuzz(44)).toBe(number);
        });
        it("should return Number", function() {
            expect(fizzBuzz("perro")).toBe(number);
        });
    })
})
