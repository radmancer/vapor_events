function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
}
var style = getComputedStyle(document.body);
var cardWidth = parseInt(style.getPropertyValue("--card-width").slice(0, -2));
var cardHeight = outerHeight(document.getElementsByClassName("bottomCard")[0]);
var cardMargin = parseInt(style.getPropertyValue("--card-margin").slice(0, -2));