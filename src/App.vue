<template>
  <div id="app" class="chat">
    <title-component title="Чат-бот"/>
    <window-component/>
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent'
import WindowComponent from './components/WindowComponent'

export default {
  name: 'App',
  components: {
    TitleComponent,
    WindowComponent
  }
}
</script>

<style lang="scss">
  .chat {
    @media screen and (max-width: 375px) {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
</style>
