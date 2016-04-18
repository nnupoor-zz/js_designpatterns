// Revealing Module
var shapeReveal = (function () {

    // private variables
    var currentShape = "circle",
        color = "red",
        owner = "John";

    // private function
    function privateMsg() {
        console.log("Your shape color is: " + color);
    }
    
    // to be public
    function changeOwner(newOwner) {
        owner = newOwner;
        console.log("Shape master: " + owner);
    }

    // to be public
    function changeColor(newColor) {
        color = newColor;
        privateMsg(); // calling a private function
    }
    
    // public
    return {
        shape: currentShape,
        setOwner: changeOwner,
        setColor: changeColor
    };
        
})();

shapeReveal.shape // circle
shapeReveal.setOwner("Gab") // "Shape master: Gab"
shapeReveal.setColor("blue") // "Your shape color is: blue"