import { equalsIgnoreCase } from "../util"
import { api, version } from '../config'

export function handleLogin({ nome, senha, history }) {
    if (equalsIgnoreCase(nome, 'Eduardo') && senha === '123456') {
        console.log('usuário cadastrado')

        localStorage.setItem('token', '123')
        history.push('/')
    }
}