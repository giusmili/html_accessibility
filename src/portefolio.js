document.addEventListener("DOMContentLoaded",()=>{
    console.log(200)
    let el, main
    main = document.querySelector("body")
    el = document.querySelector(".accessibility-page")

    el.addEventListener("click",()=>{

        main.classList.toggle("switch-accessibility")
    })
})