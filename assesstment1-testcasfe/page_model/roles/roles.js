import { Role } from 'testcafe';
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'

export const url='https://www.saucedemo.com/'

export const standard_user = Role(url, async t => {
    await t
        .typeText(LoginPage.usernameTextBox, CREDENTIALS.VALID_USER.USERNAME )
        .typeText(LoginPage.passwordTexboxField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton);
},{
    preserveUrl: true
});


export const LOCKED_USER = Role(url, async t => {
    await t
        .typeText(LoginPage.usernameTextBox, CREDENTIALS.LOCKED_USER.USERNAME2 )
        .typeText(LoginPage.passwordTexboxField, CREDENTIALS.LOCKED_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .expect(LoginPage.errorMessage.exists).ok()  
},{
    preserveUrl: true
});

export const PROBLEM_USERs = Role(url, async t => {
    await t
        .typeText(LoginPage.usernameTextBox, CREDENTIALS.PROBLEM_USER.USERNAME )
        .typeText(LoginPage.passwordTexboxField, CREDENTIALS.PROBLEM_USER.PASSWORD)
        .click(LoginPage.loginButton)
         
},{
    preserveUrl: true
});

export const PERFORMANCE_USER = Role(url, async t => {
    await t
        .typeText(LoginPage.usernameTextBox, CREDENTIALS.PERFORMANCE_USER.USERNAME )
        .typeText(LoginPage.passwordTexboxField, CREDENTIALS.PERFORMANCE_USER.PASSWORD)
        .click(LoginPage.loginButton)
         
},{
    preserveUrl: true
});