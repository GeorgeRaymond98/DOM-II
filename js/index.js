// Your code goes here
const headerH1Tag = document.querySelector(".main-navigation .container h1");
const contentPTag = document.querySelector('.content-destination p');
const introH2Tag = document.querySelector('.container .intro h2');
const funBusTag = document.querySelector(".content-section  .text-content h2");
const imgNewSize = document.querySelector(".content-section .img-content .img-fluid");
const contentPickTag = document.querySelector(".content-pick");
const contentDPickTag = document.querySelector(".content-pick .destination");
const stopLink = document.querySelector(".main-navigation, .nav-container .nav .nav-link");


headerH1Tag.addEventListener("mouseenter", (event) => {
  event.target.style.color = "red";

  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

document.addEventListener('keydown',()=> { 
    contentPTag.style.color="yellow";
});

document.addEventListener("wheel", () => {
    introH2Tag.style.fontSize = '10rem';
    setTimeout(function() {
        introH2Tag.style.fontSize = "";
      }, 5000);
}, false);

window.addEventListener('load', () => {
    funBusTag.innerHTML = 'BOOOO!!';
});

window.addEventListener("resize", () => {
    imgNewSize.style.display = 'none';
    console.log('works');
  });


document.querySelectorAll(".destination .btn").forEach(el => {
    el.addEventListener("dblclick", () => {
      el.style.color="#e62739"
    })
  })

  document.querySelectorAll('.main-navigation, .nav-container .nav .nav-link').forEach(el => {
    el.addEventListener('focus', () => {
        el.style.color="#e62739"
    });
  });


document.addEventListener('click', (event) => { 
    contentPickTag.style.backgroundColor="purple";
})
  
document.addEventListener('click', (event) =>{
    contentDPickTag.style.color = 'red';
    event.stopPropagation()
})


stopLink.addEventListener("click", (event) => {
  console.log("First link not working ");
  event.preventDefault();
})
