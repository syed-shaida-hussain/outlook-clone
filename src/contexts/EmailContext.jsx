/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";

const EmailContext = createContext();

const initialEmailState = {
    emails : [],
    emailBody : null,
    singleEmail : {},
    favouriteEmails : [],
    readEmails : []
}

const emailReducer = (state,action) => {
    switch (action.type) {
        case "GET_ALL_EMAILS" :
            return {...state , emails : action.payload}
        case "GET_EMAIL_BODY" :
            return {...state , emailBody : action.payload.body, singleEmail : action.payload.email , readEmails : [...state.readEmails , action.payload.email]}
        case "ADD_TO_FAVOURITES" :
            return {...state , favouriteEmails : [...state.favouriteEmails , action.payload]}
        case "REMOVE_FROM_FAVOURITES" :
            return {...state , favouriteEmails : state.favouriteEmails.filter((item) => item.id !== action.payload)}
    }
}

const EmailProvider = ({children}) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer , initialEmailState)
    const [filterData , setFilterData] = useState({
        showReadOnly : false,
        showFavouritesOnly : false,
        showUnreadOnly : false
    })

    return<EmailContext.Provider value={{emailState, dispatchEmail, filterData, setFilterData}}>
        {children}
    </EmailContext.Provider>
}

const useEmails = () => useContext(EmailContext)

export {EmailProvider , useEmails}