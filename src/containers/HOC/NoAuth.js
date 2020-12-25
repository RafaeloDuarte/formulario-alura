import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router"
import { getUser } from '../../api/loginApi'

const noAuth = Component => props =>{

  const auth = useSelector(state => state.authorized)
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    getUser(dispatch)
    if (auth)
      history.push("/")
  })
  return (
    <>
      <Component />
    </>
  );
}

export default noAuth