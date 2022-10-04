import styled from 'styled-components'

export const CardContainer = styled.div`
    min-width:280px;
    max-width:320px;
    margin:7px;
    display:flex;
    justify-content:center;
`
export const Card = styled.div`
    display:grid;
    grid-template: [top] 200px [row1] 100px [row2] 95px [bottom] / [izq] 1fr [der];
    width:100%;
    border: 1px solid gray;
    border-radius:10px;
`
export const CardImage = styled.img`
    grid-row: top/row1;
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
`
export const CardBody = styled.div`
    width:100%;
    grid-row: row1/bottom;
`
export const CardTitle = styled.p`
    font-size:18px;
    padding-left:20px;
`
export const CardText = styled.p`
    font-size:14px;
    padding-left:20px;
`
export const Button = styled.button`
    width: 100px;
    padding: 10px;
    background:transparent;
    border-radius: 0px 0px 5px 5px;
    border: 0px;
    outline: 0;
    color:black;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    &:disabled{
        color:gray;
    }
`
export const ButtonGroup = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
export const CountContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100px;
    height:32px;
    border: 1px solid gray;
    border-radius:10px;
    margin: 0 auto;  
`
export const CountButton = styled.button`
    padding: 3px;
    border-radius: 0px 0px 5px 5px;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    width: 40px;
    background:transparent;
`
export const CountSpan = styled.span`
    width:20px;
    padding-top:2px;
    text-align:center;
`