function parseCount(numberToParse) {
    const parsed = Number.parseFloat(numberToParse);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}
function validateCount(numberToParse) {
    try { return parseCount(numberToParse); }
    catch (Error) { return Error; }
}
class Triangle {
    #a;
    #b;
    #c;
    constructor(a, b, c) {
        if ((a + b) > c && (a + c) > b && (b + c) > a) {
            this.#a = a;
            this.#b = b;
            this.#c = c;
        }
        else { throw new Error("Треугольник с такими сторонами не существует") };
    }
    get perimeter() {
        return +this.#a + this.#b + this.#c;
    }
    get area() {
        const p = this.perimeter / 2;
        return +Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c)).toFixed(3);
    }

}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return Object.freeze({
            get area() { return "Ошибка! Треугольник не существует" },
            get perimeter() { return "Ошибка! Треугольник не существует" }
        })
    }
}