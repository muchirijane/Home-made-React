import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    FooterLabel
} from './Footer.styles';
function Footer() {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterNewsletter>
                        <FooterNewsletterTitle>Join our listing for execlusive discounts and new recipes</FooterNewsletterTitle>
                        <FooterNewsletterText>We create new recipes every week and cooking tips</FooterNewsletterText>
                        <FooterNewsletterForm>
                            <FooterLabel htmlFor="email">Email address</FooterLabel>
                           <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                           <FooterBtn>Submit</FooterBtn>
                        </FooterNewsletterForm>
                    </FooterNewsletter>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>Our Chefs</FooterLink>
                                <FooterLink to='/'>Our Farm</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Terms of service</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/about'>How it works</FooterLink>
                                <FooterLink to='/'>Meal prep kit</FooterLink>
                                <FooterLink to='/'>Gift cards</FooterLink>
                                <FooterLink to='/'>Orders</FooterLink>
                            </FooterLinks>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink to='/'>Kitchenware</FooterLink>
                                <FooterLink to='/'>Recipes</FooterLink>
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                                <FooterLink to='/'>Affiliate Program</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Linkedin</FooterLink>
                            </FooterLinks>
                            
                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight to='https://github.com/muchirijane'> &copy; Copyright 2020, Designed and coded with 💛 by Jane Tracy</FooterCopyRight>
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}

export default Footer;
