<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <ul v-bind:id="id">
      <li v-for="item in datas">
        <router-link :to="{ path: item.url.toLowerCase() }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  data () {
    return {
      id: 'left-menu',
      datas: [
        {
          id: 1,
          name: 'Dashboard',
          url: '/'
        },
        {
          id: 2,
          name: 'Content',
          url: 'content'
        },
        {
          id: 3,
          name: 'Focus',
          url: 'focus'
        }
      ]
    }
  }
}
</script>