 const inButton = document.getElementById("inButton")
 const deButton = document.getElementById("deButton")
 const reButton = document.getElementById("reButton")

 const countlabel = document.getElementById("countlabel")
 
 let count = 0 ;

 document.getElementById("inButton").onclick = function() {
  count ++  ;

document.getElementById("countlabel").textContent = count ;
 }

 document.getElementById("deButton").onclick = function(){
  count -- ;
  if (count < 0){
    return 
  }
document.getElementById("countlabel").textContent = count ;
 }

document.getElementById("reButton").onclick = function(){
  count = 0 ;
  document.getElementById("countlabel").textContent = count ;
}