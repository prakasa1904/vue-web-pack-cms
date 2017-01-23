<template>
  <div>
    <partone></partone>
    <parttwo></parttwo>
  </div>
</template>

<script>
import Partone from './partial/Partone'
import Parttwo from './partial/Parttwo'
export default {
  name: 'dashboard',
  components: {
    Partone, Parttwo
  },
  props: {
    content: {
      default: 'Dashboard'
    }
  }
}
</script>
