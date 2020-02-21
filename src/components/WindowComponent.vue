<template>
  <div class="window">
    <input-component/>
  </div>
</template>

<script>
import InputComponent from './InputComponent'

export default {
  name: 'window-component',
  components: {
    InputComponent
  }
}
</script>

<style lang="scss">
  .window {
    display: flex;
    flex-direction: column-reverse;
    max-width: 700px;
    min-height: 766px;
    border: 1px solid #EDEDED;
    border-radius: 37.5px;
    background-color: #282828;
    padding: 0 40px 40px 40px;
  }
</style>
