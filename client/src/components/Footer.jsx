import githubLogo from '../assets/githublogo.png';
import linkedinLogo from '../assets/linkedinlogo.png';
import instaLogo from  '../assets/instagramlogo.png'
import fbLogo from '../assets/facebooklogo.png'

function Footer() {
  return (
<footer>
        <a href="https://www.github.com/yourusername">
            <img src={githubLogo} alt="GitHub" style={{ width: '30px', height: '30px' }}></img>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" >
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', height: '30px' }}></img>
        </a>
        <a href="https://www.twitter.com/yourusername">
            <img src={instaLogo} alt="Instagram" style={{ width: '30px', height: '30px' }}></img>
        </a>
        <a href="https://www.facebook.com/yourusername">
            <img src={fbLogo} alt="Facebook" style={{ width: '30px', height: '30px' }}></img>
        </a>
</footer>
  );
}

export default Footer;