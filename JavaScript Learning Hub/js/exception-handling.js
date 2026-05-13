function testExceptionHandling(){
    try{
        let num=10;
        let denom=0;
        if(denom===0) throw new Error("Cannot divide by Zero!");
        console.log(num/denom);
    } catch(error){
        console.log("Error:", error.message);
    }
}

