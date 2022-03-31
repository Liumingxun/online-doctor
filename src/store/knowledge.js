import { defineStore } from 'pinia'
import { get } from '../api'

export const useKnowledgeStore = defineStore('knowledge', {
    state: () => {
        return {

        }
    },
    actions: {
        async getKnowledgeCate() {
            return get('/api/knowledgecat/')()
        },
        async getKnowledgeDetail(id) {
            return get(`/api/knowledge/${id}/`)()
        }
    }
})
