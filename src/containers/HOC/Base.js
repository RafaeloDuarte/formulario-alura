import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"

const base = Component => props =>{

  const auth = useSelector(state => state.authorized)
  const history = useHistory()

  useEffect(() => {
    if (!auth)
      history.push("/login")
  })
  return (
    <>
      <Component />
    </>
  );
}

export default base