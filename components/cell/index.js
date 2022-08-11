import { RPSButton } from "./styles";
import Image from "next/image";
import { colors } from "..";

export default function Cell({ element, width }) {
    return (
        <RPSButton name={element} element={element} colors={colors} width={width}>
            <div className="inner">
                <Image
                    priority
                    layout="responsive"
                    width='100%'
                    height='100%'
                    src={`/images/icon-${element}.svg`}
                    alt={element}>
                </Image>
            </div>
        </RPSButton>
    )
}