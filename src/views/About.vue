<style lang="css">

.about-us__image {
    margin: 100px auto;
    overflow: hidden;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 16px -2px rgba(0,0,0,.25), 0 32px 32px -8px rgba(0,0,0,.14);
    box-shadow: 0 0 16px -2px rgba(0,0,0,.25), 0 32px 32px -8px rgba(0,0,0,.14);
    max-width: calc(100% - 40px);
}
.about-us__image img {
    display: block;
    width: 100%;
    height: auto;
}
.about-us__mission {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}
.about-us__mission h1 {
    margin-bottom: 30px;
}
.about-us__mission p {
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 15px;
    max-width: 650px;
    text-align: justify;
    line-height: 20px;
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
.about-us p {
    
    line-height: 20px;
}

</style>
<template>
  <div class="about-us container-custom">
    <div>
      <h1>About INetwork Hub</h1>
      <p>I Network Hub is a software development company specialized in providing world-class <br> applications and websites for all your business needs.</p>
    </div>


    <section class="about-us__image">
      <img src="~@/assets/images/about_img.jpg" alt="">
    </section>


      <div class="about-us__mission">
        <h1>We are on a mission to deliver world-class software.</h1>
        <p>We have a young team extremely qualified in computer code designer, developing, coming up with and digital selling. We have consultants in style and custom computer code development in enterprise solutions, web, and mobile applications. Each of our applications could be a combination of the most recent technologies.</p>

        <p>I Network Hub framework helps us to hurry up the project development method and cut back overall development prices. Our main goal is to form advanced computer code solutions that look fantastic and however area unit very easy to use. Our initial priority is to take care of sensible business relations with our correct work.</p>
      </div>

     <div class="about-tech flex flex-row justify-between items-center mx-auto m-t-h">
        <div class="home-tech--item"><img src="~@/assets/icon/amazonaws.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/css3.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/googlecloud.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/html5.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/javascript.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/node-dot-js.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/react.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/mysql.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/vue-dot-js.svg" alt=""></div>
         <div class="home-tech--item"><img src="~@/assets/icon/php.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/django.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/angular.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/android.svg" alt=""></div>
        <div class="home-tech--item"><img src="~@/assets/icon/bootstrap.svg" alt=""></div>
        
      </div>


    <div class="m-t-h">
      <h1>INetwork Hub</h1>
      <p>Analyzing needs, developing in keeping with your needs and more maintaining it.</p>
    </div>
    <div class="about-us__services">
      <div class="row">
        <div class="service-card">
          <div class="service-card__header">
            <div class="service-card__icon">
              <img src="~@/assets/icon/messages-bubble.9431a844.svg" alt="">
            </div>
            <div class="service-card__title">Discover</div>
          </div>
          <p class="service-card__content">The first step in coming up with a roaring application is to assemble info concerning the project.</p>
        </div>
          
            <div class="service-card">
              <div class="service-card__header">
                <div class="service-card__icon">
                  <img src="~@/assets/icon/delivered.39576ccb.svg" alt="">
                </div>
              <div class="service-card__title">Planing &amp; Proposal</div>
            </div>
            <p class="service-card__content">Using the knowledge gathered from part one, we tend to place along an entire project arrange for your project.</p>
            </div>
        </div>

         <div class="row">
        <div class="service-card">
          <div class="service-card__header">
            <div class="service-card__icon">
              <img src="~@/assets/icon/mountain.ec5fc7aa.svg" alt="">
            </div>
            <div class="service-card__title">UI/UX Styles</div>
          </div>
          <p class="service-card__content">We discuss along, exchange concepts till we tend to hit the ultimate coming up with of the project.</p>
        </div>
          
            <div class="service-card">
              <div class="service-card__header">
                <div class="service-card__icon">
                  <img src="~@/assets/icon/code.96cc8451.svg" alt="">
                </div>
              <div class="service-card__title">Software Development</div>
            </div>
            <p class="service-card__content">We produce custom code applications on prime of our framework to scale back the time interval and project overall price.</p>
            </div>
        </div>

         <div class="row">
        <div class="service-card">
          <div class="service-card__header">
            <div class="service-card__icon">
              <img src="~@/assets/icon/user-shield.2a37e21f.svg" alt="">
            </div>
            <div class="service-card__title">Testing & Delivery</div>
          </div>
          <p class="service-card__content">We take a look at your developed project so you will not face any downside in in operation it.</p>
        </div>
          
            <div class="service-card">
              <div class="service-card__header">
                <div class="service-card__icon">
                  <img src="~@/assets/icon/shield.eb07e5ce.svg" alt="">
                </div>
              <div class="service-card__title">Maintenance & Promotion</div>
            </div>
            <p class="service-card__content">Once the project is finished, our digital promoting consultants will assist you to legalize your resolution. we tend to conjointly supply maintenance packages at reduced rates and can monitor the health of your application.</p>
            </div>
        </div>
           <!--  </div><div class="about-us__services-row"><div class="service-card"><div class="service-card__header"><div class="service-card__icon"><img src="/img/mountain.ec5fc7aa.svg" alt=""></div><div class="service-card__title">UI/UX Styles</div></div><p class="service-card__content">We discuss along, exchange concepts till we tend to hit the ultimate coming up with of the project.</p></div><div class="service-card"><div class="service-card__header"><div class="service-card__icon"><img src="/img/code.96cc8451.svg" alt=""></div><div class="service-card__title">Software Development</div></div><p class="service-card__content">We produce custom code applications on prime of our framework to scale back the time interval and project overall price.</p></div></div><div class="about-us__services-row"><div class="service-card"><div class="service-card__header"><div class="service-card__icon"><img src="/img/user-shield.2a37e21f.svg" alt=""></div><div class="service-card__title">Testing &amp; Delivery</div></div><p class="service-card__content">We take a look at your developed project so you will not face any downside in in operation it.</p></div><div class="service-card"><div class="service-card__header"><div class="service-card__icon"><img src="/img/shield.eb07e5ce.svg" alt=""></div><div class="service-card__title">Maintenance &amp; Promotion</div></div><p class="service-card__content">Once the project is finished, our digital promoting consultants will assist you to legalize your resolution. we tend to conjointly supply maintenance packages at reduced rates and can monitor the health of your application.</p></div></div> -->
          
    </div>
       <section class="home__bottom mx-auto">
        <div class="home__bottom-heading mx-auto">Get in contact with our team</div>
        <button class="home-cta mx-auto" @click="$router.push('/contact')">Get In Contact With Our Team
          <img src="~@/assets/icon/arrow-right.svg" alt="">
        </button>
      </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="sass">
.about-us
  min-height: calc(100vh - 100px)

 
  h1
    margin-bottom: 16px
    text-align: center
    
  p
    text-align: center
    font-size: 14px
    margin-bottom: 16px
    font-weight: 200

  &__icons  
    width: 100%
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    padding: 30px 20px
    margin-top: 50px
    background-color: grey
    
    &-item
      width: 15px
      position: relative
      
      img 
        display: block
        width: 100%
        height: auto
        background-size: contain
        transition: all .24s ease-in-out

</style>
