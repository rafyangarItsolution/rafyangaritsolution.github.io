
// // fungsi animasi fade in di awal load page klo mau di tambah
//   function reveal() {
//     let reveals = document.querySelectorAll(".reveal");
//     for (let i = 0; i < reveals.length; i++) {
//       let windowHeight = window.innerHeight;
//       let elementTop = reveals[i].getBoundingClientRect().top;
//       let elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       }
//     }
//   }

window.onload = () => {

// // animasi buat navbar nya klo mau ditambah
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;

  
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.boxShadow = "3px 0 1px #000";
  } else {
      navbar.style.padding = "20px 10px";
      navbar.style.backgroundColor = "#fff";
      navbar.style.boxShadow = "none";
    }
  }
}

