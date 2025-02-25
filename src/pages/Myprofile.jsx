import { useState } from "react"
import{assets} from '../assets/assets'


const Myprofile=()=> {
  const[userData,setUserData]=useState({
    name:"Steve Root",
    image:assets.profile_pic,
    email:"steveroot@gmail.com",
    phone:"9198765438",
    address:{
      line1:"Snippet Plaza",
      line2:"Kalyani Nagar, Pune"
    },
    gender:"male",
    dob:"2000-01-20",
   
    
})

const[isEdit,setIsEdit]=useState(false);
  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
        ?<input type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFO</p>
        <div>
          <p>Email Id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
        isEdit
        ?<input type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />
        : <p>{userData.phone}</p>
      }
        </div>
      </div>
    </div>
  )
}

export default Myprofile