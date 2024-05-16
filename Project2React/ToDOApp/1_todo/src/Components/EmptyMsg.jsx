import React from 'react'

function EmptyMsg({foodList}) {

  return (
    <>
    {foodList.length==0 ? <h3>I am still Hungry</h3>:null}
    </>
  )
}

export default EmptyMsg