
function myFunction1(){
     var elms = document.getElementsByClassName("moreitem1");
     var btnText = document.getElementById("myBtn1");

     Array.from(elms).forEach((x) => {
     if (x.style.display === "none") {
          x.style.display = "table-row";
          btnText.innerHTML = "View Less";
     } else {
          x.style.display = "none";
          btnText.innerHTML = "View All";
     }
     })
     }

     function myFunction2(){
     var elms1 = document.getElementsByClassName("moreitem2");
     var btnText = document.getElementById("myBtn3");

     Array.from(elms1).forEach((x) => {
     if (x.style.display === "none") {
          x.style.display = "table-row";
          btnText.innerHTML = "View Less";
     } else {
          x.style.display = "none";
          btnText.innerHTML = "View All";
     }
     })
     }