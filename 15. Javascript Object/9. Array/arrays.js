function testArrays(){
    let numbers=[10,20,30,40,50];
    console.log("Original Array:", numbers);

    numbers.push(60);
    console.log("After push(60):",numbers);

    numbers.pop();
    console.log("After pop():", numbers);

    console.log(
        "Using map():",
        numbers.map((num)=>num*2)
    );
}

