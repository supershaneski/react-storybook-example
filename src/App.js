import React from 'react'
import classes from './App.module.css'
import Graph from './components/Graph'
import ThemeContext from './lib/ThemeContext'

function initialData() {
  const total = 11
  let items = []
  for(let i = 0; i < total; i++) {
    const value = Math.round(300 * Math.random())
    items.push({x: i, y: value})
  }
  return items
}

function normalizeData(items) {
  
  const max = Math.max(...items.map(({y}) => y))

  const bias = Math.round(0.1 * max)

  const normal_items = items.map(item => {
    return {
      ...item,
      y: Math.round(100 * (item.y / (max + bias)))
    }
  })

  return {
    max: max,
    items: normal_items,
  }

}

const CustomGraph = (props) => {
  return (
    <ThemeContext.Consumer>
    {(theme) => {
      console.log("custom", theme)
      return (
        <Graph 
        backgroundColor="transparent"
        axisColor={theme === 'dark' ? '#aaa' : '#999'}
        axisLabelColor={theme === 'dark' ? '#fff' : '#333'}
        tickLabelColor={theme === 'dark' ? '#aaa' : '#999'}
        titleColor={theme === 'dark' ? '#fff' : '#333'}
        {...props} />
      )
    }}
    </ThemeContext.Consumer>
  )
}

function App() {

  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {

    const handleModeChange = (e) => {
        
      if(e.matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }

    }

    const _theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    setTheme(_theme)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleModeChange)

    return () => {

      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleModeChange)
                
    }

  }, [])

  const handleClickItem = (index, value) => {
    console.log(index, value)
  }

  const normalizedData = normalizeData(initialData())
  const tickLabel = [
    {y: 20, label: Math.round(0.2 * normalizedData.max)},
    {y: 50, label: Math.round(0.5 * normalizedData.max)},
    {y: 75, label: Math.round(0.75 * normalizedData.max)},
  ]

  return (
    <ThemeContext.Provider value={theme}>
      <div className={classes.container}>
        <div className={classes.graph}>
          <CustomGraph 
          data={normalizedData.items} 
          tickLabelY={tickLabel}
          tickLabelX={['7/29', '30', '31', '8/1', '2', '3', '5', '6', '7', '8', '8/9']}
          title="Histogram Label"
          titleAlign="center"
          labelX="Date of Access"
          labelY="Total Count"
          onClick={handleClickItem}
          color="#FFA967"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
