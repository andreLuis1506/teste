// primevue.d.ts
declare module 'primevue/themes' {
  export function definePreset(theme: any, options: any): any;
}

declare module 'primevue/themes/aura' {
  const Aura: any;
  export default Aura;
}

declare module 'primevue/themes/aura/button' {
  const button: any;
  export default button;
}