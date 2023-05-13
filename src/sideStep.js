import styled from 'styled-components'
import sideBar from './assets/images/bg-sidebar-desktop.svg'

const SelectSide = styled.div`
    max-height:100%;
    position: relative;
`

const Imgstyle = styled.img`
    height:100%;
    z-index:1;
    position: relative;
`

const StepWrapper = styled.div`
    position: relative;
    z-index:2;
    top: -100%;
`

const StepStyle = styled.div`
    display: flex;
    flex-direction: row;
    z-index:2;
    position: relative;
    gap:15px;
    padding:24px;
    padding-bottom: 0;
`

const StepNumber = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid hsl(229,24%,87%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
        background-color: #bfe2fd;
        color: #02295a;
    }
`

const StepText = styled.div`
    color: #adbeff;
    font-weight: 400;
    font-size: 12px;
    margin:0;
`

function SideStep({step}) {

    return(
        <SelectSide>
            <Imgstyle src={sideBar} alt='background'/>
                <StepWrapper>
                    <StepStyle>
                        <StepNumber className={step === 1 ? 'active' : ''}>1</StepNumber>
                        <div>  
                            <StepText>STEP 1</StepText>
                            <h2>YOUR INFO</h2>
                        </div>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 2 ? 'active' : ''}>2</StepNumber>
                        <div>  
                            <StepText>STEP 2</StepText>
                            <h2>SELECT PLAN</h2>
                        </div>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 3 ? 'active' : ''}>3</StepNumber>
                        <div>  
                            <StepText>STEP 3</StepText>
                            <h2>ADD-ONS</h2>
                        </div>
                    </StepStyle>
                    <StepStyle>
                        <StepNumber className={step === 4 || step === 5 ? 'active' : ''} >4</StepNumber>
                        <div>  
                            <StepText>STEP 4</StepText>
                            <h2>SUMMARY</h2>
                        </div>
                    </StepStyle>
                </StepWrapper>    
        </SelectSide>
    )
}

export default SideStep;