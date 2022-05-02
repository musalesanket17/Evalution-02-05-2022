// write js code here corresponding to matches.html

var arr=JSON.parse(localStorage.getItem("schedule")) || []

var favarr=JSON.parse(localStorage.getItem("favourites")) || []

 
displaydata (arr)

function displaydata(x){

     x.forEach(function(el) {
          
         var tr=document.createElement("tr")

         var td1=document.createElement("td")
         td1.innerText=el.matchnumber

         var td2=document.createElement("td")
         td2.innerText=el.teamA

         var td3=document.createElement("td")
         td3.innerText=el.teamB

         var td4=document.createElement("td")
         td4.innerText=el.date

         var td5=document.createElement("td")
         td5.innerText=el.venue

         var td6=document.createElement("td")
         td6.innerText="Favourite"
         td6.style.color="green"
         td6.style.cursor="pointer"
         td6.addEventListener("click",function(){
            Favouriteteam(el)
         })

         tr.append(td1,td2,td3,td4,td5,td6)

         document.querySelector("tbody").append(tr)

       

     });
}

 function Favouriteteam(el){
     favarr.push(el)

     localStorage.setItem("favourites",JSON.stringify(favarr))
 }

 function  filterbyvenue(){
     var selected=document.querySelector("#filterVenue").value 
    document.querySelector("tbody").innerHTML=""
      var filterlist=arr.filter(function(el){
           return el.venue==selected;
      })
      displaydata(filterlist)
 }