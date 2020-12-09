for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even")

    } else {
        console.log(i + " is odd")
    }
}

let a = ["sai", "abdul", "sai", "kishore", "vicky", "abdul"];
console.log([...new Set(a)]);
//console.log(a.filter((item, index) => a.indexOf(item) === index));

//for (let i = 1; i <= 5; i++) {
//console.log("*".repeat(i));
//}
//for (let i = 1; i <= 5; i++) {
//for (let j = 1; j <= i; j++) {
//document.write("*");

//}
//document.write("</br> ");
//}