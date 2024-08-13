var a="   fly me   to   the moon  ";
a=a.trim();
var length=0
for(let i=a.trim().length-1;i>=0;i--){
    if(a[i]!=' '){
        length++;
    }
    else{
        break;
    }
    


}


// console.log(Math.ceil(Math.pow(8,0.5)))
    
function sqrt(number) {
    if (number < 0) return NaN; 
    if (number === 0 || number === 1) return number;

    let low = 0;
    let high = number;
    let mid;
    let tolerance = 0.000001; 

    while (high - low > tolerance) {
        mid = (low + high) / 2;
        if (mid * mid > number) {
            high = mid;
        } else {
            low = mid;
        }
    }

    return (low + high) / 2;
}

