import PrimeVue from 'primevue/config'
import { definePreset } from 'primevue/themes'
import Aura from 'primevue/themes/aura'
import ButtonGroup from "primevue/buttongroup"
import Button from "primevue/button/"

const myPreset = definePreset(Aura, {
  primitive: {
    rounded: {
      sm: '4px',
      base: '6px',
      lg: '8px',  
      xl: '12px'
    },
    indigo: {
      50: '#e8eaf6',
      100: '#c5cae9',
      200: '#9fa8da',
      300: '#7986cb',
      400: '#5c6bc0',
      500: '#7749F8',
      600: '#394aae',
      700: '#303f9f',
      800: '#283593',
      900: '#1a237e'
    },
  },
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  },
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: myPreset,
      options: {
        prefix: 'Ui'
      }
    }
  })

  nuxtApp.vueApp.component('UiButton', Button)
  nuxtApp.vueApp.component('ButtonGroup', ButtonGroup)
})