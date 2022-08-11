import styled from "styled-components";

export const RulesBTNStyle = styled.button`
z-index:900;
position: fixed;
bottom: 2rem;
right: 2.5rem;
background: none;
border: 2px solid ${(props)=>props.colors.headerOutline};
border-radius: 10px;
color: #fff;
padding: 0.5rem 2rem .5rem 2rem;
cursor: pointer;
letter-spacing: .17rem;
@media (max-width:1070px) {
    background-color: ${(props)=>props.colors.darkFill};
    right: calc(50% - 58px);
}
`;