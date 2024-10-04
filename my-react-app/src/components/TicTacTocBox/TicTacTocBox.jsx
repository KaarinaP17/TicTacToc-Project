import React from 'react'
import './TicTacTocBox.css'


const TicTacTocBox = ({dataIndex, action, value}) => {
  return (
    <div className="cell" data-index={dataIndex} onClick={action}>{value}</div>
  )
}

export default TicTacTocBox