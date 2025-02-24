import { assets } from "../assets/assets"


function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img src={assets.about_image} alt="" />
        <div>
          <p>Your health, your time—schedule a doctor’s appointment in just a few clicks!.Connect with trusted doctors and book your next appointment seamlessly</p>
          <p>Browse, choose, and book appointments with the best doctors near you</p>
          <b>our Vision</b>
          <p>Your health is a priority—book your doctor’s appointment today, hassle-free!</p>
        </div>
      </div>
    </div>
  )
}

export default About