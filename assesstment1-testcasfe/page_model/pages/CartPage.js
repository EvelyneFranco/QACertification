import {Selector, t} from 'testcafe'

class CartPage{
    constructor(){
        this.cartTitle= Selector('.subheader')
        this.quantityItem= Selector('.cart_quantity')
        this.quantityItem1= Selector('.inventory_item_name').withText('Sauce Labs Backpack');
        this.quantityItem2= Selector('.inventory_item_name').withText('Sauce Labs Bike Light');
        this.quantityItem3= Selector('.inventory_item_name').withText('Sauce Labs Bolt T-Shirt');
        this.checkoutbutton= Selector('.btn_action')

    }

    async clickCheckoutButton(){
        await t
                .click(this.checkoutbutton)
    }
}

export default new CartPage()