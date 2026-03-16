import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "/src/components/Header.jsx"
import MainSection from "/src/components/MainSection.jsx"
import travelData from "/src/data.js"

function App() {
  const [count, setCount] = useState(0)

  const travelElements = travelData.map((td) => {
    return <MainSection
      img={td.img}
      title={td.title}
      country={td.country}
      googleMapsLink = {td.googleMapsLink}
      dates = {td.dates}
      text = {td.text}
    />
  })

  console.log(travelElements)

  return (
    <>
      <main className='container'>
        <Header />
        {travelElements}
      </main>
      
    </>
  )
}

export default App
