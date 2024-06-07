import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
const LinkButtons = () => {
    return (
        <div className='buttonContainer'>
            <button className="emailButton"> <AiOutlineMail className='Email' /><a className='emailLink' href='https://mail.google.com/'> email</a>  </button>
            <button className="linkedInButton"> <FaLinkedin className='Linkedin' /> <a className='linkedinLink' href='https://www.linkedin.com/'>linkedin</a> </button>
        </div>

    )
}

export default LinkButtons
