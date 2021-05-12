document.addEventListener("DOMContentLoaded",()=>{
    console.log(200)
    let el, main, date
    main = document.querySelector("body")
    el = document.querySelector(".accessibility-page")
    /* copy */
    date = ({
        myDate : new Date().getFullYear(),
        target : document.querySelector("footer p")
       
    })
    date.target.innerText += date.myDate;

    el.addEventListener("click",()=>{

        main.classList.toggle("switch-accessibility")
    })
})


       
        
      
       