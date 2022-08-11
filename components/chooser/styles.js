import styled from "styled-components";

export const ChooserStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:2.5rem;
.grid{
    display: grid;
    width: 30rem;
    height: 26rem;
    grid-template-columns: auto auto;
    align-items: center;
    background-image:url('/images/bg-triangle.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20rem 14rem;
    .item3{
        grid-column: 1/ span 2
    }
    .grid-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .clickable{
        border-radius:50%;
        cursor: pointer;
    }
}
@media (max-width:700px) {
    margin-top:.5rem;
}
`;