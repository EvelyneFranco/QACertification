
import {standard_user, LOCKED_USER, PROBLEM_USERs, PERFORMANCE_USER} from '../roles/roles'
import ProductsPage from  '../pages/ProductsPage'

fixture ('Login feature: test with Roles ')    

test('Test role standar user', async t => {
        await t
            .useRole(standard_user)
        await t.expect(ProductsPage.pageTitle.exists).ok()           

});

test('Test role locked user', async t => {
    await t
        .useRole(LOCKED_USER)         

});

test('Test role problem user', async t => {
    await t
        .useRole(PROBLEM_USERs)         
        await t.expect(ProductsPage.pageTitle.exists).ok() 
});

test('Test role performance user ', async t => {
    await t
        .useRole(PERFORMANCE_USER)         
        await t.expect(ProductsPage.pageTitle.exists).ok() 
});
