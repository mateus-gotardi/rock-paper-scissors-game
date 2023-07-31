import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Scores, Rules, RulesBTN, Chooser, Step2, Step3 } from '../components'

export default function Home() {
  const [showRules, setShowRules] = useState(false)
  const [choose, setChoose] = useState('')
  const [house, setHouse] = useState('')
  const [step, setStep] = useState(1)
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState('')

  useEffect(() => {
    if (choose !== '') {
      setStep(2)
      houseChooser()
    }
  }, [choose])

  useEffect(() => {
    if (house !== '') {
      setTimeout(() => getWinner(), 200)
    }
  }, [house])

  const playAgain = (e) => {
    e.preventDefault()
    setChoose('')
    setHouse('')
    setWinner('')
    setStep(1)
  }
  const getWinner = () => {
    let newScore = score
    if (choose === house) {
      setWinner('DRAW')
    } else if (choose === 'rock' && house === 'paper' ||
      choose === 'scissors' && house === 'rock' ||
      choose === 'paper' && house === 'scissors') {
      setWinner('YOU LOSE')
      if (newScore > 0) {
        newScore -= 1
      }
    } else if (house === 'rock' && choose === 'paper' ||
      house === 'scissors' && choose === 'rock' ||
      house === 'paper' && choose === 'scissors') {
      setWinner('YOU WIN')
      newScore += 1
    }
    setScore(newScore)
  }

  const houseChooser = () => {
    let options = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * options.length)
    setHouse(options[random])
    setTimeout(() => {
      setStep(3)
    }, 200)
  }
  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showRules && <Rules setShowRules={setShowRules} />}
      <RulesBTN setShowRules={setShowRules}></RulesBTN>
      <Scores score={score} />
      {step === 1 && <Chooser handleChoose={setChoose}></Chooser>}
      {step === 2 && <Step2 choose={choose}></Step2>}
      {step === 3 && <Step3 choose={choose} house={house} winner={winner} playAgain={playAgain}></Step3>}
    </div>
  )
}
