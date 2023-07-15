import { Link } from "react-router-dom";
import SelectLanguage from "../../Util/SelectLanguage/SelectLanguage";
import classes from './Footer.module.css';

const Footer = () => {
    return <footer className={classes.footerDark}>
        <p>Questions? Call <Link className={classes.footerLink} to="/">000-800-919-1694</Link></p>
        <ul>
            <li><Link className={classes.footerLink} to="#">FAQ</Link></li>
            <li><Link className={classes.footerLink} to="#">Help Centre</Link></li>
            <li><Link className={classes.footerLink} to="#">Account</Link></li>
            <li><Link className={classes.footerLink} to="#">Media Centre</Link></li>
            <li><Link className={classes.footerLink} to="#">Investor Relations</Link></li>
            <li><Link className={classes.footerLink} to="#">Jobs</Link></li>
            <li><Link className={classes.footerLink} to="#">Ways to Watch</Link></li>
            <li><Link className={classes.footerLink} to="#">Terms of Use</Link></li>
            <li><Link className={classes.footerLink} to="#">Privacy</Link></li>
            <li><Link className={classes.footerLink} to="#">Cookie Preferences</Link></li>
            <li><Link className={classes.footerLink} to="#">Corporate Information</Link></li>
            <li><Link className={classes.footerLink} to="#">Contact Us</Link></li>
            <li><Link className={classes.footerLink} to="#">Speed Test</Link></li>
            <li><Link className={classes.footerLink} to="#">Legal Notices</Link></li>
            <li><Link className={classes.footerLink} to="#">Only on Netflix</Link></li>
        </ul>
        <SelectLanguage type="footer"/>
        <p>Netflix India</p>
    </footer>
};

export default Footer;