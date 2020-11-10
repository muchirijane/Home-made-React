import {OutlineButton} from '../../Globalstyles';
import SalmonImg from '../../images/salmon.png';
import ChickenImg from '../../images/Chicken.svg';
import PizzaImg from '../../images/Italian-pizza.svg';
import PastaImg from '../../images/Pasta.svg';
import SaladImg from '../../images/salad.png';
import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    RecipeContentContainer,
    RecipeTabContainer,
    RecipeBtn,
    RecipeCardWrapper,
    RecipeFeature,
    RecipeFeatureContent,
    RecipeFeatureTitle,
    RecipeFeatureText,
    RecipeFeatureDetails,
    RecipeFeatureItem,
    RecipeItemTitle,
    RecipeItemContent,
    RecipeItemIcon,
    RecipeItemText,
    RecipeCardSection,
    RecipeSmallCards,
    RecipeCard,
    RecipeCardContent,
    RecipeCardHeading,
    RecipeCardDetails,
    RecipeCardItems,
    RecipeCardTitle,
    RecipeCardItem,
    RecipeCardIcon,
    RecipeCardText,
    RecipeImg,
    Img,



} from './Recipes.styles';
const Recipes = () => {
    return (
        <div>
            <RecipeWrapper>
                <RecipeContainer>
                    <RecipeTitle>Recipes</RecipeTitle>
                    <RecipeContentContainer>
                        <RecipeTabContainer>
                            <RecipeBtn to='/sea-food'>
                                <OutlineButton big bigFont bigRadius>Sea Food</OutlineButton>
                            </RecipeBtn>
                            <RecipeBtn to='/Vegetarian'>
                                <OutlineButton big bigFont bigRadius>Vegetarian</OutlineButton>  
                            </RecipeBtn>
                            <RecipeBtn to='/meat'>
                                <OutlineButton big bigFont bigRadius>Meat and Poultry</OutlineButton>
                            </RecipeBtn>
                            <RecipeBtn to='/easy-preps'>
                                <OutlineButton big bigFont bigRadius>Easy meal preps</OutlineButton>  
                            </RecipeBtn>
                        </RecipeTabContainer>
                        <RecipeCardWrapper>
                            <RecipeFeature>
                                <RecipeImg src={SalmonImg} alt="Salmon Recipe"/>
                                <RecipeFeatureContent>
                                    <RecipeFeatureTitle>
                                        Salmon and Hot Honey Butter
                                    </RecipeFeatureTitle>
                                    <RecipeFeatureText>
                                        The hot honey kinda sounds like a hype name used before the 20s, (I used it back then). 
                                        It’s a pefect coating for the salmon to enrinch it with sweetness and heat. 
                                    </RecipeFeatureText>
                                    <RecipeFeatureDetails>
                                        <RecipeFeatureItem>
                                            <RecipeItemTitle>Serving</RecipeItemTitle>
                                            <RecipeItemContent>
                                                <RecipeItemIcon/>
                                                <RecipeItemText>2</RecipeItemText>
                                            </RecipeItemContent>

                                        </RecipeFeatureItem>
                                        <RecipeFeatureItem>
                                            <RecipeItemTitle>Cook time</RecipeItemTitle>
                                            <RecipeItemText>35-45 min</RecipeItemText>
                                        </RecipeFeatureItem>
                                        <RecipeFeatureItem>
                                            <RecipeItemTitle>Difficulty level</RecipeItemTitle>
                                            <RecipeItemText>20%</RecipeItemText>
                                        </RecipeFeatureItem>

                                    </RecipeFeatureDetails> 
                                </RecipeFeatureContent>
                            </RecipeFeature>
                            <RecipeCardSection>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={ChickenImg} alt="Chicken Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                Pretzel-Crusted Chicken
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Cook time</RecipeCardTitle>
                                                    <RecipeCardText>30-45 min</RecipeCardText>
                                                </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>20%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={SaladImg} alt="Salad Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                 Sesame Asian Salad
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Cook time</RecipeCardTitle>
                                                    <RecipeCardText>10-15 min</RecipeCardText>
                                                </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>10%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={PizzaImg} alt="Pizza Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                Italian Pizza with Cheese
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Cook time</RecipeCardTitle>
                                                    <RecipeCardText>30-45 min</RecipeCardText>
                                                </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>20%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={PastaImg} alt="Pasta Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                               Pasta with creamy sause
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Cook time</RecipeCardTitle>
                                                    <RecipeCardText>10-15 min</RecipeCardText>
                                                </RecipeCardItems>
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>10%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>

                            </RecipeCardSection>
                            
                        </RecipeCardWrapper>
                    </RecipeContentContainer>
                </RecipeContainer>
            </RecipeWrapper>
            
        </div>
    );
}

export default Recipes;
