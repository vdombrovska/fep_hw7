const calc = createCalculator(10);

function createCalculator (data) {
    let result = data;
    return {
        sum : function (x){
            return data = data + x;
        },
        mult : { function (x){
            return data = data * x;
        },
        sub : function (x){
            return data = data - x;
        },
        div : function (x){
            return data = data / x;
        },
        set :function (x){
            return data = x;
        } ,

        }
    }
}


console.log (calc.sum(5)); /// 15
console.log (calc.mult(10)); // 150
console.log (calc.sub(40)); // 110
console.log (calc.div(10)); // 11
console.log (calc.set(100)); //