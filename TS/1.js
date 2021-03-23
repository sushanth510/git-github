var a = 46;
var b = "nani";
var c = true;
var d;
var e = 12.4;
var f = [1, 2, 3];
var g = ["nan", "man", "jah"];
var h = [1, "nan", true];
var obj = {
    x: 1,
    fun: function () { return 2; }
};
var A = /** @class */ (function () {
    function A(z) {
        this.p = z;
    }
    A.prototype.getp = function () {
        console.log(this.p);
    };
    return A;
}());
function sum1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i in a) {
        sum = sum + a[i];
    }
    return sum;
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(g);
console.log(h);
console.log(obj.x);
console.log(obj.fun());
var obj1 = new A(4);
console.log(obj1.p);
obj1.getp();
console.log(sum1(1, 2, 3, 4));
