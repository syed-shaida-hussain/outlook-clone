/* eslint-disable react/prop-types */
import {format} from "date-fns"
import { useEmails } from "../contexts/EmailContext"

const SingleEmail = ({singleEmail,emailBody}) => {
  const {dispatchEmail} = useEmails();

  const addToFavouritesHandler = (singleEmail) =>{
    singleEmail.favourite = true
    dispatchEmail({type : "ADD_TO_FAVOURITES" , payload : singleEmail})
  }

  const removeFavouriteHandler = (singleEmail) =>{
    singleEmail.favourite = false
    dispatchEmail({type : "REMOVE_FROM_FAVOURITES" , payload : singleEmail.id})
  }

  return (
    <section className=" email-body flex gap-20">
            <div className="flex-ctr avatar">{singleEmail?.from?.name.slice()[0]?.toUpperCase()}</div>
            <div className="flex-col gap-10">
                <div className="flex sp-bw align-start">
                    <span className="highlighted">{singleEmail?.subject}</span>
                    {singleEmail?.favourite ? <button className="btn" onClick={() => removeFavouriteHandler(singleEmail)}>Remove Favourite</button> : <button className="btn" onClick={() => addToFavouritesHandler(singleEmail)} >Mark as Favourite</button>}
                </div>
                <time>{format(new Date(singleEmail?.date), 'dd/MM/yyyy hh:mm a')}</time>
                <p className="email-description" dangerouslySetInnerHTML= {{__html: emailBody?.body}} /> 
            </div>
    </section>
  )
}

export default SingleEmail