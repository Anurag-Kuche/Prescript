import { assets } from "../assets/assets"


function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Taking charge of your health has never been easier with our intuitive appointment booking system. Whether you need a routine check-up or specialized treatment, our app connects you to a network of trusted and experienced doctors across various specialties. Simply browse through available doctors, view their credentials, and book an appointment at your convenience. With just a few clicks, you can choose the time that fits your schedule, eliminating the hassle of long wait times and lengthy calls.</p>
          <p>Browse, choose, and book appointments with the best doctors near you</p>
          <b className="text-gray-800">Our Vision</b>
          <p>To revolutionize healthcare access by providing a seamless, reliable, and user-friendly platform that connects patients with trusted medical professionals. We aim to simplify the process of booking appointments, ensuring timely and efficient healthcare for everyone. Our vision is to empower individuals to take control of their health by making quality medical care accessible, convenient, and just a few clicks away. We strive to bridge the gap between patients and healthcare providers, fostering a healthier and more connected community.</p>
        </div>
      </div>
    </div>
  )
}

export default About