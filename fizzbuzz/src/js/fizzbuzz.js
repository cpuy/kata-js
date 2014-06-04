var fizzbuzzer = function () {

    var FIZZ = 3;
    var BUZZ = 7

    function contains(number, contained) {
        return number.toString().indexOf(contained) >= 0;
    }

    function should(fizzOrBuzz, number) {
        return (contains(number, fizzOrBuzz.toString()) || isMultipleOf(number, fizzOrBuzz))
    };

    function isMultipleOf(number, diviser) {
        return number % diviser == 0;
    }
    
    return {

        fizzbuzz: function (number) {

            if (should(FIZZ, number)) {
                return 'Fizz';
            }

            if (should(BUZZ, number)) {
                return 'Buzz';
            }
            return number.toString();
        }
    }
}();
