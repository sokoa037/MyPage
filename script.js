function myfunction(){
    var element=document.body;
    element.classList.toggle("dark-mode")
}





   let poeng = 0;
   
  function myfunction (){
    poeng = poeng + 1;
    document.getElementById("tekst").textContent = "POENG" + poeng;
  }
  function stopSpill (){
    poeng = poeng + 1;
    document.getElementById("tekst").textContent = "Game over -_- Poeng:" + poeng;

  }

  function nullstill(){
    poeng = 0;
    document.getElementById("tekst").textContent = "POENG 0";
  }