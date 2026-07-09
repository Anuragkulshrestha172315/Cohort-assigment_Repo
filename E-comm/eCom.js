const add = document.querySelector(".add")
const formDiv = document.querySelector(".form")
const cross = document.querySelector(".cross")
const form = document.querySelector("form")
const productDiv = document.querySelector(".Product")


let productArr = [];
let updateIndex = null;
let ui = ()=>{
    productDiv.innerHTML = "";
    productArr.forEach((elem,index)=>{
        productDiv.innerHTML += `
        <div class="product_card">
                <div class="img">
                    <img src="${elem.url}" alt="">
                </div>
                <div class="text">
                    <h2>${elem.productName}</h2>
                    <p>${elem.discription}</p>
                    <p>${elem.price}</p>
                </div>
                <div class="btn">
                    <button onclick = "updateProducts('${elem.productName}')" id="update">Edit</button>
                    <button onclick = "deleteProducts(${index})" id="delete">Delete</button>
                </div>
        </div>`
    })
}

add.addEventListener('click', ()=>{
    formDiv.style.display = "flex"
})

cross.addEventListener('click', ()=>{
    formDiv.style.display = "none"
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let productName = event.target[0].value;
    let discription = event.target[1].value;
    let price = event.target[2].value;
    let url = event.target[3].value;

    if(

        productName.trim() === "" ||
        discription.trim() === "" ||
        price.trim() === "" ||
        url === ""
    ){
        alert('Enter the all feild')
        return;
    }

    let obj= {
        productName,
        discription,
        price,
        url
    }
    if(updateIndex != null){
        productArr[updateIndex] = obj;
        updateIndex = null
    }else{
        productArr.push(obj)
    }
    ui();
    console.log(productArr);
    
    form.reset();
    formDiv.style.display = "none"


})

const updateProducts = (name)=>{
    formDiv.style.display = "flex"
    let product = productArr.find((elem) => elem.productName === name)
    updateIndex = productArr.findIndex((elem) => elem.productName === name)
    form[0].value = product.productName
    form[1].value = product.discription
    form[2].value = product.price
    form[3].value = product.url
    
}

const deleteProducts = (index) => {
    productArr.splice(index,1);
    ui();
}

