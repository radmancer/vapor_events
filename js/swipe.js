var swipeVerticalSpeed = 6;
var swipeHorizontalSpeed = 2;

var verticalSwipe = false;
var horizontalSwipe = false;

// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 50, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//USAGE:

var el = document.getElementById('swipezone');
swipedetect(el, function(swipedir){
    if(swipedir == "up"){
        verticalSwipe = true;
        horizontalSwipe = false;
        var element = document.getElementById("venueSlider");

        //Makes horizontal middle card active after swipe up.
        //var verticalMiddleCard = document.getElementById("verticalMiddleCard");
        //verticalMiddleCard.style.visibility = "visible";
        //var horizontalMiddleCard = document.getElementById("horizontalMiddleCard");
        //horizontalMiddleCard.style.visibility = "hidden";


        (function scrollUp(i) {
            element.style.top = -i + "px";
            setTimeout(function () {
                //console.log(cardHeight);
                if (i < cardHeight) {          // If i > 0, keep going
                    i = i + swipeVerticalSpeed;
                    scrollUp(i);       // Call the loop again, and pass it the current value of i
                }
                else{
                    element.style.top = "0vh";
                    //verticalMiddleCard.style.visibility = "hidden";
                    //horizontalMiddleCard.style.visibility = "visible";
                }
            }, 20);
        })(1);
    }
    else if(swipedir == "down"){
        verticalSwipe = true;
        horizontalSwipe = false;
        var element = document.getElementById("venueSlider");

        //Makes horizontal middle card active after swipe up.
        //var verticalMiddleCard = document.getElementById("verticalMiddleCard");
        //verticalMiddleCard.style.visibility = "visible";
        // var horizontalMiddleCard = document.getElementById("horizontalMiddleCard");
        // horizontalMiddleCard.style.visibility = "hidden";

        (function scrollUp(i) {
            element.style.top = i + "px";
            setTimeout(function () {
                //console.log(cardHeight);
                if (i < cardHeight) {          // If i > 0, keep going
                    i = i + swipeVerticalSpeed;
                    scrollUp(i);       // Call the loop again, and pass it the current value of i
                }
                else{
                    element.style.top = "0vh";
                    //verticalMiddleCard.style.visibility = "hidden";
                    //horizontalMiddleCard.style.visibility = "visible";
                }
            }, 20);
        })(1);
    }
});