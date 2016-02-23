'use strict';

var fizz_buzz_whizz = require("../src/fizz-buzz-whizz.js");

describe('fizz_buzz_whizz', function() {
  var spec_num = [3, 5, 7];

  it("特殊数", function() {
    var result = fizz_buzz_whizz(spec_num);

    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", "Whizz", 8, "Fizz", "Whizz", 11, "Fizz", "Fizz", "Whizz", "FizzBuzz"]);
  });
});