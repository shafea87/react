import { useState } from 'react'
import data from './data'
import SingleAccordion from './SingleAccordion'

function App() {
  // eslint-disable-next-line
  const [showData, setShowData] = useState(data)
  return (
    <div className='App'>
      <ul className='c-accordion'>
        {showData.map((item) => {
          return <SingleAccordion key={item.id} {...item} />
        })}
      </ul>
    </div>
  )
}

export default App
