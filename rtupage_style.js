 // Array of image sources
 var imageSources = ["img/rtuimage_2.jpg", "CSS Properties/rtufrontpage.jpg"];
    
 // Index to track the current image
 var currentIndex = 0;

 // Function to change the image source
 function changeImage() {
     var imageElement = document.getElementById("myImage");
     imageElement.src = imageSources[currentIndex];

     // Increment the index and loop back to the start if necessary
     currentIndex = (currentIndex + 1) % imageSources.length;
 }

 // Set interval to call the function every 2 seconds (adjust as needed)
 setInterval(changeImage, 3000);