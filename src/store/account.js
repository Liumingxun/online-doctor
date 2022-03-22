import {defineStore} from 'pinia'

export const useAccountStore = defineStore('account', {
    state: () => {
        return {
            state: false,
            user: {
                type: '',
                username: undefined,
                id: '',
                account: '',
                phone: undefined,
                email: undefined
            }
        }
    },
    getters: {
        isLogin() {
            return this.state
        }
    },
    actions: {
    }
})

