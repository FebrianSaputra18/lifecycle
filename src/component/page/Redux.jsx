import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decCheckingAction, increment } from '../../app/features/counter/action'

const Redux = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
      <Button onClick={() => dispatch(decCheckingAction(1))}>-</Button>
      {''} <span>{count}</span> {''}
      <Button onClick={() => dispatch(increment(1))}>+</Button>
    </div>
  )
}

export default Redux
