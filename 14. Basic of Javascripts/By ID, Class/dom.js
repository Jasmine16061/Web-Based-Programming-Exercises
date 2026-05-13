// Runs when the button is clicked
function updateText() {
    
    // Select element by ID
    let paragraph=document.getElementById("demo");
    paragraph.innerHTML="Updated text by ID!";
    paragraph.style.color="green"; 

    // Select elements by class name
    let items=document.getElementsByClassName("item");
    items[0].innerHTML="Updated First Item by Class!";
    items[0].style.fontSize="18px"; 

    // Select elements by tag name
    let allParagraphs=document.getElementsByTagName("p");
    allParagraphs[1].innerHTML="Updated Second Paragraph by Tag Name!";
    allParagraphs[1].style.color="orange";

    // Select first element with querySelector
    let firstItem = document.querySelector(".item");
    firstItem.style.color = "blue"; // Changing color explicitly

    // Select multiple elements using querySelectorAll
    let allItems = document.querySelectorAll(".item");
    allItems.forEach((item, index) => {
        item.style.fontWeight = "bold"; 
        if (index !== 0) {
            item.innerHTML = `Item number ${index + 1} updated!`;
        }
    });
}

// function updateText(){
    // let allItems= document.querySelectorAll(".item");
    // allItems.forEach((item,index)=>{
        // item.style.fontWeight="blod";
        // item.innerHTML=`Item ${index+1} updated!`;
    // })
// }

// function updateText(){
    // let items= document.getElementsByClassName("item");
    // items[0].innerHTML="First item updated by class!";
// }

// function updateText(){
    // let paragraph= document.getElementById("demo");
    // paragraph.innerHTML="Text update by ID!";
// }

// function updateText(){
    // let paragraph= document.getElementsByTagName("p");
    // paragraph[1].innerHTML="Second paragraph updated by Yag Name!";
// }

// function updateText(){
    // let paragraphs= document.getElementsByTagName("p");
    // paragraphs[1].innerHTML="Second paragraph updated by Tag Name!";
// }