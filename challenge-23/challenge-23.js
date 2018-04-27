(function(window, document){
    'use strict';
      /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */


    var $visor = document.querySelector('[data-js="visor"]');
    var $buttonNumbers = document.querySelectorAll('[data-js="button-number"]');
    var $buttonCE = document.querySelector('[button-js="button-operation-ce"]');
    var $buttonOperations = document.querySelectorAll('[button-js="button-operation"]')
    var $buttonEqual = document.querySelector('[button-js="button-operation-result"]')


    //GET BUTTONS.VALUES
    Array.prototype.forEach.call($buttonNumbers, function(button){
        button.addEventListener('click', selectNumber, false);
    })

    //GET BUTTONS OPERATIONS
    Array.prototype.forEach.call($buttonOperations, function(button){
      button.addEventListener('click', selectOperation, false)
    })


    //FUNCTION GET OPERATIONS
    function selectOperation(){
      $visor.value = removeLastItemOperator($visor.value);
      $visor.value += this.value;

    }

    function lastItemOperator(number){
      var operations = ['+', '-', '*','/'];
      var lastItem = number.split('').pop();
      return operations.some(function(operator){
        return operator === lastItem;
      });
    }

    //BUTTON RESULT
    $buttonEqual.addEventListener('click', selectResult, false);

    //FUNCTION SELECT RESULT
    function selectResult(){
      $visor.value = removeLastItemOperator($visor.value);
      var allValues = $visor.value.match(/\d+[+*/-]?/g);
      $visor.value = allValues.reduce(function(acumulated, actual){
        var firstValue =  acumulated.slice(0, -1);
        var operator = acumulated.split('').pop();
        var lastValue = removeLastItemOperator(actual);
        var lastOperator =  lastItemOperator(actual) ? actual.split('').pop() : '';
        switch(operator){
          case '+':
              return (Number(firstValue) + Number(lastValue)) + lastOperator;
          case '-':
              return (Number(firstValue) - Number(lastValue)) + lastOperator;
          case '*':
              return (Number(firstValue) * Number(lastValue))  + lastOperator;
          case '/':
              return (Number(firstValue) / Number(lastValue))  + lastOperator;

        }

      })

    };


    //CHECK LAST ITEM OPERATOR
    function removeLastItemOperator(number){
      if(lastItemOperator(number)){
        return number.slice(0, -1);
      }
      return number;
      }


    // FUNCTION CLEAR
    $buttonCE.addEventListener('click', clearNumber, false);
    function clearNumber(){
      $visor.value = 0;
    }

    //ADD NUMBER IN THE VISOR
    function selectNumber(){
      $visor.value += this.value;

    }




})(window, document);
