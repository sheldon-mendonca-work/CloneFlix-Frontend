import { Link } from "react-router-dom";
import SelectLanguage from "../../UI/SelectLanguage/SelectLanguage";
import classes from './Footer.module.css';
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";

const Footer = () => {
    return <footer className={classes.footerDark}>
        <Container maxW={'container.xl'}>
            <Box pt={'1rem'} pb={'1rem'}>Questions? Call <Link className={classes.footerLink} to="/">000-800-919-1694</Link></Box>
            <Grid
            templateColumns={'repeat(4,1fr)'} gap={'1rem'} my={'1rem'}>
                <GridItem><Link className={classes.footerLink} to="#">FAQ</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Help Centre</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Account</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Media Centre</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Investor Relations</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Jobs</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Ways to Watch</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Terms of Use</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Privacy</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Cookie Preferences</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Corporate Information</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Contact Us</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Speed Test</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Legal Notices</Link></GridItem>
                <GridItem><Link className={classes.footerLink} to="#">Only on Netflix</Link></GridItem>
            </Grid>
            <Flex minH={'4.5rem'} color={'whiteAlpha.700'} py={'1rem'}>
                <SelectLanguage className="footer"/>
            </Flex>
            <Box my={'1rem'}>Netflix India</Box>
        </Container>
    </footer>
};

export default Footer;