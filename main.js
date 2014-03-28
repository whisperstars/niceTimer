addEvent(window, 'load', function() {

    var dom_elem = document.getElementById('time'),
        
        timer_view = new TimerView(dom_elem);

    setInterval(function() {
                    timer_view.start();
                }, 100);
});