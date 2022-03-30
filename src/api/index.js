import axios from 'axios'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin-Type': '*'
    },
    timeout: 1000 * 5,
    withCredentials: false
})

export function get(url) {
    return function (params) {
        return instance.get(url, {params}).then(
            res => res.data
        ).catch(err => console.log(err))
    }
}
