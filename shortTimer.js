var ShortTimer = (function() {
    function construct(elem) {
        AbstractTimer.call(this, elem);

        return this;
    }

    inherit(AbstractTimer, construct);

    construct.prototype.time = function() {
        var date = new Date();

        return this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes());
    };

    return construct;
})();