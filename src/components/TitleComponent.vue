<template>
  <h1 class="title">{{ title }}</h1>
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
  }
</style>
