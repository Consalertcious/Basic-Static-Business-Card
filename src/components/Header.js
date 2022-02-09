import ladyImage from '../images/ladyprofile.png'
const Header = () => {
  return (
    <div className="header-content">
      <img src={ladyImage} alt={ladyImage} className='lady-image' />
      <h1 className='lady-name'>Laura Smith</h1>
      <h4 className='lady-position'>Frontend Developer</h4>
      <p className='lady-website'>laurasmith.website</p>
    </div>
  )
}
export default Header