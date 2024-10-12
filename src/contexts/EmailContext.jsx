/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const EmailContext = createContext();

const initialEmailState = {
    emails : [],
    emailBody : null,
    singleEmail : {}
}

const emailReducer = (state,action) => {
    switch (action.type) {
        case "GET_ALL_EMAILS" :
            return {...state , emails : action.payload}
        case "GET_EMAIL_BODY" :
            return {...state , emailBody : action.payload.body, singleEmail : action.payload.email}
    }
}

const EmailProvider = ({children}) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer , initialEmailState)
    return<EmailContext.Provider value={{emailState, dispatchEmail}}>
        {children}
    </EmailContext.Provider>
}

const useEmails = () => useContext(EmailContext)

export {EmailProvider , useEmails}