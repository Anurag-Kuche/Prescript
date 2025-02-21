import { useParams, useSearchParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useEffect } from "react"


function Appointment() {
  const {docId}=useParams()
  const{doctors}=useContext(AppContext)
  const[docInfo,setDocInfo]=useState(null)

  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=>doc._id=docId)
    setDocInfo(docInfo)
  }

  useEffect(() => {
    
  fetchDocInfo
    
  }, [doctors,docId])
  
  return (
    <div>Appointment</div>
  )
}

export default Appointment