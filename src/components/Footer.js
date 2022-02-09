import facebook from '../images/facebook.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

const Footer = () => {
  return (
    <div className="footer-content">
      <img src={twitter} alt="twitter-logo" />
      <img src={facebook} alt="facebook-logo" />
      <img src={instagram} alt="instagram-logo" />
      <img src={github} alt="github-logo" />
    </div>
  )
}
export default Footer