import Mail from '../images/mail.png'
import linkedin from '../images/linkedin.png'
const Button = () => {
  return (
    <div className='button-content'>
      <button className='btn mail-button'>
        <img src={Mail} alt="mail-icon" className='img' />Email
      </button>
      <a href='https://www.facebook.com/' target='_blank' > 
        <button className='btn linkedin-button'>
          <img src={linkedin} alt="linkedin-icon" className='img'/>Linkedin
        </button>
      </a>
    </div>
  )
}
export default Button