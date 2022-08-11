import { RulesBTNStyle } from "./styles";
import { colors } from "..";

export default function RulesBTN ({ setShowRules }) {
    return (
        <RulesBTNStyle colors={colors} onClick={() => setShowRules(true)}>
            RULES
        </RulesBTNStyle>
    )
}