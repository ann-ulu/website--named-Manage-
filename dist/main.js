






    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}





// carousel on click
let slideIndexz = 1;
showSlidez(slideIndexz);



function currentSlide(n) {
  showSlidez(slideIndexz = n);
}

function showSlidez(n) {
  let i;
  let slidez = document.getElementsByClassName("mySlides");
  let dotz = document.getElementsByClassName("dotz");
  if (n > slidez.length) {
    slideIndexz = 1
}    
  if (n < 1) {
    slideIndexz = slidez.length
}
  for (i = 0; i < slidez.length; i++) {
    slidez[i].style.display = "none";  
  }

  for (i = 0; i < dotz.length; i++) {
    dotz[i].className = dotz[i].className.replace(" active", "");
  }
  slidez[slideIndexz-1].style.display = "flex";  
  dotz[slideIndexz-1].className += " active";
}




const form = document.getElementById('form1');

  function validateEmail() {
    const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const input = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const sentence = "Please enter a valid email address";
    const successful = "Email address submitted successfully";

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      if (emailRegex.test(input.value)) {
        errorMessage.innerHTML = successful;
        input.value = "";
        setTimeout(function () {
          errorMessage.innerHTML = "";
        }, 2000);
      } 
      
    

      else {
        errorMessage.innerHTML = sentence;
        
      }
    });
  }

  // Call the validateEmail function after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    validateEmail();
  });

  



