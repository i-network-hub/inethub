<template>
  <div>

    <div class="sidenav-backdrop" @click="closeSideMenuStateChanges()" :class="{ closing: closingState, closed: setClosingState() }">
    </div>
    
    <div class="menu" :class="{ active: isActive, closing: closingState, closed: setClosingState() }">
      <img src="@/assets/icon/close.svg" alt="close icon" @click="closeSideMenuStateChanges()">
      <router-link :to="'/'">
        <span @click="closeSideMenuStateChanges()">Home</span>
      </router-link>
      <router-link :to="'/about'">
        <span @click="closeSideMenuStateChanges()">About Us</span>
      </router-link>
      <router-link :to="'/portfolio'" @click="closeSideMenuStateChanges()">
        <span @click="closeSideMenuStateChanges()">Portfolio</span>
      </router-link>
      <div class="services" @click="servicesExpanded = !servicesExpanded">
        <span>Services</span>
        <img src="@/assets/icon/chevron-down.svg" alt="Toggle services menu">
        <transition name="slide">
          <div v-if="servicesExpanded">
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/services'">All Services</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/website-development'">Website Development</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/website-design'">Website Design</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/application-development'">Application Development</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/search-engine-optimization'">Search Engine Optimization</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/social-media-marketing'">Social Media Marketing</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/website-maintenance'">Website Maintenance</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/databases'">Databases</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/web-scraping'">Web Scraping</router-link></div>
            <div class="item" @click="closeSideMenuStateChanges()"><router-link :to="'/content-writing'">Content Writing</router-link></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheSideNav",
    data() {
      return {
        closedState: true,
        closingState: false,
        servicesExpanded: false,
      }
    },

    props: ["isActive"],

    methods: {
      closeSideMenu() {
        this.$emit("close");       
      },
      toggleClosingState() {
        const vm = this;
        setTimeout(() => {
          vm.closingState = false;
        }, 300);
      },
      toggleClosedState() {
        const vm = this;
        setTimeout(() => {
          return vm.isActive;
        }, 300);
      },
      setClosingState() {
        return !this.isActive && !this.closingState;
      },    
      closeSideMenuStateChanges() {
        this.closingState = true; 
        this.closeSideMenu(); 
        this.toggleClosingState(); 
        this.toggleClosedState();
      },
    }
  };
</script>

<style scoped>
  .menu {
    position: fixed;
    z-index: 1000;
    display: flex;
    right: -50vw;
    width: 70%;
    height: 100%;
    min-width: 180px;
    padding: 70px 30px;
    flex-direction: column;
    background-color: #fff;
    overflow-y: auto;
    animation-name: nav-slide;
    animation-duration: .3s;
    box-shadow: 0px 0 10px rgba(0, 0, 0, 1);
  }

  .menu img {
    position: absolute;
    top: 30px;
    right: 20px;
    height: 20px;
    width: 20px;
    z-index: 1999;
    cursor: pointer;
  }

  .menu.active {
    right: 0;
  }

  .menu.closing {
    animation-name: nav-slide-out;
    animation-duration: .3s;
  }

  .menu.closed {
    display: none;
  }

  @keyframes nav-slide {
    from{right: -100vw;}
    to{right: 0;}
  }

  @keyframes nav-slide-out {
    from{right: 0;}
    to{right: -100vw;}
  }

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    position: fixed;
    animation-name: backdrop-show;
    animation-duration: .3s;
  }

  .sidenav-backdrop.closing {
    animation-name: backdrop-fade;
    animation-duration: .3s;
  }

  @keyframes backdrop-show {
    from{opacity: 0}
    to{opacity: 100}
  }

  @keyframes backdrop-fade {
    from{opacity: 100}
    to{opacity: 0}
  }

  .sidenav-backdrop.closed {
    display: none;
  }
    
  .menu span {
    font-size: 16px;
    margin: 0 0 16px 0;
    color: black;
    display: block;
    padding: 10px;
    border-radius: 5px;
    cursor: ponter;
    font-weight: 700
  }

  .menu span:hover {
    background-color: #e2e2e2;
  }

  .menu a {
    text-decoration: none;
  }

  .services span {
    margin-bottom: 0;
  }

  .services div {
    width: 240px;
    height: 300px;
    position: relative;
    left: 20px;
  }

  .services img {
    width: 10px;
    height: 10px;
    display: inline-block;
    position: relative;
    left: 90px;
    top: -28px;
  }

  .services .item {
    width: auto;
    height: auto;
    padding: 8px;
  }

  .services a {
    color: black;
  }

</style>