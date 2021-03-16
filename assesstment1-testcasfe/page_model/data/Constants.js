import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME1,
        PASSWORD : process.env.PASSWORD
    },

    INVALID_USER:{
        USERNAME: 'INVALID',
        PASSWORD : 'INVALID '
    }

}

export const INFORMATION={
    USER_INFORMATION:{
        NAME:'Evelyne',
        LAST:'Franco',
        PC: '20030'
    }
}