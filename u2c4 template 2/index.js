// write js code here corresponding to index.html
// Yos should add submit event on the form

 

  document.querySelector("#masaiForm").addEventListener("submit",fun1)
  var arr=JSON.parse(localStorage.getItem("schedule")) || []

  function fun1(){
      event.preventDefault()
          var obj={
               matchnumber:document.querySelector("#matchNum").value,
               teamA:document.querySelector("#teamA").value,
               teamB:document.querySelector("#teamB").value,
               date:document.querySelector("#date").value,
               venue:document.querySelector("#venue").value,

            
          }
           arr.push(obj)
           localStorage.setItem("schedule",JSON.stringify(arr))
  }