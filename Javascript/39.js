console.log("Namaste dunia");
 const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
 }
console.log(capitalize("hello"));