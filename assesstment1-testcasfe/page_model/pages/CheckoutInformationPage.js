import {Selector, t} from 'testcafe'

class CheckoutInformationPage{
    constructor(){
        this.continueButton=Selector('.btn_primary')
        this.errorMessage= Selector('h3').withText('First Name is required');
        this.firstNameTextbox= Selector('#first-name')
        this.lastNameTextbox= Selector('#last-name')
        this.postalcodeTexbox= Selector('#postal-code')
    }

    async clickContinue(){
        await t
                .click(this.continueButton)
            
    }
    async fillInformation(name, last,pc){
        await t
        .typeText(this.firstNameTextbox, name)
        .typeText(this.lastNameTextbox, last)
        .typeText(this.postalcodeTexbox, pc)
        .click(this.continueButton)
    }

}

export default new CheckoutInformationPage();