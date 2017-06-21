describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 198.416, height: 74.4094});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

});
