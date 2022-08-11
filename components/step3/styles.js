import styled from "styled-components";

export const Step3Styles = styled.div`
.playAgain{
        margin-top: .5rem;
        letter-spacing: .17rem;
        padding: .7rem 3rem .7rem 3rem;
        border-radius: 10px;
        border:none;
        background-color: #fff;
        color: ${(props) => props.colors.darkText};
        :hover{
            color: red;
        }
}
.container{
    .gradient{
        background-color: transparent;
        border-radius: 50%;
        box-shadow:
            0 0 0 20px rgba(255, 255, 255, 0.09),
            0 0 0 40px rgba(255, 255, 255, 0.06),
            0 0 0 60px rgba(255, 255, 255, 0.03);
        transition: box-shadow 1s ease;
    }
display:flex;
align-items:center;
justify-content:center;
gap:5rem;
.showChoose {
    z-index:1;
    letter-spacing: .17rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height: 30rem;
    gap: 2rem;
}
.middle{
    z-index:3;
    margin-top:5rem;
    height: 15rem;
    letter-spacing: .17rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    h1{
        text-transform: uppercase;
        letter-spacing: .17rem;
        font-size: 3.2rem;
        margin:0
    }

}   

}
.bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
        text-transform: uppercase;
        letter-spacing: .17rem;
        font-size: 2.6rem;
        margin:0
        }
    }
@media (max-width:700px) {
    .container{
        gap: 3rem;
    .showChoose{
        flex-direction: column-reverse;
        gap: .5rem;
        font-size: .6rem;
        height: 15rem;
    }
    }
}
`;