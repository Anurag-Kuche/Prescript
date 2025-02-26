import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
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

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-600 shadow-md"
        />
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mt-3 px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none"
          />
        ) : (
          <p className="text-xl font-semibold mt-3">{userData.name}</p>
        )}
      </div>

      <hr className="my-4 border-gray-600" />
      <div>
        <p className="text-lg font-semibold">Contact Info</p>
        <div className="mt-2">
          <p className="text-gray-400">Email:</p>
          <p className="mb-2">{userData.email}</p>
          <p className="text-gray-400">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none"
            />
          ) : (
            <p className="mb-2">{userData.phone}</p>
          )}
          <p className="text-gray-400">Address:</p>
          {isEdit ? (
            <div>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none mb-2"
              />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold">Basic Info</p>
        <div>
          <p className="text-gray-400">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              className="px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p className="text-gray-400">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              className="px-3 py-2 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="px-4 py-2 bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Save Info
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
