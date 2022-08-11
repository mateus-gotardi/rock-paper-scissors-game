import styled from "styled-components";

export const Step2Styles = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:5rem;
.showChoose {
    font-size: 1.3rem;
    letter-spacing: .17rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height: 30rem;
    gap: 2rem;
.placeHolder{
    width: 13rem;
    height: 13rem;
    display: flex;
    align-items:center;
    justify-content:center;
    div{
        width: 9rem;
        height: 9rem;
        background-color: ${(props)=>props.colors.darkFill};
        border-radius:50%;
    }
}
}
@media (max-width:700px) {
    gap: 3rem;
    .showChoose{
        flex-direction: column-reverse;
        gap: .5rem;
        font-size: .6rem;
        height: 15rem;
        .placeHolder{
            width: 7rem;
            height: 7rem;
            div{
                width: 5rem;
                height: 5rem;
            }
        }
    }
}
`;