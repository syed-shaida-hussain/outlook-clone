/* eslint-disable react/prop-types */
import {format} from "date-fns"

const SingleEmail = ({singleEmail,emailBody}) => {
  return (
    <section className=" email-body flex gap-20">
            <div className="flex-ctr avatar">{singleEmail?.from?.name.slice()[0]?.toUpperCase()}</div>
            <div className="flex-col gap-10">
                <div className="flex sp-bw align-start">
                    <span className="highlighted">{singleEmail?.subject}</span>
                    <button className="btn">Mark as Favourite</button>
                </div>
                <time>{format(new Date(singleEmail?.date), 'dd/MM/yyyy hh:mm a')}</time>
                <p className="email-description" dangerouslySetInnerHTML= {{__html: emailBody?.body}} /> 
            </div>
    </section>
  )
}

export default SingleEmail