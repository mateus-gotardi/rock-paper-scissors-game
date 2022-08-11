import Cell from "./cell"
import Scores from "./placar"
import Rules from "./rules"
import RulesBTN from "./rulesBtn"
import Chooser from "./chooser"
import Step2 from "./step2"
import Step3 from "./step3"

const colors = {
    scissors: {to: '#EC9E0E', from: "#ECA922"},
    rock: {to: '#DC2E4E', from: "#DD405D"},
    paper: {to: '#4865F4', from: "#5671F5"},
    darkText: '#3B4363',
    darkFill: '#3B4262',
    scoreText: "#2A46C0",
    headerOutline: "#606e85"
}


export { colors, Cell, Scores, Rules, RulesBTN, Chooser, Step2, Step3}