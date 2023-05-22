import styled from 'styled-components'


export const SummaryWrapperStyle = styled.div`
    background-color: #f0f6ff; 
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
    padding:20px;
`

export const PlanSelectWrapperStyle = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid hsl(229, 24%, 87%);
`

export const AddOnsListStyle = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AddOnsListNameStyle = styled.p`
    padding-bottom: 0;
    padding-top: 20px;
    text-transform: capitalize;
`

export const AddOnsListPriceStyle = styled.p`
    padding-bottom: 0;
    padding-top: 20px;
    color: #02295a;
`

export const PlanSelectStyle = styled.h3`
    text-transform: capitalize;
`

export const PlanSelectPriceStyle = styled.p`
    color: #02295a;
    font-weight: 700;
    padding: 0 0 16px 0;
`

export const ChangeWordStyle = styled.button`
    text-decoration: 2px underline; 
    padding: 6px 0 25px 0;
    margin:0;
    background-color: transparent;
    color:  #9699ab;
    width:auto;
    font-size:14px;
    &:hover{
        background-color: transparent;
    }

`

export const TotalWrapperStyle = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
`