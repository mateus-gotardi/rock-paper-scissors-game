import styled from "styled-components";

export const ScoreStyles = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 43.2rem;
margin: 2.7rem auto 0 auto;
border-radius: 10px;
padding: 1rem 1.6rem 1rem 1.6rem;
border: 2px solid ${(props) => props.colors.headerOutline};
.title{
    h2{
        font-size: 2rem;
        margin:0 0 0 0;
        font-weight:700;
        line-height: 0.87;
    };
};
.score{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 9rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius:10px;
    h1, h3{
        margin:0
    }
    h3{
        color: ${(props) => props.colors.scoreText};
        font-weight: 600;
        font-size: .9rem;
        letter-spacing: .17rem
    };
    h1{
        color: ${(props) => props.colors.darkText};
        font-size: 3.4rem;
        letter-spacing: .17rem
    }
}
@media (max-width:700px) {
    width:90vw;
    padding: .5rem .8rem .5rem .8rem;
    .score{
        width: 5.5rem;
        padding: .3rem .4rem .3rem .4rem;
    }
    .title h2{
        font-size: 1.4rem;
    }
    .score{
        h3{ font-size: .7rem;}
        h1{font-size: 2.2rem}
    }
}
`;
