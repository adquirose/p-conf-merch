import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    min-height:calc(100vh - 120px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
`
export const CartContainer = styled.div`
    min-width: 320px;
    width:100%;
    max-width:520px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 40px);
    grid-row-gap: .5em;
    grid-column-gap: 1em;
    justify-self:center;
    min-height:240px;
    border: 1px solid gray;
    border-radius:10px;
    padding-left:5px;
    padding-right:5px;
`
export const Item = styled.div`
    display: grid;
    grid-template-columns: repeat(4,min(65px, 150px)) 40px;
    grid-row-gap: .5em;
    grid-column-gap: 1em;
    justify-content:center;
    align-items:center;
`
export const Span = styled.span`
    font-size:14px;
    text-align:center;
`
export const Button = styled.button`
    border:0;
    background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
`