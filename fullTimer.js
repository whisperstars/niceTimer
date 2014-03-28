var FullTimer = (function() {
    function construct() {
        AbstractTimer.call(this);

        return this;
    }

    inherit(AbstractTimer, construct);

    construct.prototype.time = function() {
        var date = new Date();

        return this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
    };

    return construct;
})();