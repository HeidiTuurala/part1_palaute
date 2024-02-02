import { useState } from 'react'

const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)

  return (
    <div>
      <h2>{props.statistics}</h2>
    </div>
  )

}

const App = () => {
  const header = 'Give feedback'
  const statistics = 'Statistics'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('rendering...')

  const total = good + neutral + bad
  const average = total/3
  const positive = good/total
    
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

      <Statistics statistics = {statistics}/>      

      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive}</div>

    </div>
  )
}

export default App