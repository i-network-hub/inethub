<style lang="css">
  .footer-social{
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.footer-social a{
    display: block;
    padding: 10px;
    padding-left: 0;
    cursor: pointer;
    
}
.footer-social a img{
  width: 20px;
  height: 20px;
}

</style>
<template>
  <footer class="footer">
    <div class="container-custom mx-auto">
      <div class="footer-logo"  @click="$router.push('/')">
        <img src="~@/assets/icon/logonew.svg" alt="">
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="footer-address">
            <span class="footer-heading">Get in touch with us</span>
            <span> <a href="mailto:contactinetworkhub@gmail.com">  contactinetworkhub@gmail.com</a></span>
            <span> <a href="tel:+ 83194 32026"> +91 83194 32026</a></span>
            <span><a href="tel:+ 7000318920">+91 7000 318920</a></span>
          </div>
          <div  class="footer-social">
            <a  target="blank" href="https://www.instagram.com/inetwork_hub/">
            <img  src="~@/assets/icon/instagram-alt.5729f3d9.svg" alt=""></a>
            <a  target="blank" href="https://www.facebook.com/InetworkHub/">
            <img  src="~@/assets/icon/facebook-alt.3bc301d5.svg" alt=""></a>
            <a  target="blank" href="https://twitter.com/INetworkHub1">
            <img  src="~@/assets/icon/twitter-alt.13e38b2c.svg" alt=""></a>
            <a  target="blank" href="https://www.linkedin.com/in/inetwork-hub-3564461a0/">
            <img  src="~@/assets/icon/linkedin-alt.9c2393c2.svg" alt=""></a>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="row">
            <div class="col-xs-4">
              <span class="footer-heading">Services</span>
              <router-link to="/website-development">Web Development</router-link>
              <router-link to="/website-design">Web Design</router-link>
              <router-link to="/application-development">App Development</router-link>
              <router-link to="/search-engine-optimization">SEO Optimization</router-link>
               <router-link to="/social-media-marketing">Social Media Marketing</router-link>
              <router-link to="/website-maintenance">Website Maintenance </router-link>
              <router-link to="/databases">Databases </router-link>
              <router-link to="/web-scraping">Web Scraping</router-link>
              <router-link to="/content-writing">Content Writing</router-link>
            </div>
            <div class="col-xs-4">
              <span class="footer-heading">Company</span>
              <span @click="$router.push('/about')">About Us</span>
              <span @click="$router.push('/policy')">Policy</span>
            </div>
            <div class="col-xs-4">
              <span class="footer-heading">Help</span>
              <span @click="$router.push('/contact')">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="footer-subheading">@ INetwork Hub 2019. All Rights Reserved.</div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="footer-subheading">
            <span @click="$router.push('/terms-conditions')">Terms & Conditions</span>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
.footer
  width: 100vw
  padding-bottom: 50px
  span, a
    display: block
    margin-bottom: 10px
    font-size: var(--font-sm)
    cursor: pointer
    color: var(--color-black)
  &-logo
    width: 100px
    margin-bottom: 50px
    img
      display: block
      width: 100%
      height: auto
      background-size: contain
    @media (min-width: 760px)
      width: 150px

  &-heading
    font-size: var(--font-lg)
    font-weight: var(--weight-bold)
    margin-bottom: 15px !important
    cursor: auto !important
  &-subheading
    cursor: auto !important
    margin-top: 30px
    font-size: var(--font-sm)
    font-weight: var(--weight-bold)
    span
      display: inline-block
      margin-right: 30px

.footer-social 
  
  cursor: pointer   
 
         
</style>
