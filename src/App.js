import React from 'react'
import classes from './App.module.css'
import Graph from './components/Graph'

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

function App() {

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
    <div className={classes.container}>
      <div className={classes.graph}>
        <Graph 
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
  );
}

export default App;
