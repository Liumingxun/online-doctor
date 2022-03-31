import { defineStore } from 'pinia'
import { get } from '../api'

const useKnowledgeStore = defineStore('knowledge', {
    state: () => {
        return {

        }
    },
    actions: {
        async getKnowledgeCate() {
            return get('/api/knowledgecat/')()
        }
    }
})

export {useKnowledgeStore}
