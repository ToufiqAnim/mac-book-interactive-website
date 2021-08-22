function updateMemoryCost(priceIncrease){
    // debugger;
    let memoryCostText = document.getElementById('memory-cost');
    if(priceIncrease == true){
        memoryCostText.innerText = 180;
       
    }
    else{
        memoryCostText.innerText = '00';
        
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
    let storageCostText = document.getElementById('storage-cost');

    if(storageIncrease == '512gb'){
        storageCostText.innerText = 100;
    }
    else if(storageIncrease == '1tb'){
        storageCostText.innerText = 180;
    }
    else{
        storageCostText.innerText = '00';
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
    let deliveryCostText = document.getElementById('delivery-cost');
    if (deliveryPaid == true){
        deliveryCostText.innerText = 20;
    }
    else{
        deliveryCostText.innerText = '00';
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

// update Total Price
    function updateTotalPrice(){
        
        let totalCost = document.getElementById('total-price');

        let bestPriceText = document.getElementById('best-price');
        let bestPrice = parseFloat(bestPriceText.innerText);

        let memoryCostText = document.getElementById('memory-cost');
        let memoryCost = parseInt(memoryCostText.innerText);

        let storageCostText = document.getElementById('storage-cost');
        let storageCost = parseInt(storageCostText.innerText);

        let deliveryCostText = document.getElementById('delivery-cost');
        let deliveryCost = parseInt(deliveryCostText.innerText);

        let updateTotalCost = bestPrice + memoryCost + storageCost + deliveryCost;

        totalCost.innerText = updateTotalCost;

        let promoPrice = document.getElementById('promo-price');
        promoPrice.innerText = updateTotalCost;
    } 

// PROMO CODE
document.getElementById('promo-btn').addEventListener('click', function(){
    const totalCost = document.getElementById('total-price');
    let totalPrice  =  parseInt(totalCost.innerText);
    let promoInput = document.getElementById('promo-input');
    if(promoCodeValue = 'stevekaku'){
        let discountPrice = totalPrice * .2;
        let newTotalPrice = totalPrice - discountPrice;
        let promoPrice = document.getElementById('promo-price');
        promoPrice.innerText = newTotalPrice;
        promoInput.value = "";
    }
})