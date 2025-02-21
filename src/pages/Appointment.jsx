import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useEffect,useState,useContext } from "react"


function Appointment() {
  const {docId}=useParams()
  const{doctors}=useContext(AppContext)
  const[docInfo,setDocInfo]=useState(null)

  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=>doc._id=docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(() => {
    
  fetchDocInfo()
    
  }, [doctors,docId])
  
  return docInfo &&(
    <div>
      {/* Doctor details */}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointment