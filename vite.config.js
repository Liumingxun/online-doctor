import {resolve} from 'path'
import {defineConfig} from 'vite'
import Unocss from 'unocss/vite'
import {presetUno} from 'unocss'
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
            include: [/\.vue$/, /\.js$/],
            imports: ['vue', 'pinia', 'vue-router'],
            resolvers: [ElementPlusResolver()],
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        Unocss({
            presets: [presetUno()],
            rules: [
                [/^bb-(\d+)-(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))$/, ([, d,c]) => ({'border-bottom': `${d}px solid ${c}`})]
            ]
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
    optimizeDeps: {
        include: ['vue', 'vue-router']
    }
})
