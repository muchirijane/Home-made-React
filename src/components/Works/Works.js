import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WorksIcon1,
    WorksIcon2,
    WorksIcon3,
    WorksCardTitle,
    WorksCardText
} from './works.styles';
const Works = () => {
    return (
        <div>
            <WorksContent>
                <WorksContainer>
                    <WorksTitle> How it works</WorksTitle>
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Pick a meal</WorksCardTitle>
                            <WorksCardText>
                                There are different meals every week to choose from. 
                                This gives you a variety of options to switch it up.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Customize it</WorksCardTitle>
                            <WorksCardText>
                               Choose your favorite recipes that you want to cook. 
                               Pick the category you love. 
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Cook it up</WorksCardTitle>
                            <WorksCardText>
                               Order the meal you have chosen. 
                               Fresh and packed ingredients straight to your door step.
                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            
        </div>
    )
}

export default Works;
