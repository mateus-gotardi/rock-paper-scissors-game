import styled from "styled-components";

export const RPSButton = styled.div`

display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border: ${(props)=>props.width/10}rem solid ${(props) => props.colors[props.element].from};
border-radius: 50%;
box-shadow: 0px 9px 0px -1px ${(props) => props.colors[props.element].to};
width: ${(props)=>props.width}rem;
height: ${(props)=>props.width}rem;
.inner{
    padding: 2.3rem;
    border-radius: 50%;
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 9px 0px -1px #BABFD3
}
@media (max-width:700px) {
    width: ${(props)=>props.width-3}rem;
    height: ${(props)=>props.width-3}rem;
    border: ${(props)=>props.width/13}rem solid ${(props) => props.colors[props.element].from};
    .inner{
        padding: 1.5rem;
    }
}
`;