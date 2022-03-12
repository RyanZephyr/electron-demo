<template>
  <nav class="titlebar">
    <!-- title -->
    <h1 class="title">POMO</h1>

    <div class="icon-wrapper">
      <!-- minimize -->
      <div class="icon" @click="minimize">
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 14 2"
          xml:space="preserve"
          width="15px"
          height="20px"
          class="Icon Icon--minimize"
        >
          <line
            fill="none"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="1"
            y1="1"
            x2="13"
            y2="1"
          />
        </svg>
      </div>
      <!-- close -->
      <div class="icon" @click="close">
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 12.6 12.6"
          xml:space="preserve"
          height="15px"
          class="Icon Icon--close"
        >
          <line
            fill="none"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="1"
            y1="1"
            x2="11.6"
            y2="11.6"
          />
          <line
            fill="none"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="11.6"
            y1="1"
            x2="1"
            y2="11.6"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
import { ipcRenderer } from 'electron';

export default {
  methods: {
    minimize() {
      ipcRenderer.send('window-minimize');
    },
    close() {
      ipcRenderer.send('window-close');
    },
  },
};
</script>

<style lang="scss" scoped>
.titlebar {
  display: flex;
  justify-content: space-between;
  background: #51af5b;
  -webkit-app-region: drag;
}

.title {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  margin: 9px 18px;
}

.icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  margin: 9px 18px;
}
</style>
