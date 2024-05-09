import ButtonGroup from 'primevue/buttongroup';
import Button from 'primevue/button';

export default {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button },
}

const Template = (args) => ({
  components: { ButtonGroup, Button },
  setup() {
    return { args };
  },
  template: "\n" +
    "<ButtonGroup>\n" +
    "    <Button label=\"Save\" icon=\"pi pi-check\" />\n" +
    "    <Button label=\"Delete\" icon=\"pi pi-trash\" />\n" +
    "    <Button label=\"Cancel\" icon=\"pi pi-times\" />\n" +
    "</ButtonGroup>",
})

export const Default = Template.bind({});
