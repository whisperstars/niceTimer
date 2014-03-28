var DateTimer = (function() {
    function construct(elem) {
        AbstractTimer.call(this, elem);

        return this;
    }

    var tmp = function(){};
    tmp.prototype = AbstractTimer.prototype;
    construct.prototype = new tmp();

    //inherit(construct, AbstractTimer);

    construct.prototype.time = function() {
        var date = new Date();

        return this.addZero((date.getMonth() + 1)) + ':' + this.addZero(date.getDate()) + ':' + (date.getFullYear() + '').substr(2);
    };

    return construct;
})();