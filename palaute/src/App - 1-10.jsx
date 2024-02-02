import { useState } from 'react'

const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>{text}: {value}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (total/3)
  const positive = (good/total)

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text = "Good" value = {good}/>
      <StatisticLine text = "Neutral" value = {neutral}/>
      <StatisticLine text = "Bad" value = {bad}/>

      <p>Total: {total}<br/>
      Average: {average}<br/>
      positive: {positive}</p>
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const header = 'Give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)

  const increaseNeutralByOne = () => setNeutral(neutral + 1)

  const increaseBadByOne = () => setBad(bad + 1)

  console.log('rendering...')
    
  return (
    <div>
      <Header header = {header}/>

      <Button handleClick = {increaseGoodByOne}
        text = 'Good'
      />
      <Button handleClick = {increaseNeutralByOne}
        text = 'Neutral'
      />
      <Button handleClick = {increaseBadByOne}
        text = 'Bad'
      />
  

      <Statistics good = {good} neutral = {neutral} bad = {bad}/> 
    </div>
  )
}

export default App