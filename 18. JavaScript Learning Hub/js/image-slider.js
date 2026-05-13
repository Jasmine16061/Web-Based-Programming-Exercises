let images=["../images/image1.jpg", "../images/image2.jpg", "../images/image3.jpg"];
let index=0;

function nextImage(){
    index=(index+1)%images.length;
    document.getElementById("slider").src=images[index];
}

