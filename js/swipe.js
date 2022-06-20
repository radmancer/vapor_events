var swipeVerticalSpeed = 6;
var swipeHorizontalSpeed = 2;

var verticalSwipe = false;
var horizontalSwipe = false;

let cLL = new circularLinkedList();
cLL.append(["css/images/knife.JPG", "You have my sword..."]);
cLL.append(["css/images/arrow.JPG", "And you have my bow."]);
cLL.append(["css/images/axe.JPG", "And *my* axe."]);
cLL.append(["css/images/2.png", "yellow"]);
cLL.append(["css/images/chameleon_scythe.png", "scythe"]);
cLL.append(["css/images/imperial_pick.png", "pick"]);
cLL.append(["css/images/1.png", "red"]);

let pointer = cLL.getHead();

var el = document.getElementById('swipezone');

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

swipedetect(el, function(swipedir){
    if(swipedir == "up"){

        pointer = pointer.next;
        console.log("Card Swipe (up)" + pointer.element);

        verticalSwipe = true;
        horizontalSwipe = false;
        var element = document.getElementById("venueSlider");

        (function scrollUp(i) {
            element.style.top = -i + "px";
            setTimeout(function () {
                if (i < cardHeight) {          // If i > 0, keep going
                    i = i + swipeVerticalSpeed;
                    scrollUp(i);       // Call the loop again, and pass it the current value of i
                }
                else{
                    element.style.top = "0vh";
                    //verticalMiddleCard.style.visibility = "hidden";
                    //horizontalMiddleCard.style.visibility = "visible";
                    updateCards();
                }
            }, 20);
        })(1);
    }
    else if(swipedir == "down"){

        pointer = pointer.prev;
        console.log("Card Swipe (down)" + pointer.element);
        
        verticalSwipe = true;
        horizontalSwipe = false;
        var element = document.getElementById("venueSlider");

        (function scrollUp(i) {
            element.style.top = i + "px";
            setTimeout(function () {
                if (i < cardHeight) {          // If i > 0, keep going
                    i = i + swipeVerticalSpeed;
                    scrollUp(i);       // Call the loop again, and pass it the current value of i
                }
                else{
                    element.style.top = "0vh";
                    //verticalMiddleCard.style.visibility = "hidden";
                    //horizontalMiddleCard.style.visibility = "visible";
                    updateCards();
                }
            }, 20);
        })(1);
    }
});

function updateCards(){
    //Initialize the first (pre-top) card with a description
    //The card's image is not visible, so it is not necessary to initialize it.
    let preTopCard = document.getElementById("preTopCard");
    let preTopCardDescription = preTopCard.children[1];
    preTopCardDescription.innerHTML = pointer.prev.prev.element[1];

    //Initialize the second (top) card with a picture and description.
    let topCard = document.getElementById("topCard");
    let topCardImage = topCard.children[0];
    topCardImage.src = pointer.prev.element[0];
    let topCardDescription = topCard.children[1];
    topCardDescription.innerHTML = pointer.prev.element[1];

    //Initialize the third (middle) card with a picture and description.
    let verticalMiddleCard = document.getElementById("verticalMiddleCard");
    let verticalMiddleCardImage = verticalMiddleCard.children[0];
    verticalMiddleCardImage.src = pointer.element[0];
    let verticalMiddleCardDescription = verticalMiddleCard.children[1];
    verticalMiddleCardDescription.innerHTML = pointer.element[1];

    //Initialize the fourth (bottom) card with a picture and description.
    let bottomCard = document.getElementById("bottomCard");
    let bottomCardImage = bottomCard.children[0];
    bottomCardImage.src = pointer.next.element[0];
    let bottomCardDescription = bottomCard.children[1];
    bottomCardDescription.innerHTML = pointer.next.element[1];

    //Initialize the fifth (post-bottom) card with a picture.
    //The card's description is not visible, so it is not necessary to initialize it.
    let postBottomCard = document.getElementById("postBottomCard");
    let postBottomCardImage = postBottomCard.children[0];
    postBottomCardImage.src = pointer.next.next.element[0];
}

updateCards();