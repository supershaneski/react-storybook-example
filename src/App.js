import React from 'react'
import classes from './App.module.css'
import Graph from './components/Graph'
import ThemeContext from './lib/ThemeContext'

// This is just a simple random number generator that will populate the initial data for the graph
function initialData() {
  
  const total = 11
  
  let items = []
  
  for(let i = 0; i < total; i++) {
    const value = Math.round(300 * Math.random())
    items.push({x: i, y: value})
  }

  return items
}

function getArrayMax(items) {
  return Math.max(...items.map(({y}) => y))
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

  const initData = initialData();

  const max = getArrayMax(initData)
  
  const tickLabel = [
    {y: 20, label: Math.round(0.2 * max)},
    {y: 50, label: Math.round(0.5 * max)},
    {y: 75, label: Math.round(0.75 * max)},
  ]

  return (
    <ThemeContext.Provider value={theme}>
      <div className={classes.container}>
        <div className={classes.graph}>
          <CustomGraph 
          data={initData} 
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
