var DateTimer = (function() {
    function construct() {
        AbstractTimer.call(this);

        return this;
    }

    inherit(AbstractTimer, construct);

    construct.prototype.time = function() {
        var date = new Date();

        return this.addZero((date.getMonth() + 1)) + ':' + this.addZero(date.getDate()) + ':' + (date.getFullYear() + '').substr(2);
    };

    return construct;
})();