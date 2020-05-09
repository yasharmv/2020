// var welcome_message = "welcome to the website"
// var myAge = 24;
// var exactAge = 23.53;
// var myAge = 115;

// var isPremiumuser = false;

// if(isPremiumuser == true) {
//     console.log ("thanks")
// }else {
//     console.log ("buy premium account")
// }

// if (myAge < 1) {
//     console.log ("baby")
// } else if (myAge < 10) {
//     console.log ("child")
// } else if (myAge < 20) {
//     console.log("teen")
// } else console.log("old");

// for (var i=0; i<11; i++){
//     console.log ("current i", i);
// }

// function myFunc (name, age){
//     console.log("hello,",name,".You are",age);
// }

// myFunc("ali", 43); 
// myFunc("baku", 32); 


var btn = document.getElementById("mybutton");
function buttonClicked() {
    console.log("button was clicked");
var textArea = document.getElementsByClassName("mytext");
var customText = document.getElementsByClassName("my-input")
var results = document.getElementById("text");

results.innerHTML = "hello " + customText[0].value;
results.innerHTML += "   message:" + textArea[0].value;
console.log(textArea);

    // btn.removeEventListener("click", buttonClicked);
    // document.getElementById("text").innerHTML = "dont do it";
}


// var hobbies = ["reading", "programming", "swimming", "driving"];
// hobbies.push("archery");

// hobbies.forEach (function (item, index){
//     console.log("i like", index,item);
// }
// );

// var indexNum = hobbies.indexOf('swimming')
// console.log(indexNum);

btn.addEventListener("click", buttonClicked);


function saySomething(phrase){
    console.log("you said:" + phrase)
};

var p = ("how are you")
saySomething(p);

function getPhraseLength (phrase, another){
    var l = phrase.length;
    return l;
}
var p1 = ("i have got a pen");
var p2 = ("how are you today")

var thisLength = getPhraseLength(p1 + p2);

console.log(thisLength);