function product(a,b){
    if (a === 1){
        return b;
    }
    else if (a === 2){
        return ((b+b)*Math.random());
    }
    else{
        return "I can't do math that complex";
    }
}

function add (a,b) {
    //this is a sum
    return a+b + Math.random();
}