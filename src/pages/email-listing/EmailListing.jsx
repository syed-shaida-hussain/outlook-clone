import axios from "axios"
import { useEffect } from "react"
import "./EmailListing.css"
import { useEmails } from "../../contexts/EmailContext"
import EmailCard from "../../components/EmailCard"
import Filters from "../../components/Filters"
import SingleEmail from "../../components/SingleEmail"


export const EmailListing = () => {
    const {dispatchEmail,emailState : {emails, emailBody, singleEmail }} = useEmails();
    const fetchEmails = async () => {
        const {data} = await axios.get("https://flipkart-email-mock.now.sh/")
        dispatchEmail({type : "GET_ALL_EMAILS", payload : data.list })
    }

    const fetchEmail = async (email) => {
        const {data} = await axios.get(`https://flipkart-email-mock.now.sh/?id=${email?.id}`)
        console.log(data)
        dispatchEmail({type:"GET_EMAIL_BODY" , payload : {body : data , email}})
    }
    useEffect(() => {
        fetchEmails()
    },[])
  return (
    <div className="email-wrapper">
    <Filters />
    <section style={!emailBody ? {display : "block"} : {display : "flex" , gap : "15px"}}>
        <ul className="email-container flex-col">
            {emails.map((email) => <li key={email.id} onClick={() => fetchEmail(email)}>
                <EmailCard email={email} emailBody = {emailBody} />
            </li>)}
        </ul>
        {emailBody && <SingleEmail singleEmail={singleEmail} emailBody={emailBody} />}
    </section>
    </div>
  )
}
