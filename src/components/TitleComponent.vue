<template>
  <div class="title-wrapper">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'title-component',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .title {
    font-family: 'Halant', sans-serif;
    color: #FFFFFF;
    font-size: 58px;
    line-height: 91px;
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 32px;
      &-wrapper {
        height: 64px;
        padding: 17px 0 22px 20px;
        background: #282828;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
</style>
