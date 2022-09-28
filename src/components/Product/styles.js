import styled from 'styled-components'

export const CardContainer = styled.div`
    width:320px;
    margin-bottom:5px;
`
export const Card = styled.div`
    display:grid;
    grid-template: [top] 200px [row1] 100px [row2] 50px [bottom] / [izq] 1fr [der];
    width:320px;
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
    font-size:16px;
`
export const CardText = styled.p`
    font-size:12px;
`
export const Button = styled.button`
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    width: 100%;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    border: 0px;
    outline: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
`
export const ButtonGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:5px;
`
export const CountContainer = styled.div`
    border: 1px solid gray;
    grid-row: row2/bottom;
`