// 1
const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
document.getElementById("totalProducts").innerText = `Aantal producten in winkelmandje: ${winkelmandje.length}`;
 
// 2
document.getElementById("allProducts").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;
 
// 3
const fourthProduct = winkelmandje[3];
document.getElementById("fourthProduct").innerText = `${fourthProduct} staat op de vierde plek in uw winkelmand`;
 
//  4
const indexWhiskey = winkelmandje.indexOf("Whiskey");
if (indexWhiskey !== -1) {
winkelmandje[indexWhiskey] = "Bier";
document.getElementById("updateWhiskey").innerText = `Gecorrigeerde winkelmand: ${winkelmandje.join(', ')}`;
}
 
//  5
function addProduct() {
const newProduct = prompt("Voer het nieuwe product in:");
winkelmandje.push(newProduct);
document.getElementById("allProducts").innerText = `Uw producten zijn: ${winkelmandje.join(', ')}`;
}
 
// 6
if (winkelmandje.length > 1) {
document.getElementById("productCheck").innerText = `U heeft genoeg producten in uw winkelmandje: ${winkelmandje.join(', ')}`;
} else {
document.getElementById("productCheck").innerText = `U heeft niet genoeg producten om te tonen`;
}
 
// 7
if (winkelmandje[4] === "Drop") {
document.getElementById("checkDrop").innerText = `U heeft alle producten in uw winkelmandje: ${winkelmandje.join(', ')}`;
} else {
document.getElementById("checkDrop").innerText = `U heeft geen drop`;
}
 
// 8
const productsWithSpace = winkelmandje.join(' ');
console.log("Producten met spatie tussen elk product:", productsWithSpace);
 
// 9
const oldWinkelmandje = [...winkelmandje];
winkelmandje.splice(0, 2);
document.write(`Oude winkelmand: ${oldWinkelmandje.join(', ')}<br>`);
document.write(`Nieuwe winkelmand: ${winkelmandje.join(', ')}`);