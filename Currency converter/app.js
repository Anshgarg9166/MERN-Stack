 const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const api1 = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const newMsg = document.querySelector(".msg");

console.log(newMsg.innerText)
 


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "From" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "To" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    //console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async(evt1) => {
    evt1.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue === "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";
    }
    console.log(fromCurr.value, toCurr.value);
    let newFromCurr = fromCurr.value.toLowerCase();
    const api1 = `https://latest.currency-api.pages.dev/v1/currencies/${newFromCurr}.json`;
    let response = await fetch(api1);
    let data = await response.json();
    let newCurr = toCurr.value.toLowerCase();
    //console.log(newCurr);
    //console.log(data.eur.inr);
    const temp1 = data[newFromCurr]
    console.log(temp1);
    //console.log(temp1.inr)
    const temp2 = temp1[newCurr];
    console.log(temp2)
    console.log(amount.value*temp2)
    const temp3 = amount.value*temp2
    newMsg.innerText = `1 ${fromCurr.value} to ${temp2} ${toCurr.value}  Converted value is ${temp3}`;
})