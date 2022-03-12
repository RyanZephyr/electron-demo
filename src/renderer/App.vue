<template>
  <div id="app">
    <titlebar></titlebar>
  </div>
</template>

<script>
import Titlebar from '@/components/Titlebar';
export default {
  name: 'electron-demo',
  components: { Titlebar },
};
</script>

<style>
/* CSS */
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
