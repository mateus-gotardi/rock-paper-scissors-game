import { ScoreStyles } from "./styles";
import { colors } from "..";

export default function Scores ({score}) {
    return (
        <ScoreStyles colors={colors}>
            <div className="title">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className='score'>
                <h3>SCORE</h3>
                <h1>{score}</h1>
            </div>
        </ScoreStyles>
    )
}