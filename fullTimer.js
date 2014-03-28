var FullTimer = (function() {
    function construct(elem) {
        AbstractTimer.call(this, elem);

        return this;
    }

    var tmp = function(){};
    tmp.prototype = AbstractTimer.prototype;
    construct.prototype = new tmp();

    construct.prototype.time = function() {
        var date = new Date();

        return this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
    };

    return construct;
})();