import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-bold text-gray-400">Top Doctors To Book</h1>
      <p className="sm:w-1/2 text-center text-lg text-gray-700">
        Simply browse through our extensive list of trusted doctors and book your appointment with ease.
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 pt-6 px-4 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scroll(0, 0);
            }}
            className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-500 hover:-translate-y-2 bg-white"
            key={index}
          >
            <img className="w-full h-56 object-cover bg-blue-50" src={item.image} alt={item.name} />
            <div className="p-5 text-center">
              <div className="flex justify-center items-center gap-2 text-sm text-green-500 mb-2">
                <p className="w-3 h-3 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600 text-base font-medium">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-gray-500 text-white px-12 py-3 rounded-full mt-10 text-lg font-semibold shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
