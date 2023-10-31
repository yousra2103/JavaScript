let container = document.querySelector(".container2");
let openShopping = document.querySelector(".container1");
let closeShopping= document.querySelector(".closeShopping");
let body = document.querySelector("body");
let listCard = document.querySelector(".listCard");
let quantite=document.querySelector(".quantite");
let total=document.querySelector(".total");
let listProduit = [];

let product = [{
    id: 1,
    image: "3.PNG",
    name: "produit",
    prix: "333"

} ,



{
    id: 2,
    image: "4.PNG",
    name: "produit",
    prix: "333"

},


{
    id: 3,
    image: "6.jpeg",
    name: "produit",
    prix: "333"

},

{
    id: 4,
    image: "7.jpeg",
    name: "produit",
    prix: "333"

},

{
    id: 5,
    image: "8.jpeg",
    name: "produit",
    prix: "333"

},
{
    id: 6,
    image: "55.jpeg",
    name: "produit",
    prix: "333"

} ,] ;
openShopping.addEventListener("click", ()=> {
body.classList.add("actif");
})
closeShopping.addEventListener("click", ()=> {
    body.classList.remove("actif");
    })

function addProduit(){
            product.forEach((value,key) => {
                let newDiv = document.createElement("div");
                newDiv.classList.add("cadre");
                newDiv.innerHTML= `
                <img src="./images/${value.image}">
                <div class="ttr1" >${value.name} </div>
                <div class="ttr2" >${value.prix} </div>
                <button class="sub" onClick="addToCard(${key})" > add to card </button>
                
                `;
                container.appendChild(newDiv);
            });

}

addProduit();


function addToCard(key){
listProduit[key]=product[key];
listProduit[key].quantite=1;
updateData();
}
function updateData(){
     listCard.innerHTML="";
    let count=0;
    let Total1=0;
    listProduit.forEach((value) => {
        Total1 = Number( Total1) +Number(value.prix);
        count = Number(count) + Number(value.quantite);

        let newLi = document.createElement("li");
        newLi.innerHTML= `
        <img src="./images/${value.image}">
        <div class="ttr1" >${value.name} </div>
        <div class="ttr2" >${value.prix} </div>
        `;
        listCard.appendChild(newLi);
    });
    total.innerText= Total1;
    quantite.innerText=count;
}
