import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        allowedHosts: ['betoschneider.com']
    },
    base: '/markdown/'
});
