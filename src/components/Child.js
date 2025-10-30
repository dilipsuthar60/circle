import React, { useContext } from 'react'
import { userContext } from '../App'

export const Child = () => {
    const value = useContext(userContext);
  return (
    <div>{value.name}</div>
  )
}
