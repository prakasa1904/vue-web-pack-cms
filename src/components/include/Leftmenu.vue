<template>
  <div class="col-md-3 left_col">
    <div class="left_col scroll-view">
      <div class="navbar nav_title" style="border: 0;">
        <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>We're Electric</span></a>
      </div>
  
      <div class="clearfix"></div>
  
      <!-- menu profile quick info -->
      <div class="profile">
        <div class="profile_pic">
          <img src="./../../assets/logo.png" v-bind:alt="myName" class="img-circle profile_img">
        </div>
        <div class="profile_info">
          <span>Welcome,</span>
          <h2>{{ myName }}</h2>
        </div>
      </div>
      <!-- /menu profile quick info -->
      
      <!-- sidebar menu -->
      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section">
          <h3>General</h3>
          <ul class="nav side-menu">
            <li v-for="item in datas">
              <router-link :to="{ path: item.url.toLowerCase() }">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- /sidebar menu -->
  
      <!-- /menu footer buttons -->
      <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout">
          <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>
      <!-- /menu footer buttons -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  props: {
    myName: {
      default: 'Guest'
    }
  },
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