import styled from 'styled-components'

const LayoutContainer = styled.div`
    display: grid;
    grid-template: [top] minmax(60px, auto) [row1] 1fr [row2] 60px [bottom] / [izq] 1fr [der];
    justify-content: center;
    padding: 0;
`;
export default LayoutContainer