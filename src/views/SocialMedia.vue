<template>
  <div class="web-dev container-custom">
    <div class="row web-dev__hero middle-xs">
      <div class="col-xs-12 col-md-6">
        <div class="web-dev__info">
          <h1>Social Media Marketing</h1>
         <p>Want to achieve additional customers and develop relationships that compel them to purchase? Social media promoting will facilitate. On this page, we’ll take a glance at why social media promoting is so vital and the way social media plans from previous town Interactive will facilitate your business grow. Keep reading if you wish to be told additional, and call I Network Hub to talk with a strategist!</p>
          <button class="home-cta" @click="$router.push('/contact')">
            Get In Contact With Our Sales
            <img src="~@/assets/icon/arrow-right.svg" alt="">
          </button>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="web-dev__illustration">
          <img src="~@/assets/illustrations/social-media-marketing.svg" alt="">
        </div>
      </div>
    </div>
    <br> <br><br>
     <div class="col-md-12" >
        <div class="social-media">
           <h1 class="text-center">Our Offerings</h1>
            <div class="row">
            <div class="col-md-4 social-media__list ">
                <h3>Online Marketing</h3>
                <p>Online marketing and social media marketing are used in combination with traditional types such as advertising on radio, television, magazines, and newspapers.</p>
            </div>
            <div class="col-md-4 social-media__list">
                <h3>Web Marketing</h3>
                <p>Web marketing includes e-commerce Web sites, promotional Web sites, informative Web sites, online advertising.</p>
            </div>
            <div class="col-md-4 social-media__list">
                <h3>Email Marketing</h3>
                <p>Email marketing involves messaging to the customers which include both promotional and advertising.</p>
            </div>
            </div>    
        </div>
        <div class="social-media__info ">
            <h3 class=" m-t-6 ">Why do I need social media marketing ?</h3>
            
            <p>Two billion individuals across the world square measure victimization social media. individuals of all ages, genders, locations, and ethnicities square measure on social media. This creates a good market chance as a result of there’s a decent probability that a minimum of some of your audience uses social media.
            </p>
            <p>The most fashionable platforms square measure Facebook, Twitter, Instagram, Pinterest, and LinkedIn. Some individuals square measure solely on one platform, whereas others square measure on nearly every platform.
            </p> 
            <p>
            Imagine that your target market is women, who are 40-55, with families. If you’re trying to reach them through advertisement, what would you do? If you took the standard advertising route, you will place up an advert in hopes that they might drive past it. you'd pay all that money on a billboard with no guarantee that the folks that see it square measure a part of your target market.
            </p> 
            <p>
            However, social media permits you to make specific advertisements that square measure tailored to gender, language, location, age, and interests. you'll hone in on your audience and avoid advertising to folks that won’t have an interest in your product or service.
            </p> 
            <p>
            When you’re on social media, you produce an association between your business and your target market. Social media permits you to move with customers and answer their queries. If somebody is puzzling over finance in your product or service, they’re possibly attending to consider your social media pages.
            </p> 
            <p>
            They want to visualize however you move with customers and consider your reviews. If your business maintains a positive, informative presence on social media, individuals can feel a lot of assured in their call to figure with you.</p>
          </div>
           <div class="social-media__info__two ">
            <h3 class=" m-t-6">How do I know what’s right for my business ?</h3>
            <p class="col-md-8">If you’ve checked out alternative social promoting corporations in I Network Hub, you may be unsure as to who the most effective package for your business.</p>
          </div>
             <div class="social-media__info__two ">
            <h3 class="text-center m-t-6">You’ll keep your budget in mind. what quantity of your promoting budget are you able to pay on social media ?</h3>
            <p>Once you recognize what quantity you'll be able to pay, you’ll wish to appear for the bureau that will quality work. you wish bureau which will build the expertise regarding you and your business.
           <p>
            There square measure many agencies which will supply low-cost rates, however that doesn’t mean they provide nice quality. you wish to choose the bureau that offers you sensible quality and knowledge for the value you're paying.
            </p>
            <p>
            At recent town Interactive, we offer you quality services through our clear rating. We’ll tell you specifically wherever your cash goes and what we tend to do to assist your business.
            </p>
            </div>
             <div class="social-media__info__two ">
            <h3 class=" m-t-6" > Ready to start using social media marketing ?</h3>
            <p class="col-md-8">If you’re able to begin victimization social media selling, look no additional than recent town Interactive. We area unit a full-service digital selling company that will assist you with all aspects of your on-line selling campaigns. Contact I Network Hub these days to talk with strategies. we glance forward to operating with you!</p>
            </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia'
}
</script>
<style lang="sass">
.social-media
  display: flex
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  flex-direction: column

  &__list
    padding: 20px
    h3
      text-align: center
    p
      text-align: justify
      font-size: 14px

  &__info
    max-width: 800px
    margin: 0 auto
    text-align: center
    
    h3
      text-align: center
      font-size: 18px

    p
      max-width: 500px
      text-align: justify
      margin: 16px auto
      line-height: 18px 
      font-size: 14px

    &__two
      h3
        text-align: center
        padding: 0px
        margin: 60px auto 30px auto
        font-size: 18px
        
      p
        max-width: 500px
        text-align: justify
        margin: 16px auto
        line-height: 18px
        font-size: 14px

</style>