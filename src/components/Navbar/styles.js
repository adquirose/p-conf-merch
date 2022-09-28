import styled from 'styled-components'

export const NavbarContainer = styled.div`
    display:grid;
    grid-template: [row1] 60px [row2] auto [row3] / [izq] 60px [col1] 1fr [der];
`
export const NavContainer = styled.div`
    grid-column: col1/der;
    display:grid;
    grid-template-columns: 60px 50px 50px;
    justify-content:end;
    align-items:center;
`
export const SearchContainer = styled.button`
    width:100%;
    border:0;

`
export const ProfileContainer = styled.button`
    width:100%;
    border:0;
`
export const CartContainer = styled.button`
    width:100%;
    border:0;
    display:grid;
    grid-template-columns: 15px 100%;
`
export const Alert = styled.div`
    color: #33b13a;
    font-size: 14px;
    margin-left: 5px;
`