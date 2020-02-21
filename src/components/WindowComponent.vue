<template>
  <div class="window">
    <input-component @send="sendMessage" @bot-send="sendBotMessage"/>
    <div class="message-area">
      <message-component v-for="message in messages" :key="message.id" :image-url="message.imageUrl" :is-mine="message.isMine" :text="message.text"/>
    </div>
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
  data () {
    return {
      messages: [],
      currentId: 0
    }
  },
  methods: {
    getMessages (count) {
      const messages = []
      for (let i = 0; i < count; i++) {
        messages.push({
          id: i,
          imageUrl: i % 2 === 0 ? '/images/he.svg' : '/images/me.svg',
          text: i % 2 === 0 ? 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах' : 'Далеко-далеко',
          isMine: i % 2 === 0
        })
      }
      return messages
    },
    sendMessage (text) {
      this.messages.push({
        id: this.currentId++,
        imageUrl: '/images/me.svg',
        isMine: true,
        text: text
      })
    },
    sendBotMessage (text) {
      this.messages.push({
        id: this.currentId++,
        imageUrl: '/images/he.svg',
        isMine: true,
        text: text
      })
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
    max-height: 766px;
    border: 1px solid #EDEDED;
    border-radius: 37.5px;
    background-color: #282828;
    padding: 0 40px 40px 40px;
    @media screen and (max-width: 375px) {
      border: none;
      flex: 1;
      padding: 0;
      max-height: none;
    }
  }
</style>
