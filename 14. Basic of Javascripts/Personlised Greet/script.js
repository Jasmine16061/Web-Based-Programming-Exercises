function greet(name){
    return "Hello, "+name+"!";
}

function displayGreeting(){
    let userName=document.getElementById("username").value;
    let message=greet(userName);
    document.getElementById("greetOutput").innerHTML=message;
}