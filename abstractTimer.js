var AbstractTimer = (function() {

    function construct(elem) {

        return this;
    }

    construct.prototype.time = function() {
        return 'AbstractTimer';
    };

    construct.prototype.addZero = function(number) {
        return (number < 10)? '0' + number : number;
    };

    return construct;
})();