function getTotal(){
    // declare variables
        const TICKET = 250;
        const ADMIN$FEE = 50;
        let quantity = Number(document.getElementById ('qty').value);
        let subtotal =  Number(quantity * TICKET);
        let total = Number(subtotal + ADMIN$FEE);

    // Viewing
        document.getElementById ('subtotal').value = subtotal;
        document.getElementById ('total').value = total;

        


}
