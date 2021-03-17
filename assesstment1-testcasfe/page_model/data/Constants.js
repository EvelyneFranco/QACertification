import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME1,
        PASSWORD : process.env.PASSWORD
    },
    LOCKED_USER:{
        USERNAME2: process.env.USERNAME2,
        PASSWORD : process.env.PASSWORD
    },
    PROBLEM_USER:{
        USERNAME: process.env.USERNAME3,
        PASSWORD : process.env.PASSWORD
    },
    PERFORMANCE_USER:{
        USERNAME: process.env.USERNAME4,
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