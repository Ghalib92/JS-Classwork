function calculateTotal(){

    const price= document.querySelector('.js-input').value;
    
    const quantity= document.querySelector('.js-quantity').value;
    
    const total= price * quantity;
    
    alert(`The total is: ${total}`)
    
    }
    
    