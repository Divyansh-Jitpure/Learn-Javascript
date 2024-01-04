// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width + "cm"
    }
    get height() {
        return this._height
    }

    get area() {
        return this._width * this._height
    }

}

const rectangle = new Rectangle(3, 4)

console.log(rectangle)
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)