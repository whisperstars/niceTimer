var TimerView = (function() {
    var timers = {
            'short': (new ShortTimer).time,
            'full': (new FullTimer()).time,
            'date': (new DateTimer()).time
        },
        timer = new AbstractTimer();

    function construct(elem) {
        
        this.getElem = function() {
            return elem;
        };

        timer.time = timers.full;
        eventHandler(this.getElem());

        return this;
    }

    construct.prototype.start = function() {
        this.render(timer.time());
    };

    construct.prototype.render = function(time) {
        this.getElem().innerHTML = time;
    };

    function eventHandler(elem){
        function clickEvent(e) {
            stopDefault(e);

            if(timer.time === timers.short) {
                timer.time = timers.full;
            } else if(timer.time === timers.full) {
                timer.time = timers.short;
            }
        };

        function contextMenuEvent(e) {
            stopDefault(e);

            if(timer.time === timers.short || timer.time === timers.full) {
                timer.time = timers.date;
            } else if(timer.time === timers.date) {
                timer.time = timers.short;
            }
        };

        addEvent(elem, 'click', clickEvent);
        addEvent(elem, 'contextmenu', contextMenuEvent);
    };

    return construct;
})();