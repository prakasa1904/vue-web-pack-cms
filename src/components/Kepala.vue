<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h1>{{ titl }}</h1>
      <h2>{{ desc }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kepala',
  data () {
    return {
      titl: 'Dashboard',
      desc: 'Welcome to my first stuff'
    }
  }
}
</script>