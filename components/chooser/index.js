import { ChooserStyles } from './styles'
import { Cell } from '..'

export default function Chooser({ handleChoose }) {
    return (
        <ChooserStyles>
            <div className='grid'>
                <div className="item1 grid-item" >
                    <div className='clickable' onClick={() => handleChoose('paper')}>
                        <Cell element='paper' width={11.3}></Cell>
                    </div>
                </div>
                <div className="item2 grid-item">
                    <div className='clickable' onClick={() => handleChoose('scissors')}>
                        <Cell element='scissors' width={11.3}></Cell>
                    </div>
                </div>
                <div className="item3 grid-item" >
                    <div className='clickable' onClick={() => handleChoose('rock')}>
                        <Cell element='rock' width={11.3}></Cell>
                    </div>
                </div>
            </div>

        </ChooserStyles>
    )

}