function testRegex(){
    let email="test@example.com";
    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("Email valid:", emailRegex.test(email));

    let sentence="JavaScript is great!";
    console.log(sentence.replace(/great/,"awesome"));
}

