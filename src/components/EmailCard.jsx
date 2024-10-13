/* eslint-disable react/prop-types */
import {format} from "date-fns"
import { useEmails } from "../contexts/EmailContext"

const EmailCard = ({email , emailBody }) => {
  const {emailState : {favouriteEmails}} = useEmails()
  return (
    <article className = {email?.id == emailBody?.id ? "single-email flex active-email" : "single-email flex"}>
                    <div className=" flex-ctr avatar">{email?.from?.name.slice()[0]?.toUpperCase()}</div>
                    <div className="flex-col gap-10 email-details">
                       <div className="flex-col gap-5"><span className="break-line" > From:  <span className="highlighted">
                       {`${email?.from?.name} <${email?.from?.email}>`}</span></span>
                       <div>Subject: <span className="highlighted">{email?.subject}</span></div>
                       </div>
                       <p className="email-desc flex-col gap-10">{email?.short_description} 
                        <div className="flex gap-15">
                          <time>{format(new Date(email?.date), 'dd/MM/yyyy hh:mm a')}</time>
                          {favouriteEmails.includes(email) && <span className="highlighted cta-color">Favourite</span>}
                        </div>
                       </p>
                    </div>
    </article>
  )
}

export default EmailCard