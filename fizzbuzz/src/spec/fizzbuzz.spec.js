/*global describe, it */
'use strict';

(function () {
    describe('Fizzbuzzer', function () {

        it('should return the given number in string', function () {
            var number = fizzbuzzer.fizzbuzz(4);

            expect(number).toBe('4');
        });

       it('should return Fizz when the given number contains a 3', function () {
            var number = fizzbuzzer.fizzbuzz(123);

            expect(number).toBe('Fizz');
        });

        it('should return Fizz when the given number is a multiple of 3', function () {
            var number = fizzbuzzer.fizzbuzz(12);

            expect(number).toBe('Fizz');
        });
    });
})();
