// ----------------->stiky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ---------------------->carosal


// -----------------faq
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{
    faq.classList.toggle("active");
  })
});
// ---------------------

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');

});




// desige="";
// if (desige==true){
// console.log("reach doc")
// }
// else{
// function helth(weight,hight){
//     hight=hight*3.28
//     total=weight/hight
//     if(total<10){
//         console.log(`you need weight gain,your weght is law as per your info `)
//     }
//     else if(total<12){
//         console.log(`no need change just maintain it ,as per your info `)
//     }
//     else{
//         console.log(`you need weight los,your weght is high as per your info `)
//     }
// }
// console.log(helth(60,1.85))
// }
