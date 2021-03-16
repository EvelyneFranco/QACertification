import LoginPage from '../pages/LoginPage'
import ProductsPage from  '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'
import CartPage from '../pages/CartPage'

//test suite name
fixture ('login feature test')
    .page `https://www.saucedemo.com/`
    /*.beforeEach(async t=>{

    })*/

test('1. Validate user navigates to the products page', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD) 
    
           //validate page tittle exisst ...expect to be true
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('2. Validate error message is displayed', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)     
    await t.expect(LoginPage.errorMessage.exists).ok()
    
    //await t.expect(LoginPage.errorMessage.exists).eql('Epic sadface: Username and password do not match any user in this service') &nbsp
})

test('3. Validate user navigates to the login page', async t=>{
    await  LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD) 
    await ProductsPage.logout()

    await t.expect(LoginPage.loginLogo.exists).ok()
    
})

