var fizzbuzzer = {

    fizzbuzz: function (number) {

        function isFizz(number) {
            return (number.toString().indexOf('3') >=0 || number % 3 == 0)
        };

        if (isFizz(number)) {
            return 'Fizz';
        }
        return number.toString();
    }
};
