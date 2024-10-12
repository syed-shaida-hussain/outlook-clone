import { Routes , Route } from "react-router-dom"
import { EmailListing } from "../pages/email-listing/EmailListing"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<EmailListing />} />
    </Routes>
  )
}
