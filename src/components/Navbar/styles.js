import styled from 'styled-components'

export const NavbarContainer = styled.div`
    position:sticky;
    top:0;
    display:grid;
    grid-template: [row1] 60px [row2] auto [row3] / [izq] 60px [col1] 1fr [der];
`
export const NavContainer = styled.div`
    grid-column: col1/der;
    display:grid;
    grid-template: [top] 50px [bottom] / [izq] 20px [col1] 50px [col2] 50px [col3] 50px [der] ;
    justify-content:end;
    align-items:center;
`
export const SearchContainer = styled.div`
    width:100%;
    border:0;
    grid-column:col2/col3;
`
export const ProfileContainer = styled.div`
    width:100%;
    border:0;
    grid-column:col3/der;
`
export const CartContainer = styled.div`
    width:100%;
    border:0;
    grid-column: col1/col2;
`
export const Alert = styled.div`
    color: #33b13a;
    font-size: 14px;
    margin-left: 5px;
    grid-column: izq/col1;
`