function testBuiltInObjects(){
    console.log("Testing Built-in Objects...");

    let randomNum=Math.floor(Math.random()*10)+1;
    console.log("Random Number:", randomNum);

    let str="Hello, Web Programming!";
    console.log(str.toUpperCase());

    let fruits=["Apple", "Banana", "Orange"];
    fruits.push("Grapes");
    console.log(fruits);
}