const Filters = () => {
  return (
    <section className="flex gap-20 filters">
    <span>Filter By:</span>  
    <div className="flex gap-15">
         <button>Unread</button>
         <button className="active-btn">Read</button>
         <button>Favourites</button>
    </div>
 </section>
  )
}

export default Filters