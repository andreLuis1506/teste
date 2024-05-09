import Button from 'primevue/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    severity: { control: 'select', options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger']},
    rounded: { control: 'boolean'},
    // Adicione aqui outros argumentos conforme necessário
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  disabled: false,
  severity: 'primary',
  // Adicione aqui as propriedades padrão do seu componente
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
  // Adicione aqui as propriedades do seu componente para o estado de "Desativado"
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Button',
  disabled: false,
  rounded: true,
  // Adicione aqui as propriedades do seu componente para o estado de "Desativado"
};

// Adicione aqui outras variantes conforme necessário