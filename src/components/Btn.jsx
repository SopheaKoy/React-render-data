import React from 'react'

const Btn = ({title,btnStyle}) => {
    const defualtStyle =" py-2 px-3  rounded-lg <bg-red-7></bg-red-7>00"
    const defualtTitle ="click me"
  return (
    <button className={btnStyle?btnStyle: defualtStyle}>
        {title?title:defualtTitle}
    </button>
  )
}

export default Btn
