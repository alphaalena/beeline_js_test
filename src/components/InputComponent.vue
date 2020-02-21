<template>
  <div class="input">
    <label class="field-label">
      <input type="text" class="field">
    </label>
    <button class="send"/>
  </div>
</template>

<script>
export default {
  name: 'input-component'
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
</style>
