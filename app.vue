<template>
  <div>
    <MyComponent />
    <template v-if="isLoading">
      <div>Loading...</div>
    </template>
    <ui-button label="Teste bacana" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ isLoading: false }>();

</script>
