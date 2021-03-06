import React from 'react'
import { Button } from '@material-ui/core'
import { handleLogout } from '../../api/loginApi'
import { useDispatch, useSelector } from "react-redux"
import { logoutAuth } from "../../store/actions/auth"
import { useHistory } from 'react-router-dom'

export default function Home() {

    const dispatch = useDispatch()
    const usuario = useSelector(state=>state.user)
    const history = useHistory()

    return (
        <>
            <h1>Home</h1>
            <h1>bem vindo {usuario && usuario.nome}</h1>
            <Button variant="contained" color="secondary" onClick={(e) => {
                e.preventDefault()
                handleLogout()
                dispatch(logoutAuth())
                history.push('/login')
            }}>
                Logout
            </Button>
        </>
    );
}