let enter_btn =document.querySelector(".btn");

let card =document.querySelector(".card");

enter_btn =addEventListener("click",getfacts);
function getfacts(){
    let input=document.querySelector("input").value;
    let card_title=document.querySelector(".card_title");
    let card_text=document.querySelector("card_text");

    fetch("http://numbersapi.com/${input)")
    .then((Response) => Response.text())
    .then((data) => {
        card_title.innerHTML=input;
        card_title.innerHTML=data;
    })
}

