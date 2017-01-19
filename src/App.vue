<template>
  <div id="app" class="container">
    <kepala></kepala>
    <div class="row">
      <leftmenu></leftmenu>
    </div>
  </div>
</template>

<script>
import Kepala from './components/Kepala'
import Leftmenu from './components/Leftmenu'

export default {
  name: 'app',
  components: {
    Kepala, Leftmenu
  }
}
</script>
