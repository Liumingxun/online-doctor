import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


// eslint-disable-next-line no-undef
const r = (src) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Pages({
            dirs: 'src/views'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    resolve: {
        alias: {
            '@': r('src'),
            '@c': r('src/components'),
            '@a': r('src/assets'),
            '@v': r('src/views')
        }
    },
})
