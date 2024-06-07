import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
const FooterComponent = () => {
    return (
        <div className='footer'>
            <footer> <FaTwitter className='icon1' />    <FaFacebook className='icon2' />    <AiFillInstagram className='icon3' />    <AiFillGithub className='icon4' />    </footer>
        </div>
    )
}

export default FooterComponent
