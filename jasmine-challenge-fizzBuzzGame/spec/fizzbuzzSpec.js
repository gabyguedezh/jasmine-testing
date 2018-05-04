describe("My fizzBuzz function", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    

    describe("Returns one of four possible results", function() {
        
        it("should exist", function(){
            expect(fizzBuzz).toBeDefined();
        });

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
            expect(fizzBuzz(44)).toBe(44);
        });
        it("should return Number", function() {
            expect(fizzBuzz(19)).toBe(19);
        });
        it("should return Number", function() {
            expect(fizzBuzz("dog")).toBe("dog");
        });
    })
})
