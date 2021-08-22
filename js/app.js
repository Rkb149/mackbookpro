function getButton(button, choice){
    const buttonInput = document.getElementById(button);
    let memory = document.getElementById('memory-cost');
    let storage = document.getElementById('storage-cost');
    let delivery = document.getElementById('delivery-cost');

    if(choice == 8){
        memory.innerText = 0;
      }
      else if(choice == 16){
        memory.innerText = 180;
      }
      else if(choice == 256){
        storage.innerText = 0;
      }
      else if(choice == 512){
        storage.innerText = 100;
      }
      else if(choice == 1024){
        storage.innerText = 180;
      }
      else if(choice == 0){
        delivery.innerText = 0;
      }
      else if(choice == 1){
        delivery.innerText = 20;
      }
}
document.getElementById('btn-memory-1').addEventListener('click', function(){
    getButton('btn-memory-1', 8);
    inTotal();

});
document.getElementById('btn-memory-2').addEventListener('click', function(){
    getButton('btn-memory-2', 16);
    inTotal();
});

document.getElementById('btn-storage-1').addEventListener('click', function(){
    getButton('btn-storage-1', 256);
    inTotal();
});
document.getElementById('btn-storage-2').addEventListener('click', function(){
    getButton('btn-storage-2', 512);
    inTotal();
});
document.getElementById('btn-storage-3').addEventListener('click', function(){
    getButton('btn-storage-3', 1024);
    inTotal();
});
document.getElementById('delivery-1').addEventListener('click', function(){
    getButton('delivery-1', 0);
    inTotal();
});
document.getElementById('delivery-2').addEventListener('click', function(){
    getButton('delivery-2', 1);
    inTotal();
});


function inTotal() {
    bestPrice = document.getElementById('best-price').innerHTML;
    memoryCost = document.getElementById('memory-cost').innerHTML;
    storageCost = document.getElementById('storage-cost').innerHTML;
    dalivaryCost = document.getElementById('delivery-cost').innerHTML;
    basePrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(dalivaryCost);
    document.getElementById('total-price').innerText = basePrice;
    document.getElementById('final-price').innerText = basePrice;
}

document.getElementById('cupon-button').addEventListener('click', function(){
    const code = 'stevekaku';
    const inputCupponText = document.getElementById('promo-input');
    let inputPromo = inputCupponText.value;
    if(inputPromo.toLowerCase() == code.toLowerCase()){
    let beforDiscount = document.getElementById('total-price').innerText;
    let discount = document.getElementById('total-price').innerText * .20;
    let totalPay = beforDiscount - discount;
    document.getElementById('final-price').innerText = totalPay; 
    }
    inputCupponText.value = '';

});