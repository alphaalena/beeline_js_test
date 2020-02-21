<template>
  <div class="window">
    <input-component/>
    <message-component image-url="/images/he.svg" :text="getText()"/>
    <message-component image-url="/images/me.svg" is-mine :text="getText2()"/>
  </div>
</template>

<script>
import InputComponent from './InputComponent'
import MessageComponent from './MessageComponent'

export default {
  name: 'window-component',
  components: {
    InputComponent,
    MessageComponent
  },
  methods: {
    getText () {
      return 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах'
    },
    getText2 () {
      return 'Далеко-далеко'
    }
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
