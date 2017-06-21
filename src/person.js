function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}

//Person.prototype.calculate_bmi = function() {
  //this.bmiValue = 26.01;
  //this.bmiMessage = "Overweight"
//};

Person.prototype.calculate_bmi = function(argument) {
  calculator = new BMICalculator();
  if (argument === 'metric') {
    calculator.metric_bmi(this);
  } else {
    calculator.imperial_bmi(this);
  }

};
