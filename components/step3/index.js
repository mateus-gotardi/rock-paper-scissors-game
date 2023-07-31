import { Step3Styles } from "./styles";
import { Cell, colors } from '..'
import { useEffect, useState } from "react";

export default function Step3({ choose, house, winner, playAgain }) {
    const [w, setW] = useState(window.innerWidth);
    const [step4, setStep4] = useState(false)
    const [gradient, setGradient] = useState('')

    useEffect(() => {
        if (!step4) {
            setTimeout(() => {
                setStep4(true)
            }, 100)
        }
    }, [setStep4])

    useEffect(() => {
        if (winner === 'YOU WIN') {
            setGradient('player')
        } else if (winner === 'YOU LOSE') {
            setGradient('house')
        }
    }, [step4])
    return (
        <Step3Styles colors={colors} gradient={gradient}>
            <div className="container">
                {step4 ? <>
                    <div className={`showChoose`}>
                        <h2>YOU PICKED</h2>
                        <div className={`${gradient === 'player' && 'gradient'}`}>
                            <Cell width={w > 450 ? 13 : 10} element={choose}></Cell>
                        </div>

                    </div>
                    {w > 450 && <div className="middle">
                        <h1>{winner}</h1>
                        <button className='playAgain' onClick={(e) => playAgain(e)}>PLAY AGAIN</button>
                    </div>}
                    <div className={`showChoose`}>
                        <h2>THE HOUSE PICKED</h2>
                        <div className={`${gradient === 'house' && 'gradient'}`}>
                            <Cell width={w > 450 ? 13 : 10} element={house}></Cell>
                        </div>
                    </div>

                </>
                    :
                    <>
                        <div className="showChoose">
                            <h2>YOU PICKED</h2>
                            <Cell width={w > 450 ? 13 : 10} element={choose}></Cell>
                        </div>

                        <div className="showChoose">
                            <h2>THE HOUSE PICKED</h2>
                            <Cell width={w > 450 ? 13 : 10} element={house}></Cell>
                        </div>

                    </>
                }
            </div>
            {w <= 450 && step4 ?
                <div className="bottom">
                    <h1>{winner}</h1>
                    <button className='playAgain' onClick={(e) => playAgain(e)}>PLAY AGAIN</button>
                </div> : <></>}
        </Step3Styles>
    )
}