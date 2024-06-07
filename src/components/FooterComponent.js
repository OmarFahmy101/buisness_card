import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
const FooterComponent = () => {
    return (
        <div className='footer'>
            <footer>   <a href='https://x.com/'><FaTwitter className='icon1' /></a>   <a href='https://www.facebook.com/profile.php?id=100008616815794'><FaFacebook className='icon2' /></a>    <a href='https://www.instagram.com/playboi.fahmy/'><AiFillInstagram className='icon3' /></a>    <a href='https://github.com/OmarFahmy101'><AiFillGithub className='icon4' />  </a>  </footer>
        </div>
    )
}

export default FooterComponent
