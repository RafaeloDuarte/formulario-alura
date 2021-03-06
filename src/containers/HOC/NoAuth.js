import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router"
import { getUser } from '../../api/loginApi'

const noAuth = Component => props =>{

  const auth = useSelector(state => state.authorized)
  const history = useHistory()
  const dispatch = useDispatch()
  getUser(dispatch)
  
  useEffect(() => {
    if (auth)
      history.push("/")
  }, [auth, history])

  return (
    <>
      <Component />
    </>
  );
}

export default noAuth