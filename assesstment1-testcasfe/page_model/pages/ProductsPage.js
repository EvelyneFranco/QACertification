import {Selector, t} from 'testcafe'
import CartPage from './CartPage'

class ProductsPage{
    constructor(){
        this.pageTitle= Selector ('.product_label')
        this.product1= Selector('button:nth-child(2)')
        
        this.product2= Selector('button:nth-child(2).btn_primary')
        this.product3= Selector('button:nth-child(2).btn_primary')
        this.carButton= Selector('//path[@fill="currentColor"]')
        this.leftMenu= Selector('#react-burger-menu-btn')
        this.logoutButton= Selector('#logout_sidebar_link')
        this.carButton= Selector('#shopping_cart_container')
    }

    async logout(){
        await t
        .click(this.leftMenu)
        .click(this.logoutButton)
    }

    async addSimgleitem(){
        await t
                .click(this.product1)
                .click(this.carButton)
                
    }

    async addMoreItems(){
        await t
                .click(this.product1)
                .click(this.product2)
                .click(this.product3)
                .click(this.carButton)
    }
}

export default new ProductsPage()