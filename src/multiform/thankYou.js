import styled from 'styled-components'
import thankYou from '../assets/images/icon-thank-you.svg'

const ThankYouWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const ImgStyle = styled.img`
    height:80px;
    width:80px;
    margin-top: 100px;
    margin-bottom: 20px;
    @media (max-width: 425px) {
        margin-top: 28px;
    }
`

const ThankYouText = styled.p`
    line-height : 26px;
    br {
        display: none;
    }
    @media (max-width: 425px) {
        font-size: 16px;
        padding: 15px 3px;
    }
`

function ThankYou() {
    return(
        <ThankYouWrapper>
            <ImgStyle src={thankYou} alt="checkmark"/>
            <h1>Thank you!</h1>
            <ThankYouText>Thanks for confirming your subscription! <br/> 
            We hope you have fun using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</ThankYouText>
        </ThankYouWrapper>
    )
}

export default ThankYou