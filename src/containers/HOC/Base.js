import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router"
import { getUser } from '../../api/loginApi'

const base = Component => props => {

  const auth = useSelector(state => state.authorized)
  const user = useSelector(state => state.user)

  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const u = getUser(dispatch)

    if (!auth && user.token !== u.token)
      history.push("/login")
  })

  return (
    <>
      <Component />
    </>
  );
}

export default base