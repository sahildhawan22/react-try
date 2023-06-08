/* let str = "Sahil";
// let rev = str.split("").reverse().join("");
 console.log(rev);
let rev = "";
 for(let i=str.length; i >= 0; i--) {
    rev += str[i]
 }

 console.log(rev); */
/* 
 let ptrn = "";
 let spaces = 10;

 for(let i = 0; i < 5; i++) {
    for(let j = 0; j < )
 } */


/*  [03:43 pm] Ranjeet Kartikey

S1=Knee

S2=keen

[03:46 pm] Ranjeet Kartikey

S1=Knee
 
S2=keem */

function checkAnagram(s1, s2) {
    let map1 = new Map();
    let map2 = new Map();
    for(let i= 0; i < s1.length; i++) {
       if(map1.has(s1[i]))
        map1.set(s1[i], map1.get(s1[i]) + 1);
    else {
        map1.set(s1[i], 1);
    }
    }
}

function checkAnagram2(s1, s2) {
    if(s1.length !== s2.length) return false;
    let obj ={};
    for(let i= 0; i < s1.length; i++) {
        if(!s1[i] in obj)
            obj[s1[i]] = 1;
        else
            obj[s1[i]] = parseInt(obj[s1[i]]) + 1;
    }
    return checkUtil(obj, s2);
}

function checkUtil(obj, str) {
    for(i = 0 ; i < str.length; i++) {
        if(!str[i] in obj) return false;
    }
    return true;
}

console.log(checkAnagram2('kneel', 'keen'));

function printInvertedTriangle() {
    for(let row = 1; row <= 5; row++) {
        for(let column = 1; column <= 10; column++) {
            if((row === column) || //diagonal
               (row+column === 10) || //inverted diagonal
               (row === 1 && column % 2 === 1) //1st row
               ) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n") //row change
    }
}

printInvertedTriangle()