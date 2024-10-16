import { useEmails } from "../contexts/EmailContext"

const Filters = () => {
  const {setFilterData , filterData} = useEmails();
  return (
    <section className="flex gap-15 filters">
    <span>Filter By:</span>  
    <div className="flex gap-5">
         <button className={filterData?.showUnreadOnly ? "active-btn": ""} onClick={() => setFilterData({...filterData , showReadOnly : false , showFavouritesOnly : false , showUnreadOnly : true})}>Unread</button>
         <button className={filterData?.showReadOnly ? "active-btn": ""} onClick={() => setFilterData({...filterData , showReadOnly : true , showFavouritesOnly : false , showUnreadOnly : false})}>Read</button>
         <button className={filterData?.showFavouritesOnly ? "active-btn" : ""} onClick={() => setFilterData({...filterData , showReadOnly : false , showFavouritesOnly : true , showUnreadOnly : false})}>Favourites</button>
         <button  onClick={() => setFilterData({...filterData , showReadOnly : false , showFavouritesOnly : false , showUnreadOnly : false})}>Reset</button>
    </div>
 </section>
  )
}

export default Filters