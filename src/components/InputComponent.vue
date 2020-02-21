<template>
  <div class="input">
    <label class="field-label">
      <input type="text" class="field" v-model="inputMessage" @keyup.enter="onButtonClick()">
    </label>
    <div v-if="botIsWriting" class="is-writing">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <button class="send" :disabled="inputMessage.length === 0" @click="onButtonClick()"/>
  </div>
</template>

<script>
export default {
  name: 'input-component',
  data () {
    return {
      inputMessage: '',
      botIsWriting: false,
      isSendStart: false,
      first: null,
      second: null
    }
  },
  methods: {
    botWriteText () {
      this.botIsWriting = true
    },
    sendText (text) {
      this.$emit('send', text)
    },
    botStopWritingText () {
      this.botIsWriting = false
    },
    botSendText (text) {
      this.botWriteText()
      setTimeout(() => {
        this.$emit('bot-send', text)
        this.botStopWritingText()
        this.scroll()
      }, 1200)
    },
    setNumbers (first, second) {
      this.first = first
      this.second = second
    },
    scroll () {
      setTimeout(() => {
        const messageArea = document.body.querySelector('.message-area')
        messageArea.scrollTop += 500
      }, 50)
    },
    onButtonClick () {
      let triggered = false
      const clear = () => (this.inputMessage = '')

      this.sendText(this.inputMessage)
      if (this.inputMessage === '/start') {
        this.isSendStart = true
        triggered = true
        this.botSendText('Привет, меня зовут Чат-бот, а как зовут тебя?».')
      }

      const s = this.isSendStart

      const nameMatch = this.inputMessage.match(/\/name: ?([a-zа-я]+)$/ui)
      if (nameMatch && s) {
        triggered = true
        this.botSendText(`Привет ${nameMatch[1]}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`)
      }

      const numMatch = this.inputMessage.match(/\/number: ?([0-9]+), ?([0-9]+)/)
      if (numMatch && s) {
        triggered = true
        this.setNumbers(numMatch[1], numMatch[2])
        this.botSendText('Введите действие: -, +, * или /')
        clear()
      }

      const operationMatch = this.inputMessage.match(/[-+*/]/)
      if (this.first !== null && this.second !== null && operationMatch && s) {
        triggered = true
        const printResult = (result) => {
          this.botSendText(`Результат равен "${result}"`)
          this.first = null
          this.second = null
        }
        if (operationMatch[0] === '-') {
          printResult(this.first - this.second)
        }
        if (operationMatch[0] === '+') {
          printResult(this.first + this.second)
        }
        if (operationMatch[0] === '*') {
          printResult(this.first * this.second)
        }
        if (operationMatch[0] === '/') {
          if (this.second === 0) {
            this.botSendText('На 0 делить нельзя!')
          } else {
            printResult(this.first / this.second)
          }
        }
      }

      if (this.inputMessage === '/stop' && s) {
        triggered = true
        this.botSendText('Всего доброго, если хочешь поговорить пиши /start')
        this.isSendStart = false
      }

      if (s === true && triggered === false) {
        this.botSendText('Я не понимаю, введите другую команду!')
      }

      if (s === false) {
        this.botSendText('Введите команду /start, для начала общения')
      }

      clear()
    }
  }
}
</script>

<style lang="scss">
  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: #F3F3F3;
    border-radius: 32px;
    padding: 14px 30px;
    position: relative;
    @media screen and (max-width: 375px) {
      border-radius: 0;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
  .send {
    background: url('../assets/svg/send.svg');
    width: 40px;
    height: 35px;
    transition: 0.5s;
    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%) contrast(20%);
    }
  }
  .field {
    background-color: #F3F3F3;
    border: none;
    outline: none;
    width: 100%;
    font-family: 'Halant', sans-serif;
    font-size: 20px;
    &-label {
      flex: 1;
      margin-right: 30px;
    }
  }
  $writingWidth: 50px;
  $writingHeight: 10px;

  @keyframes writing {
    0% {
      background-color: rgba(0, 0, 0, 0.33);
    }
    50% {
      background-color: rgba(0, 0, 0, 0.66);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.33);
    }
  }

  .is-writing {
    width: $writingWidth;
    height: $writingHeight;
    position: absolute;
    bottom: calc(50% - #{$writingHeight} / 2);
    left: calc(50% - #{$writingWidth} / 2);
    display: flex;
    & .dot {
      width: $writingHeight;
      height: $writingHeight;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.33);
      transition: 0.5s;
      animation: writing 1s infinite;
      &:not(:last-child) {
        margin-right: $writingHeight;
      }
    }
  }
</style>
