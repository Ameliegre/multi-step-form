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
`

function ThankYou() {
    return(
        <ThankYouWrapper>
            <ImgStyle src={thankYou} alt="checkmark"/>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>
        </ThankYouWrapper>
    )
}

export default ThankYou