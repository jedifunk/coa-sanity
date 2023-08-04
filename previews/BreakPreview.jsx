import React from 'react'

const BreakPreview = (props) => {

  const {horizontal} = props

  if (horizontal === 'small break') {
    return (<hr style={{width: `25%`}} />)
  } else {
    return <hr />
  }
}

export default BreakPreview