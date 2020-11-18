<style lang="css">
.tech-icons__item {
    width: 15px;
    position: relative;
}

.about-us__services{
 
  padding: 50px 20px;
}
.about-us__services .service-card {
    padding: 30px;
    border: 1px solid var(--color-grey-light);
    border-radius: 8px;
    max-width: 450px;
    min-height: 200px;
    margin: 20px;
    margin-bottom: 30px;
}
.about-us__services .service-card__header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.about-us__services .service-card__icon {
    width: 30px;
    height: 30px;
    margin-right: 15px;
}
.about-us__services .service-card__icon img {
    display: block;
    width: 100%;
}
.about-us__services .service-card__title {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
}
.about-us__services .service-card__content {
    font-size: 14px;
    font-weight: 400;
    margin-left: 50px;
    text-align: left;
}
.about-us__services .service-card__post{
  color: grey;
}


.pic-ctn {
  width: 100vw;
  height: 200px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 100vw;
  height: 300px;
  margin-bottom: 15vh;
}

.pic-ctn > .pic {
  position: absolute;
  top: 0;
  left: calc(25% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

.pic:nth-child(1) {
  animation-delay: 2s;
}
.pic:nth-child(2) {
  animation-delay: 4s;
}

</style>
<template>
  <div class="container-custom">
    <div class="home">
      <div class="row middle-xs home__hero">
        <div class="col-xs-12 col-md-6">
          <div class="home__hero-heading">Do you want to grow your bussiness.</div>
          <div class="home__hero-subheading">We will help you with that.</div>
          <div class="home__hero-para">
            Here at I Network Technologies we aspire to help you and work with to bring your dream business to a new heights
          </div>
          <button class="home-cta" @click="$router.push('/contact')">
            Get In Contact With Our Team
            <img src="~@/assets/icon/arrow-right.svg" alt="">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="home__hero-illustration">
            <img src="~@/assets/illustrations/IllustrationHero.svg" alt="">
          </div>
        </div>
      </div>

      <div class="home__invitation">
        <div class="home__invitation-heading">Build Your Bussiness with us</div>
        <div class="home__invitation-subheading">
          Bring your bussiness online with us. Lets us take casre of all the hard stuff and you focus on expanding your  bissiness. We specialize in building websites, mobile applications and SEO optimization so that you always stay ahead in the market.
        </div>
        <button class="home-cta" @click="$router.push('/contact')">Get In Contact With Our Sales</button>
      </div>

     
      <div class="home-tech flex flex-row justify-between items-center mx-auto m-t-6">
        <div class="home-tech--item"><img src="~@/assets/icon/amazonaws.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/css3.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/googlecloud.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/html5.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/javascript.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/node-dot-js.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/react.svg" alt=""></div>
      </div>
      
      <div class="home-tech flex flex-row justify-between items-center mx-auto m-t-6 m-b-h">
        <div class="home-tech--item"><img src="~@/assets/icon/mysql.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/vue-dot-js.svg" alt=""></div>
         <div class="home-tech--item"><img src="~@/assets/icon/php.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/django.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/angular.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/android.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/bootstrap.svg" alt=""></div>
        
      </div>

      <section class="home-section home-section--webdev row middle-xs">
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Web Development</div>
          <div class="home-section__heading">Want a website for your business or yourself</div>
          <div class="home-section__description">
            Having an online presence in todays time is a must if you want your business or brand to grow and reach large amount customer base. Tell us what you want and we will hook you up with the best you can get.
          </div>
          <button class="home-cta" @click="$router.push('/website-development')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/IllustrationWebDevelopment.svg" alt="" class="home-section__illustration">
        </div>
      </section>

      <section class="home-section home-section--appdev row middle-xs">
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/IllustrationApplicationDevelopment.svg" alt="" class="home-section__illustration">
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">App Development</div>
          <div class="home-section__heading">You have a revolutionary idea for an application.</div>
          <div class="home-section__description">
            Mobile applications are a great way to get close to your customers and always be in reach. Tell us what you want and let our team of experts handle the rest.
          </div>
          <button class="home-cta" @click="$router.push('/application-development')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
      </section>

      <section class="home-section home-section--seo row middle-xs">
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">SEO Optimization</div>
          <div class="home-section__heading">Your website is not getting the attention you want.</div>
          <div class="home-section__description">
            <p>
              Having a website is just half of the work other half is bringing traffic to it. SEO is one of the most important thing to make your website shine in a sea of other websites.
            </p>
            <p>
              Our team of experts will help to make your site visible to the masses and bring traffic.
            </p>
          </div>
          <button class="home-cta" @click="$router.push('/search-engine-optimization')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/IllustrationSEO.svg" alt="" class="home-section__illustration">
        </div>
      </section>

      <section class="home-section home-section--webdesign row middle-xs">
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/IllustrationWebDesign.svg" alt="" class="home-section__illustration">
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Web & Graphic Design</div>
          <div class="home-section__heading">want a beautiful website or an eye catching graphic</div>
          <div class="home-section__description">
            Having a beautiful and good looking website draws attention and make your look professional and trust worthy. Or team strives to delivery the best we can and bring you ahead of the crowd.
          </div>
          <button class="home-cta" @click="$router.push('/website-design')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
      </section>

       <section class="home-section home-section--seo row middle-xs">
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Social Media Marketing</div>
          <div class="home-section__heading">Want to reach out to people to promote your new business</div>
          <div class="home-section__description">
            <p>
              Get to your target crowd through various social media platforms to promote your new business or products. </p>
          </div>
          <button class="home-cta" @click="$router.push('/social-media-marketing')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/social-media-marketing.svg" alt="" class="home-section__illustration">
        </div>
      </section>

       <section class="home-section home-section--webdesign row middle-xs">
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/website-maintainence.svg" alt="" class="home-section__illustration">
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Website Maintenance</div>
          <div class="home-section__heading">Want to keep your website up-to-date.</div>
          <div class="home-section__description">
           As time passes by old website goes obsolete as new technologies emerges, or you may need a new feature. We specialize in updating the existing websites and bringing them to current standards in both performance and security. </div>
          <button class="home-cta" @click="$router.push('/website-maintenance')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
      </section>

  <section class="home-section home-section--seo row middle-xs">
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Databases</div>
          <div class="home-section__heading">Don't want to deal with the hassle of managing databases.</div>
          <div class="home-section__description">
            <p>
             Managing a large amount of data and large number of databases can become quite cumbersome some times. Lets us our inhouse team of database experts takes care of it. </p>
          </div>
          <button class="home-cta" @click="$router.push('/databases')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/database.svg" alt="" class="home-section__illustration">
        </div>
      </section>

      <section class="home-section home-section--webdesign row middle-xs">
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/scraping.svg" alt="" class="home-section__illustration">
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Web Scraping</div>
          <div class="home-section__heading">Want to keep your website up-to-date.</div>
          <div class="home-section__description">
           As time passes by old website goes obsolete as new technologies emerges, or you may need a new feature. We specialize in updating the existing websites and bringing them to current standards in both performance and security. </div>
          <button class="home-cta" @click="$router.push('/web-scraping')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
      </section>

       <section class="home-section home-section--seo row middle-xs">
        <div class="col-xs-12 col-md-6">
          <div class="home-section__service">Content Writing </div>
          <div class="home-section__heading">Want to make a content which speaks about your business</div>
          <div class="home-section__description">
           INetwork Hub is one amongst the foremost    distinguished    content writing firms that cater to many international shoppers. Our proficiency and brilliance also make us a leading content writing service provider in India.
           </div>
          <button class="home-cta" @click="$router.push('/content-writing')">Know More
            <img src="~@/assets/icon/arrow-right.svg" alt="arrow right">
          </button>
        </div>
        <div class="col-xs-12 col-md-6">
          <img src="~@/assets/illustrations/content-writing.svg" alt="" class="home-section__illustration">
        </div>
      </section>

      <section class="home__bottom mx-auto">
        <div class="home__bottom-heading mx-auto">Still not sure what is right for your bussiness</div>
        <div class="home__bottom-subheading max-auto">Get in touch with our team of experts and we will let you know what is best for bussiness</div>
        <button class="home-cta mx-auto" @click="$router.push('/contact')">Get In Contact With Our Team
          <img src="~@/assets/icon/arrow-right.svg" alt="">
        </button>
      </section>
    </div>


<center>
  <div class="home__bottom-heading mx-auto">What People Say About Us!</div>
  <button class="home-cta mx-auto" @click="$router.push('/testimonials')">View All 
          <img src="~@/assets/icon/arrow-right.svg" alt="">
        </button>
    <div class="pic-ctn">
      <div class="pic">
        <div class="home__bottom m-t-6 mx-auto ">
        <div class="home__bottom-subheading max-auto">"Really appreciated the work done by you, Super-fast and efficient scraping project results, these guys are phenomenal to work with. I feel that they bend over backwards to help you. Highly recommend INetwork Hub."</div>
          <div class="profile">
          <img src="~@/assets/images/21-512.png" alt="">
          </div>
          <div class="quote">
            <img src="~@/assets/icon/quote-left-solid.png" alt="">
          </div>
        
        <div class="name">Mr. Tim Warren </div> 
        <div class="post">Marketing Head – Discount fiber (US) </div>
    
     
      </div>
      </div>
      <div class="pic">
        <div class="home__bottom m-t-6 mx-auto ">
        <div class="home__bottom-subheading max-auto">"Highly professional brand development with their design and implementation...very strategic, creative and engaged. I highly recommend them as a part of structuring development team of your new business or project"</div>
          <div class="profile">
          <img src="~@/assets/images/patidar.jpeg" alt="">
          </div>
          <div class="quote">
            <img src="~@/assets/icon/quote-left-solid.png" alt="">
          </div>
        
        <div class="name">Mr. Priyank Patidar  </div> 
        <div class="post">SDE – Amagi Media Labs </div>
    
     
      </div>
      </div>
      <div class="pic">
        <div class="home__bottom m-t-6 mx-auto ">
        <div class="home__bottom-subheading max-auto">"It’s a complete satisfaction to work with you guys. I am very much impressed by the quality you have provided for my website. I founded its very creative & modern. I will suggest all to work with you guys! Appreciate and good luck for INetwork Hub Team."</div>
          <div class="profile">
          <img src="~@/assets/images/21-512.png" alt="">
          </div>
          <div class="quote">
            <img src="~@/assets/icon/quote-left-solid.png" alt="">
          </div>
        
        <div class="name">Mr. Bharat Dhakad </div> 
        <div class="post">Founder- Trinity Real Estate </div>
    
     
      </div>
      </div>
      
    
  </div>
  
  </center>
   
  </div>

</template>


<script>
export default {
  name: 'home'
}
</script>

<style lang="sass">
.home
  color: var(--text-primary)
  &__hero
    min-height: calc(100vh - 200px)
    @media (min-width: 760px)
      min-height: 550px
    @media (min-width: 760px)
      min-height: 600px
    &-heading
      font-size: 32px
      font-weight: var(--weight-black)
    &-subheading
      margin-top: 15px
      font-size: 18px
      font-weight: var(--weight-medium)
    &-para
      max-width: 550px
      margin-top: 30px
      line-height: 26px
      font-size: 14px
      font-weight: var(--weight-regular)
    &-illustration
      width: 650px
      position: absolute
      top: 0
      right: 0
      img
        display: none
        width: 100%
        height: auto
        background-size: contain
    @media (min-width: 760px)
      &-heading
        font-size: 40px
      &-subheading
        font-size: 20px
      &-para
        font-size: 16px
      &-illustration
        img
          display: block
    @media (min-width: 1400px)
      &-heading
        font-size: 54px
      &-subheading
        font-size: 24px
      &-para
        font-size: 18px
      &-illustration
        width: auto

  //---------------------------------------------------//
  &-cta
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border: none
    font-size: var(--font-sm)
    font-weight: var(--weight-medium)
    color: var(--color-white)
    background-color: var(--color-primary)
    margin-top: 30px
    padding: var(--p-2) var(--p-3)
    border-radius: var(--radius-small)
    cursor: pointer
    img
      display: block
      width: 45px
      margin-left: 15px
      transition: all var(--t-fast)
    &:hover
      img
        margin-left: 30px

  //---------------------------------------------------//
  &__invitation
    padding: 50px 0
    display: flex
    flex-direction: column
    align-items: center

    // @media (min-width: 760px)
      

    &-heading
      font-size: var(--font-xxl)
      font-weight: var(--weight-bold)
      margin-bottom: 15px
      text-align: center
    &-subheading
      max-width: 700px
      text-align: center
      font-size: var(--font-lg)
      font-weight: var(--weight-regular)
      line-height: 26px

  //--------------------------------------------------//
  &-tech
    width: 100%
    @media (min-width: 1366px)
      width: 1000px
    
    &--item
      width: 15px
      @media (min-width: 760px)
        width: 25px
      @media (min-width: 1366px)
        width: 40px
      img
        display: block
        width: 100%
        height: auto
        background-size: contain
      img:hover
        cursor: pointer
          

  //-------------------------------------------------//
  &-section
    padding-bottom: 150px

    &__illustration
      display: block
      width: 100%
      margin-bottom: 50px
      @media (min-width: 760px)
        width: 400px
      @media (min-width: 1400px)
        width: auto
    &__service
      max-width: 350px
      font-size: var(--font-xl)
      font-weight: var(--weight-bold)
      color: var(--color-primary)
      margin-bottom: 30px
    &__heading
      max-width: 550px
      font-size: var(--font-xxl)
      font-weight: var(--weight-bold)
      margin-bottom: 15px
    &__description
      line-height: 26px
      max-width: 550px
      font-size: var(--font-lg)
      font-weight: var(--weight-regular)
      margin-bottom: 15px

    @media (max-width: 760px)
      &--webdev,
      &--seo
        flex-direction: column-reverse

  //-----------------------------------------------//
  &__bottom
    padding-bottom: 150px
    max-width: 600px
    position: relative
    &-heading
      text-align: center
      font-size: var(--font-xxl)
      font-weight: var(--weight-bold)
      margin-bottom: 15px
    &-subheading
      margin-bottom: 30px
      text-align: center
      font-size: var(--font-lg)
  //-----------------------------------------------//

.profile
  width: 150px
  height: 150px
  padding: 20px
  display: flex
  align-items: center
  justify-content: center


  img
    position: absolute
    width: 120px
    height: 120px
    border: 5px solid #fff
    border-radius: 50%  
.quote
  width: 40px
  height: 40px
  border-radius: 50%  
  background-color: #0957EA
  padding: 10px
  position: absolute
  top: 33%
  left: 55%
  img
    width: 20px
    height: 20px
.name
  font-weight: bold
  font-size: 18px
  padding-top: 10px 

.post
  font-weight: lighter
  font-size: 14px
  padding-top: 10px
</style>
