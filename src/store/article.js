import { defineStore } from 'pinia'
import { get } from '../api'

export const useArticleStore = defineStore('article', {
    state: () => {
        return {
            articleList: {}
        }
    },
    actions: {
        async getArticleList(params) {
            return await get('/api/article/')(params)
        },
        async getArticleDetail(id) {
            if (this.articleList[id] === undefined) {
                try {
                    this.articleList[id] =  await get(`/api/article/${id}/`)()
                    return this.articleList[id]
                } catch (e) {
                    console.log(e)
                }
            } else return this.articleList[id]
        }
    }
})
