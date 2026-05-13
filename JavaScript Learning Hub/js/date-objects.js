function testDateObjects(){
    let today=new Date();
    console.log("Today Date:", today.toDateString());

    let newYear=new Date("2025-01-01");
    let difference=Math.floor((newYear-today)/(1000*60*60*24));
    console.log("Days until New Year:", difference);
}