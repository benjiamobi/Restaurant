import { menuArray } from './data.js'

const body = document.getElementById('body')
const yourOrder = document.getElementById('your-order')
const yourOrderTotal = document.getElementById('your-order-total')
const payBtn = document.getElementById('pay-btn')
const paymentModal = document.getElementById('payment-modal')
let totaledPrice = document.getElementById('total-price')
const orderForm = document.getElementById('order-form')

let selections = []
let totalPriceArray = []

document.addEventListener('click', function(e){
    if (e.target.id=== "0") {
        document.getElementById('your-order').style.display = 'block'
        document.getElementById('your-order-total').style.display = 'block'
        selections.push(menuArray[0])
        totalPriceArray.push(menuArray[0].price)
        yourOrder.innerHTML = `<h2 class="your-order-title">Your order</h2>`
        updatePrices()
    } else if (e.target.id=== "1") {
        document.getElementById('your-order').style.display = 'block'
        document.getElementById('your-order-total').style.display = 'block'
        selections.push(menuArray[1])
        totalPriceArray.push(menuArray[1].price)
        yourOrder.innerHTML = `<h2 class="your-order-title">Your order</h2>`
        updatePrices()
    } else if (e.target.id=== "2") {
        document.getElementById('your-order').style.display = 'block'
        document.getElementById('your-order-total').style.display = 'block'
        selections.push(menuArray[2])
        totalPriceArray.push(menuArray[2].price)
        yourOrder.innerHTML = `<h2 class="your-order-title">Your order</h2>`
        updatePrices()
    }
})

orderForm.addEventListener('submit', function(e){
    e.preventDefault()
    const thankYou = document.getElementById('thank-you')

    const orderFormData = new FormData(orderForm)

    const fullName = orderFormData.get('full-name')
    const cardNumber = orderFormData.get('card-number')
    const cvv = orderFormData.get('cvv')

    paymentModal.style.display='none'
    yourOrder.style.display='none'
    yourOrderTotal.style.display='none'
    thankYou.innerHTML = `
        <h1>Thanks, ${fullName}! Your order is on its way</h1>
    `
    thankYou.style.display='block'
    selections=[]
})

document.getElementById('complete-order-btn').addEventListener('click', function(){
    paymentModal.style.display='block'
})

function render(){
    let renderHtml = ''

    for (let menu of menuArray) {
        let ingredient = ''
        for (let ingredients of menu.ingredients) {
            ingredient += `${ingredients}, `
        }
        renderHtml += `
            <section id="items">
                    <div id="logo-img"><p>${menu.emoji}</p></div>
                    <div id="order-details">
                        <h2 id="order-name">${menu.name}</h2>
                        <p>${ingredient}</p>
                        <h3>$${menu.price}</h3>
                    </div>
                    <div id="add-div">
                        <button id = '${menu.id}' class="add-btn">+</button>
                    </div>
                </section>
        `
    }
    body.innerHTML = renderHtml

    
}

render()

function updatePrices(){
    let orderHtml = ''

    for (let select of selections) {

    orderHtml += `
            <div class="first-part">
                <div class="orders">
                    <div class="item">
                        <h2 class="item-name">${select.name}</h2>
                        <button id="remove-btn" class="remove-btn">remove</button>
                    </div>
                    <h2 class="item-price">$${select.price}</h2>
                </div>
            </div>
        
        `
    }
    yourOrder.innerHTML += orderHtml

    let TotalPrice = 0
for (let i=0; i<totalPriceArray.length; i++)
    TotalPrice += totalPriceArray[i]

    totaledPrice.innerHTML = "$" + TotalPrice
}

