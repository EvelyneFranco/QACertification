import { Selector , t} from 'testcafe'

class OverviewPage{
    constructor(){
        this.overviewTittle= Selector('.subheader').withText('Checkout: Overview')
        this.itemDescription1= Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.itemDescription2= Selector('.inventory_item_name').withText('Sauce Labs Bike Light')
        this.itemDescription3= Selector('.inventory_item_name').withText('Sauce Labs Bolt T-Shirt')
        this.finishButton=Selector('.btn_action')
    }

    async Finish(){
        await t
               .click(this.finishButton)
    }
}

export default new OverviewPage()