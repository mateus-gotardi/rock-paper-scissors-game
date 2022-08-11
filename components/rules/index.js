import { RulesStyle } from "./styles";
import Image from "next/image";
import { colors } from "..";

export default function Rules({ setShowRules }) {
    return (
        <RulesStyle colors={colors}>
            <div className="blur-bcg" onClick={()=>setShowRules(false)}></div>
            <div className="rules-container">
                <div className="rules-header"><h2>RULES</h2>
                    <div className="close" onClick={()=>setShowRules(false)}><Image width='20px' height='20px' src='/images/icon-close.svg'></Image></div>
                </div>

                <div className="rules-SVG">
                    <Image
                        layout='responsive'
                        width='70%'
                        height='62%'
                        src={`/images/image-rules.svg`}
                        alt='rules of the game'>
                    </Image>
                </div>

            </div>

        </RulesStyle>
    )
}