//import { equalsIgnoreCase } from "../util"
import { api, version } from '../config'
import { saveToken, getHeaders, cleanToken } from "./localStorage"
import errorHandling from './errorHandling'
import axios from "axios"
import { toggleAuth } from "../store/actions/auth";

export const handleLogin = ({ email, password, dispatch }) => {
    let usuario = {}
    axios.post(`${api}/${version}/api/usuarios/login`, { email, password })
        .then((response) => {
            usuario = response.data.usuario
            saveToken(usuario)
            dispatch(toggleAuth(true, usuario))
        })
        .catch((response) => errorHandling(response))
}

export const getUser = (dispatch) => {
    let usuario = {}
    axios.get(`${api}/${version}/api/usuarios/`, getHeaders())
        .then((response) => {
            usuario = response.data.usuario
            dispatch(toggleAuth(true, usuario))
        })
        .catch((error) => errorHandling(error))
    return usuario
}

export const handleLogout = () => {
    cleanToken()
    return 'LOGOUT_AUTH'
}