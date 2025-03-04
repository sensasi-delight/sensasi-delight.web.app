import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return
                }
                warn(warning)
            },
            output: {
                compact: true,
                manualChunks(id) {
                    if (id.search('node_modules') > -1) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            ?.split('/')[0]
                            ?.toString()
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    plugins: [react()],
})
