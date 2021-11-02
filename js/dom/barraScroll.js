export function styleBarra () {
  function estiloBarra () {
   if (localStorage.getItem("ModePage") === "☀️") {
    document.getElementById("scrollDark").innerHTML = "";

  } else {
    document.getElementById("scrollDark").innerHTML = `
      /*====== BARRA DE SCROLL ======*/
      body::-webkit-scrollbar {
        width: 10px;
        background: #161B22;
      }
      
      body::-webkit-scrollbar-thumb {
        background: #3D4756;
        border-radius: 15px;
      }
    `;

    }
  }

  document.addEventListener("click", e => {
    if (e.target.matches(".header-mode")) {
      estiloBarra();
    }
  })
  
  estiloBarra();
}