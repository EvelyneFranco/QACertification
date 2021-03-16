import {Selector, t} from 'testcafe'


class LoginPage{
    constructor(){
        this.usernameTextBox= Selector('#user-name')
        this.passwordTexboxField =Selector ('#password')
        this.loginButton= Selector('#login-button')
        this.errorMessage = Selector('h3');
        this.loginLogo= Selector('.login_logo')
    }

    async submitLogin(Username, password){
        await t
        .typeText(this.usernameTextBox, Username)
        .typeText(this.passwordTexboxField,password)
        .click(this.loginButton)

    }
}

export default new LoginPage()