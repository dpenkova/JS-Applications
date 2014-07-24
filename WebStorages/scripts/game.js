define([], function(){
    'use strict';

    var game = (function(){

        function getCurrentResult(hiddenNumber, input){
            var ramCount,
                sheepCount,
                i;
            ramCount = 0;
            sheepCount = 0;

            for(i = 0; i < hiddenNumber.length; i+=1){
                if(hiddenNumber[i] === input[i]){
                    ramCount += 1;
                }
                else if(hiddenNumber.indexOf(input[i]) >= 0 ) {
                    sheepCount += 1;
                }
            }

            return {
                userInput: input,
                rams: ramCount,
                sheep: sheepCount
            }

        }

        function validateInput(input){
            if(validateLength(input) && validateFirstSymbolNotZero(input) && isNumber(input) && !haveRepeatingDigits(input)){
                return true;
            }
            return false;
        }

        function validateLength(input){
            if(input.length === 4){
                return true;
            }
            return false;
        }

        function validateFirstSymbolNotZero(input){
            if(input[0] != 0)
            {
                return true;
            }
            return false;
        }

        function isNumber(input){
            for(var i = 0; i< input.length; i+=1){
                if(!isFinite(parseInt(input[i]))){
                    return false;
                }
            }
            return true;
        }

        function haveRepeatingDigits(input){
            var valuesSoFar = [];
            for (var i = 0; i < input.length; ++i) {
                var value = input[i];
                if (valuesSoFar.indexOf(value) !== -1) {
                    return true;
                }
                valuesSoFar.push(value);
            }
            return false;
        }

        return{
            getCurrentResult: getCurrentResult,
            validateInput: validateInput
        }

    }());

    return game;
});