<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <ul id="example-1">
      <li v-for="item in datas">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  data () {
    return {
      datas: [
        {
          id: 1,
          name: 'Dashboard'
        },
        {
          id: 2,
          name: 'Content'
        },
        {
          id: 3,
          name: 'Focus'
        }
      ]
    }
  }
}
</script>