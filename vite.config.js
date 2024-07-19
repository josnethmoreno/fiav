// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        es: resolve(__dirname, 'es.html'),
        acqua: resolve(__dirname, 'rooms/acqua-room.html'),
        acquaes: resolve(__dirname, 'es/habitaciones/acqua-room.html'),
        junior: resolve(__dirname, 'rooms/junior-suite.html'),
        juniores: resolve(__dirname, 'es/habitaciones/junior-suite.html'),
        presidential: resolve(__dirname, 'rooms/presidential-suite.html'),
        presidentiales: resolve(__dirname, 'es/habitaciones/presidential-suite.html'),
        king: resolve(__dirname, 'rooms/king-room.html'),
        kinges: resolve(__dirname, 'es/habitaciones/king-room.html'),
        double: resolve(__dirname, 'rooms/double-room.html'),
        doublees: resolve(__dirname, 'es/habitaciones/double-room.html'),
        rooms: resolve(__dirname, 'rooms.html'),
        habitaciones: resolve(__dirname, 'es/habitaciones.html'),
        about: resolve(__dirname, 'about.html'),
        nosotros: resolve(__dirname, 'es/nosotros.html'),
        pismo: resolve(__dirname, 'restaurants/pismo.html'),
        pismoes: resolve(__dirname, 'es/restaurantes/pismo.html'),
        praia: resolve(__dirname, 'restaurants/praia.html'),
        praiaes: resolve(__dirname, 'es/restaurantes/praia.html'),
        privacy: resolve(__dirname, 'legal/privacy.html'),
        privacidad: resolve(__dirname, 'es/legal/privacidad.html'),
        termns: resolve(__dirname, 'legal/terms.html'),
        terminos: resolve(__dirname, 'es/legal/terminos.html'),
        qr: resolve(__dirname, 'qr.html')
      },
    },
  },
})