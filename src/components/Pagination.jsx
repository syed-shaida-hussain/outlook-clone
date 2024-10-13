/* eslint-disable react/prop-types */
const Pagination = ({pageNumber,setPageNumber}) => {
  return (
    <section  className="pagination flex-ctr gap-20">
        <button className=  "pagination-btn" disabled = {pageNumber <= 1 ? true : false} onClick={() => setPageNumber(pageNumber-1)}>Previous</button>
        <button className= "pagination-btn" disabled = {pageNumber >= 2 ? true : false} onClick={() => setPageNumber(pageNumber+1)}>Next</button>
    </section>
  )
}

export default Pagination