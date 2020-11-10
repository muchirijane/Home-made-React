import Navbar from '../Navbar/Navbar';
import {Button} from '../../Globalstyles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroBtn,

} from './Hero.styles';

const Hero = () =>{
    return(
        <div>
           <HeroContainer>
               <Navbar/>
               <HeroContent>
                   <HeroContentText>
                        <HeroTitle>
                            <HeroTitleText>Healthy</HeroTitleText>
                            <HeroTitleText>Meals All Day</HeroTitleText>
                        </HeroTitle>
                        <HeroSubTitle>For a longer Life</HeroSubTitle>
                        <HeroText>
                            Get a fresh and tasty recepies that are well balanced and 
                            will improve your wellness, plus add nutrients to your body.
                        </HeroText>
                        <HeroBtn to="/order-now">
                           <Button primary big bigFont bigRadius>Pick your meals</Button>
                        </HeroBtn>
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
        </div>
    )
}

export default Hero;