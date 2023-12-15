document.getElementById("contactButton").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show");
});


window.onclick = function(event) {
    if (!event.target.matches("#contactButton")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        }
    }
    }
}


// image slider function

let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
    currentSlide = 0;
    } else if (index < 0) {
    currentSlide = slides.length - 1;
    } else {
    currentSlide = index;
    }

    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Add automatic slide change
setInterval(nextSlide, 3000); // Change slide every 3 seconds



  //end of image slider



function addHeader(event) {
    event.preventDefault();
    let head = document.querySelector("#header-section");
    head.innerHTML = 
                `
                    <header>
                    <div class="home-logo">
                        <img src="feresegna-logo.png" alt="" />
                    </div>
                    <div class="main-menu-links">
                        <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about-us.html">About Us</a>
                        </li>
                        <li><a href="menu.html">Menu</a></li>
                        <li>
                            <a href="contact-us.html">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    </header>
                `;
}

let x = document.querySelector(".about-container-one");
x.addEventListener("onload", addHeader);
