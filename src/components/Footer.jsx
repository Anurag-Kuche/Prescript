import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div>
        {/* left section */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iste inventore praesentium. Quaerat pariatur cumque beatae, aut repellendus earum temporibus, eos quasi esse in dolorem tenetur ducimus nam nulla natus.</p>
        </div>
        {/* middle section */}
        <div>
            <p>Company</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* right section */}
        <div>
            <p>GET IN TOUCH</p>
            <ul>
                <li>+1-234-67845</li>
                <li>Prescript@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr />
        <p>Copyright 2025@ Prescript All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
