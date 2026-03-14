import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: true, 
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Brower Extension Frontend Challenge ',
                short_name: 'ExtensionChallenge',
                description: 'Frontend challenge to build a web page',
                theme_color: '#121212',
                background_color: '#121212',
                display: 'standalone',
                start_url: '/',
                icons: [
                    {
                        src: '/assets/images/icons/favicon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/assets/images/icons/favicon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
})
