import styled from "styled-components";

export const RulesStyle = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
z-index:1000;
top: 0;
overflow: hidden;
.blur-bcg{
    background-color: #000;
    opacity: 70%;
    width: 100vw;
    position: absolute;
    height: 100vh;
    overflow: hidden;
}

.rules-container{
    h2{
        font-size: 1.5rem;
        margin:0;
        color: ${(props)=>props.colors.darkText}
    }
    border-radius: 10px;
    padding: 2rem;
    z-index:1100;
    background-color: #fff;
    width: 25rem;
    height: 26rem;
    overflow: hidden;
}

.rules-SVG{
    padding: .5rem;
    margin-bottom: 1.4rem;
}
.rules-header{
    .close{
        cursor: pointer;
    }
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    align-items: center;
    margin-bottom: 2rem;
}
@media (max-width:700px) {
    .rules-container{
        width: 100%;
        height: 100%;
        border-radius:0
    }
}
`;