import App from '@/app.vue';

export default {
  title: 'Example/App',
  component: App,
};

const Template = (args) => ({
  components: { App },
  setup() {
    return { args };
  },
  template: '<app v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Adicione aqui as propriedades padrão do seu componente
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  // Adicione aqui as propriedades do seu componente para o estado de "Carregando"
};

export const Error = Template.bind({});
Error.args = {
  // Adicione aqui as propriedades do seu componente para o estado de "Erro"
};