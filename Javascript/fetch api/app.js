console.log("hello");
const URL ="https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data ...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
//     factpara.innerText = data[0].text;
// };



// Other Method
function getFacts(){
    fetch(URL).then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        factpara.innerText = data[2].text;
    } );
}
btn.addEventListener("click",getFacts);
