var fizzbuzzer = {

    fizzbuzz: function (number) {

        function contains(number, contained) {
            return number.toString().indexOf(contained) >= 0;
        }

        function isFizz(number) {
            return (contains(number, '3') || number % 3 == 0)
        };

        if (isFizz(number)) {
            return 'Fizz';
        }
        if (contains(number, '7')) {
            return 'Buzz';
        }
        return number.toString();
    }
};
