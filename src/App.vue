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

</style>
