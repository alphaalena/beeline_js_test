<template>
  <div class="message" :class="{ 'is-mine': isMine }">
    <img :src="imageUrl" alt="" class="avatar">
    <div class="text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-component',
  props: {
    imageUrl: String,
    text: String,
    isMine: Boolean
  }
}
</script>

<style lang="scss">
  .message {
    display: flex;
    min-height: 70px;
    margin-top: 30px;
    &.is-mine {
      .text {
        background-color: #F1F0F0;
      }
    }
  }
  .avatar {
    width: 70px;
    height: 70px;
    min-width: 70px;
    min-height: 70px;
    border-radius: 50%;
    background-color: #F1F0F0;
    margin-right: 20px;
  }
  .text {
    min-height: 70px;
    background-color: #F9C35B;
    border-radius: 35px;
    padding: 10px 15px;
    font-family: 'Halant', sans-serif;
  }
</style>
