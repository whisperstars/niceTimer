var TimerView = (function() {
    var timers = {
            'short': (new ShortTimer()).time,
            'full': (new FullTimer()).time,
            'date': (new DateTimer()).time
        },
        timer = new AbstractTimer();

    function construct(elem) {
        start(elem);

        return this;
    }

    function start(elem) {
        timer.time = timers.full;
        eventHandler(elem);

        setInterval(function() {
                    render(elem, timer.time());
                }, 1000);
    };

    function render(elem, time) {
        elem.innerHTML = time;
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