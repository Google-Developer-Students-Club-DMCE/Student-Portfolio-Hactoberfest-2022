const backToTopBtn = document.querySelector(".back-to-top--btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    // console.log("berks");
    backToTopBtn.setAttribute("data-visible", true);
    // cartSection.setAttribute("data-visible", true);
  } else {
    // console.log("still berks");
    // cartSection.setAttribute("data-visible", false);
    backToTopBtn.setAttribute("data-visible", false);
  }
});

backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

var months = 
['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
var tomorrow = new Date();
/* tomorrow.setTime(tomorrow.getTime() + (1000*3600*24)); */       
document.getElementById("spanDate").innerHTML = 
tomorrow.getDate() + " " + months[tomorrow.getMonth()]+ " " + 
tomorrow.getFullYear();
