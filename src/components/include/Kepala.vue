<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h1>{{ myTitle }}</h1>
      <h2>{{ myDesc }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kepala',
  props: {
    myTitle: {
      default: 'Dashboard'
    },
    myDesc: {
      default: 'Welcome to my first stuff'
    }
  }
}
</script>