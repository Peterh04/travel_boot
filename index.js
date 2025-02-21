const scrollBtn = document.getElementById("scrollToTop");
const navbar = document.querySelector(".navbar");
const selectionMenu = document.querySelector(".selectionBtnOptions");
const toggleBtn = document.querySelector(".selectionsBtn"); 
const menu = document.querySelector(".selectionBtnOptions");
const links = document.querySelectorAll(".selectionBtnOptions a");
const navbarHeight = document.querySelector(".navbar").offsetHeight;

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 
        menu.classList.remove("show");

        const targetId = this.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - navbarHeight - 10; 
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    });
});


window.addEventListener("scroll", function () {
  // Show or hide the scroll-to-top button
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }

  // Change navbar background on scroll
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    
    navbar.classList.remove("transparent")
  } else {
    
    navbar.classList.add("transparent")
  }
});

// Scroll to the top when button is clicked
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


console.log(toggleBtn)

toggleBtn.addEventListener("click", function () {
    selectionMenu.classList.toggle("show");
});



