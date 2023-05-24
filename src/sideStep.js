import { SelectSide, Imgstyle, StepWrapper, StepStyle, StepNumber, StepText, StepMobileStyle} from './styled/sideStep.styled'
import sideBar from './assets/images/bg-sidebar-desktop.svg'
import sideBarMobile from './assets/images/bg-sidebar-mobile.svg'

function SideStep({step}) {

    return(
        <SelectSide>
            <picture>
                <source srcSet={sideBarMobile} media="(max-width: 850px)"/>
                <source srcSet={sideBar} />
                <Imgstyle src={sideBar} alt='background'/>
            </picture>
                <StepWrapper>
                    <StepStyle>
                        <StepNumber className={step === 1 ? 'active' : ''}>1</StepNumber>
                        <StepMobileStyle>  
                            <StepText>STEP 1</StepText>
                            <h2>YOUR INFO</h2>
                        </StepMobileStyle>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 2 ? 'active' : ''}>2</StepNumber>
                        <StepMobileStyle>  
                            <StepText>STEP 2</StepText>
                            <h2>SELECT PLAN</h2>
                        </StepMobileStyle>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 3 ? 'active' : ''}>3</StepNumber>
                        <StepMobileStyle>  
                            <StepText>STEP 3</StepText>
                            <h2>ADD-ONS</h2>
                        </StepMobileStyle>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 4 || step === 5 ? 'active' : ''}>4</StepNumber>
                        <StepMobileStyle>  
                            <StepText>STEP 4</StepText>
                            <h2>SUMMARY</h2>
                        </StepMobileStyle>
                    </StepStyle>
                </StepWrapper>    
        </SelectSide>
    )
}

export default SideStep;