import React from 'react'

const Quotation = (props) => {

  return (
    <figure className='quotation'>
      <blockquote>{props.quote}</blockquote>
      {props.author ? <figcaption>{props.author}</figcaption> : ''}
    </figure>
  )

}
export default Quotation