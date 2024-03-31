String.prototype.removeClass = function(...str) {
    /* Applied to a string of CSS classes, it accepts multiple classes as arguments and returns an array equal to the original, but without the given classes*/
    const arr = this.split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let different = true;
        for(let j = 0; j < str.length; j++) {
            if(arr[i] == str[j]) {
                different = false;
            }
        }
        if(different) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
};

const holes = document.getElementsByClassName("hole")
const container = document.getElementById("container");

function changeColor() {
    if(this.className.indexOf("yellow") === -1) {
        this.className += " yellow";
    } else {
        this.className = this.className.removeClass("yellow");
    }
}

function paint() {
    for(let element of holes) {    
        element.addEventListener("mouseover", changeColor);
        element.addEventListener("mousedown", changeColor);
    }
}

function noPaint() {
    for(let element of holes) {    
        element.removeEventListener("mouseover", changeColor);
    }
}

container.addEventListener("mousedown", paint);
container.addEventListener("mouseup", noPaint);