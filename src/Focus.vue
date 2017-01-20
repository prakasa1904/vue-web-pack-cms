<template>
  <div class="col-xs-12 col-sm-6 col-md-8">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'focus',
  props: {
    content: {
      default: 'Focus'
    }
  }
}
</script>
