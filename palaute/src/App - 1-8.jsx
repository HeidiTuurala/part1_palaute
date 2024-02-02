import { useState } from 'react'

const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (total/3)
  const positive = (good/total)

  return (
    <div>
      <h2>Statistics</h2>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>

      <p>Total: {total}<br/>
      Average: {average}<br/>
      positive: {positive}</p>
    </div>
  )
}

const App = () => {
  const header = 'Give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('rendering...')
    
  return (
    <div>
      <Header header = {header}/>

      <button onClick = {() => setGood(good + 1)}>
        Good
      </button>
      <button onClick = {() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick = {() => setBad(bad + 1)}>
        Bad
      </button>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>      
    </div>
  )
}

export default App