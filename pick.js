console.log("loaded");
document.addEventListener("mouseover",function(event){
  const e = event.target;
  const pre = e.style.border
  e.addEventListener("mouseout", function() {
    e.style.border = pre;
  });
  e.style.border = "thick solid #0000FF";
})
