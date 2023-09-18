// selectors

const app = document.querySelector("#app");
const newRecord = document.querySelector("#newRecord");
const product = document.querySelector("#product");
const quantity = document.querySelector(".quantity");
const records = document.querySelector("#records");
const recordRows = document.querySelector("#record-rows");
const totalRecord = document.querySelector(".record-total");
const inventories = document.querySelector("#inventories");
const newItem = document.querySelector("#new-item");
const newItemName = document.querySelector("#newItemName");
const newItemPrice   = document.querySelector("#newItemPrice  ");



// function

const createItem =(name,price) =>{
    const div = document.createElement("div");
    div.className = `border border-2 border-primary-subtle p-2 mb-2 d-flex justify-content-between`
    div.innerHTML = ` <p class="mb-0  ">${name}</p>
    <p class="text-black-50 mb-0">${price}</p>`

    return div;
}
const createRecordRow = (productId,quantity)=>{
    const currentProduct = Products.find((el)=> el.id == productId);
    let cost = currentProduct.price * quantity.valueAsNumber
    
    const tableRow = document.createElement("tr")
    tableRow.classList.add("record-row");
    tableRow.setAttribute("product-id", productId);
    tableRow.innerHTML=`
    <td >${Products.valueAsNumber}</td>
    <td class="text-start record-name">${currentProduct.name}</td>
    <td class="text-end record-quantity">${currentProduct.price}</td>
    <td class="text-end record-price">${quantity.valueAsNumber}</td>
    <td class="text-end record-cost">${cost}</td>
  
    `;
     return  tableRow;
}

const calculateCost = ()=>{
    let total = 0;
    const allRecords = document.querySelectorAll(".record-cost");
    // allRecords.forEach(el=>{
    //     total += parseFloat(el.innerText);
    // })
    
   
   totalRecord.innerText = total;
}
// process
const Products =  [
    {
        id:1,
        name: "Cookies",
        price:700,
    },
    {
        id:2,
        name: "Soda",
        price:2600,
    },
    {
        id:3,
        name: "Coffee",
        price:3500,
    },
    {
        id:4,
        name: "Milk",
        price:2700,
    },
];
// generate product
Products.forEach((el)=>{
    product.append(new Option(el.name,el.id));
    inventories.append(createItem(el.name,el.price))
});

// add record
newRecord.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    const isExistedRow = document.querySelector(`[product-id = "${product.value}"]`)
    if(isExistedRow){
        let currentQuantity = isExistedRow.querySelector(".record-quantity");
        let currentPrice = isExistedRow.querySelector(".record-price");
        let currentCost = isExistedRow.querySelector(".record-cost");

        currentQuantity.innerText = parseFloat(currentQuantity.innerText) + quantity.valueAsNumber


    }else{
        // create tableRow
    recordRows.append(createRecordRow(product.value, quantity));
    }

console.log(isExistedRow);
    
    
    // clear Form
    newRecord.reset();

    // calculate total cost
    calculateCost();

    Products.push(newItemObj)
    product.append(new Option(newItemObj.name,newItemObj.price));
    inventories.append(createItem(newItemObj.name,newItemObj.price))
    // console.log(product.value); //productId
    // console.log(Products.find((el)=> el.id == product.value));
    // console.log(quantity.valueAsNumber);//quantity
    
})
newItem.addEventListener("submit",(e)=>{
    let newItemId = Products[product.length - 1].id + 1;
    const newItemObj = {
        id : newItemId,
        name : newItemName.value,
        price : newItemPrice.valueAsNumber,
    }

    Products.push(newItemObj);

    product.append(new Option(newItemObj.name,newItemObj.price));
     
    inventories.append(createItem(newItemObj.name,newItemObj.price))
    newItem.reset()

    
   
})