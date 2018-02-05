console.log("Meow!");

var chewy = 100000;
var solo = "Han";
var falcon = true;

if(falcon == true){
    console.log("Totally true")
}else{
    console.log("Totes not true")
}

for(var i = 0; i <10; i++){
    console.log("Here: " , i);
}

var scott = {};
scott.name = "Scott Bromander";
scott.age = 18;
scott.hair = "brown";
console.log(scott.age);

function something(){
    console.log("Yao");
    return "YAO!";
}

var doesThisWork = something();
console.log(doesThisWork);

doesThisWork = 10;
doesThisWork = true;
doesThisWork = "WHAT THE HELL";
console.log(doesThisWork);


doesThisWork = function(){ //Anonymous function
    console.log("Yes, this too");
};
doesThisWork();

console.log(doesThisWork);

var ann = document.getElementById("cathryn").innerText = "Does this work?";
console.log(ann);


