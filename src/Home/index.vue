<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>vant练习01</span>
          <router-link to="/vant01">vant练习01</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>vant练习02</span>
            <router-link to="/vant02">vant练习02</router-link>
          
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>vant练习03</span>
          <router-link to="/vant03">vant练习03</router-link>
        </a-menu-item>
         <a-menu-item key="4">
          <a-icon type="upload" />
          <span>ts学习</span>
          <router-link to="/ts">ts</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <!-- Content -->
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
   
  components: {
  },  
  data() {
    return {
      collapsed: false,
    };
  },

};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
