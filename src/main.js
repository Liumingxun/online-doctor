import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'uno.css'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import VueMarkdownPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'

VueMarkdownEditor.use(githubTheme)
VueMarkdownPreview.use(githubTheme)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(VueMarkdownEditor)
app.use(VueMarkdownPreview)
app.mount('#app')
