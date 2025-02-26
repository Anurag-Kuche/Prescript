import { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Steve Root",
    image: assets.profile_pic,
    email: "steveroot@gmail.com",
    phone: "9198765438",
    address: {
      line1: "Snippet Plaza",
      line2: "Kalyani Nagar, Pune",
    },
    gender: "male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(true);
  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />
      <div>
        <p>CONTACT INFO</p>
        <div>
          <p>Email Id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input  onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" />
              <br />
              <input onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p>Basic Info</p>
        <div>
          <p>Gender:</p>
          {
            isEdit
            ? <select onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>

              <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
           }
           <p>Birthday:</p>
           {
            isEdit? 
            <input type="date" onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob} />
            : <p>{userData.dob}</p>
           }
          
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
