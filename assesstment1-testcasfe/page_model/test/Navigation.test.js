
import ProductsPage from  '../pages/ProductsPage'
import {  INFORMATION } from '../data/Constants'
import CartPage from '../pages/CartPage'
import  CheckoutInformationPage from '../pages/CheckoutInformationPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import {standard_user} from '../roles/roles'
     

//test suite name
fixture ('Navigation test')
    /*.page `https://www.saucedemo.com/`
    .beforeEach(async t=>{
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD) 
    })*/
    .beforeEach(async t=>{
        await t
            .useRole(standard_user)
    })
    test('4. Validates User can navigates to the shopping cart page', async t=>{
        await t.click(ProductsPage.carButton)
    
        await t.expect(CartPage.cartTitle.exists).ok()
    })


    test('5. Validate User can add a single item', async t =>{
        await ProductsPage.addSimgleitem()
        await t.expect(CartPage.quantityItem.exists).ok()

      
    
    })
    test('6. Validate User can add multiple items', async t =>{
        await ProductsPage.addMoreItems()

        await t.expect(CartPage.quantityItem1.innerText).eql('Sauce Labs Backpack')
        await t.expect(CartPage.quantityItem2.innerText).eql('Sauce Labs Bike Light')
        await t.expect(CartPage.quantityItem3.innerText).eql('Sauce Labs Bolt T-Shirt')    
    })

    test('7. Validate error message is displayed in the users information page', async t=>{
            await ProductsPage.addSimgleitem()
            await CartPage.clickCheckoutButton()
            await CheckoutInformationPage.clickContinue()

            await t.expect(CheckoutInformationPage.errorMessage.innerText).eql('Error: First Name is required')   
    })

    test('8. Validate user navigates to the overview page once the his data has been filled', async t=>{
        await ProductsPage.addSimgleitem()
        await CartPage.clickCheckoutButton()
        await CheckoutInformationPage.fillInformation(INFORMATION.USER_INFORMATION.NAME, INFORMATION.USER_INFORMATION.LAST,INFORMATION.USER_INFORMATION.PC)

        await t.expect(OverviewPage.overviewTittle.exists).ok()

    })

    test('9. Validate items in the overview page match with the added items', async t =>{
        await ProductsPage.addMoreItems()
        await CartPage.clickCheckoutButton()
        await CheckoutInformationPage.fillInformation(INFORMATION.USER_INFORMATION.NAME, INFORMATION.USER_INFORMATION.LAST,INFORMATION.USER_INFORMATION.PC)

        await t.expect(OverviewPage.itemDescription1.exists).ok()
        await t.expect(OverviewPage.itemDescription2.exists).ok()
        await t.expect(OverviewPage.itemDescription3.exists).ok()

    })

    test('10. Validate the user navigates to the confirmation page', async t =>{
        await ProductsPage.addMoreItems()
        await CartPage.clickCheckoutButton()
        await CheckoutInformationPage.fillInformation(INFORMATION.USER_INFORMATION.NAME, INFORMATION.USER_INFORMATION.LAST,INFORMATION.USER_INFORMATION.PC)
        await OverviewPage.Finish()

        await t.expect(FinishPage.finishTitle.exists).ok()
        await t.expect(FinishPage.orderFinish.innerText).eql('THANK YOU FOR YOUR ORDER')
    })