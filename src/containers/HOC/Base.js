import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"
import { getUser } from '../../api/loginApi'

const base = Component => props => {

  const authentication = useSelector(state => state)
  const history = useHistory()

  useEffect(() => {
    if (!authentication.authorized){
      history.push("/login")
    }
  })

  return (
    <>
      <Component />
    </>
  );
}

export default base