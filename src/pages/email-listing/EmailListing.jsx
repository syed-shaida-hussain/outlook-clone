/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import "./EmailListing.css"
import { useEmails } from "../../contexts/EmailContext"
import EmailCard from "../../components/EmailCard"
import Filters from "../../components/Filters"
import SingleEmail from "../../components/SingleEmail"
import Pagination from "../../components/Pagination"


export const EmailListing = () => {
    const {dispatchEmail, emailState : { emails, emailBody, singleEmail }, filterData} = useEmails();
    const [pageNumber , setPageNumber] = useState(1)
    const {showFavouritesOnly , showReadOnly, showUnreadOnly} = filterData;

    const fetchEmails = async () => {
        const {data} = await axios.get(`https://flipkart-email-mock.now.sh/?page=${pageNumber}`)
        dispatchEmail({type : "GET_ALL_EMAILS", payload : data.list })
    }

    const fetchEmail = async (email) => {
        const {data} = await axios.get(`https://flipkart-email-mock.now.sh/?id=${email?.id}`)
        email.read = true
        dispatchEmail({type:"GET_EMAIL_BODY" , payload : {body : data , email}})
    }

    const getFilteredData = (emails, { showReadOnly, showFavouritesOnly , showUnreadOnly }) => {
        return emails
          .filter(({ read }) => (showReadOnly ? read : true))
          .filter(({ favourite }) => (showFavouritesOnly ? favourite : true))
          .filter(({read}) => (showUnreadOnly ? !read : true ))
      };
    
      const filteredData = getFilteredData(emails, {
        showReadOnly,
        showFavouritesOnly,
        showUnreadOnly
      });

    useEffect(() => {
        fetchEmails()
    },[pageNumber])

  return (
    <div className="email-wrapper">
    <Filters />
    <section style={!emailBody ? {display : "block"} : {display : "flex" , gap : "10px"}}>
        {filteredData?.length > 0 ? <ul className="email-container flex-col">
            {filteredData.map((email) => <li key={email.id} onClick={() => fetchEmail(email)}>
                <EmailCard email={email} emailBody = {emailBody} />
            </li>)}
        </ul> : <h2 className="flex-ctr h-80 cta-color highlighted w-40 ">
            No emails here...
        </h2>}
        {emailBody && <SingleEmail singleEmail={singleEmail} emailBody={emailBody} />}
    </section>
    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}
