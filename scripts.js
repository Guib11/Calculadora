let display = document.getElementById('display');
      let calculation = '';
  
      function number(number) {
        calculation += number;
        display.value = calculation;
      }
  
      function appendOperator(operator) {
        calculation += operator;
        display.value = calculation;
      }
  
      function calculate() {
        try {
          let result = eval(calculation);
          display.value = result;
          calculation = '';
        } catch (error) {
          display.value = 'Error';
        }
      }
  
      function clearDisplay() {
        display.value = '';
        calculation = '';
      }
