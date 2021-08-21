function updateMemoryCost(priceIncrease){
    // debugger;
    let memoryCost = document.getElementById('memory-cost');
    if(priceIncrease == true){
        memoryCost.innerText = 180;
    }
    else{
        memoryCost.innerText = '00';
    }
}

// MEMORY

document.getElementById('memory-update-16gb').addEventListener('click', function(){
    updateMemoryCost(true); 
    updateTotalPrice(); 
})

document.getElementById('memory-update-8gb').addEventListener('click', function(){
    updateMemoryCost(false);
    updateTotalPrice();

    
})

// STORAGE
function updateStorageCost(storageIncrease){
    let storageCost = document.getElementById('storage-cost');

    if(storageIncrease == '512gb'){
        storageCost.innerText = 100;
    }
    else if(storageIncrease == '1tb'){
        storageCost.innerText = 180;
    }
    else{
        storageCost.innerText = '00';
    }
}

document.getElementById('ssd-256gb').addEventListener('click',function(){
    updateStorageCost('256gb');
    updateTotalPrice();
})
document.getElementById('ssd-512gb').addEventListener('click',function(){
    updateStorageCost('512gb');
    updateTotalPrice();
})
document.getElementById('ssd-1tb').addEventListener('click',function(){
    updateStorageCost('1tb');
    updateTotalPrice();
})


// DELIVERY
function updateDeliveryCost(deliveryPaid){
    let deliveryCost = document.getElementById('delivery-cost');
    if (deliveryPaid == true){
        deliveryCost.innerText = 20;
    }
    else{
        deliveryCost.innerText = '00';
    }
}

document.getElementById('paid-delivery').addEventListener('click',function(){
    updateDeliveryCost(true);
    updateTotalPrice();
  
})

document.getElementById('free-delivery').addEventListener('click',function(){
    updateDeliveryCost(false);
    updateTotalPrice();
})


    function updateTotalPrice(){
        let totalPrice = document.getElementById('total-price').innerText;
        let memoryCost = document.getElementById('memory-cost').innerText;
        let storageCost = document.getElementById('storage-cost').innerText;
        let deliveryCost = document.getElementById('delivery-cost').innerText;
    
        let totalUpdatePrice = parseInt(totalPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
        totalPrice.innerText = totalUpdatePrice;
    
    } 

//PROMO CODE
document.getElementById('promo-input').addEventListener('click',function(){
    let promoPriceText = document.getElementById('promo-price');
    let promoPrice = parseInt(promoPriceText.innerText);
    let promoField = document.getElementById('promo-code');
    let faillError = document.getElementById('failed');
    let promoCode = promoField.value;
    if (promoCode == 'stevekaku'){
        let discount = promoPrice * .2;
        let macPrice = promoPrice - discount;
        promoPriceText.innerText = macPrice;
    }
    else{
        faillError.style.display = 'block'
    }
})