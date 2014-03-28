function addEvent(e, type, handler) {
    if (e.addEventListener) {
        e.addEventListener(type, handler, false);
    } else {
        e.attachEvent("on"+type, handler);
    }
}

function stopDefault(e) {
    var e = e || window.event;
    (e.preventDefault)? e.preventDefault() : e.returnValue = false;
}

function inherit(parrent, child) {
    function tmp(){}

    tmp.prototype = parrent.prototype;
    child.prototype = new tmp();
}