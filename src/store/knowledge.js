import { defineStore } from 'pinia'
import { get } from '../api'

const useKnowledgeStore = defineStore('knowledge', {
    state: () => {
        return {

        }
    },
    actions: {
        async getKnowledge() {
            return get('/api/knowledge')
        }
    }
})
