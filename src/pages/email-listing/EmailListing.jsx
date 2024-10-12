import axios from "axios"
import { useEffect } from "react"
import "./EmailListing.css"
import { useEmails } from "../../contexts/EmailContext"
import EmailCard from "../../components/EmailCard"

export const EmailListing = () => {
    const {dispatchEmail,emailState : {emails}} = useEmails();
    const fetchEmails = async () => {
        const {data} = await axios.get("https://flipkart-email-mock.now.sh/")
        dispatchEmail({type : "GET_ALL_EMAILS", payload : data.list })
    }
    useEffect(() => {
        fetchEmails()
    },[])
  return (
    <section>
        <ul className="email-container flex-col">
            {emails.map((email) => <li key={email.id}>
                <EmailCard email={email} />
            </li>)}
        </ul>
    </section>
  )
}
