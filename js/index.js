let scrollIndicator=document.querySelector(".header .scroll-indicator")
// articleSection
let articleSection= document.getElementById("articles")
let articlesCards=document.querySelectorAll(".article .card")
let articleTitle=document.querySelector(".article .head")
// gallery
let gallerySection= document.getElementById("gallery")
let galleryCards=document.querySelectorAll(".gallery .card")
let galleryTitle=document.querySelector(".gallery .head")
// features
let featuresSection= document.getElementById("features")
let featuresTitle=document.querySelector(".features .head")
let featuresCards=document.querySelectorAll(".features .card")
let featuresLeft=document.querySelector(".features .one")
let featuresCenter=document.querySelector(".features .two")
let featuresrRight=document.querySelector(".features .three")
// testmonialsSection
let testmonialsSection= document.getElementById("testmonials")
let testmonialsCards=document.querySelectorAll(".testmonials .card")
let testmonialsTitle=document.querySelector(".testmonials .head")
// testmonialsSection
let teamMembersSection= document.getElementById("team-members")
let teamMembersCards=document.querySelectorAll(".team-members .card")
let teamMembersTitle=document.querySelector(".team-members .head")
// servicesSection
let servicesSection= document.getElementById("services")
let servicesCards=document.querySelectorAll(".services .card")
let servicesTitle=document.querySelector(".services .head")
// ourSkillSection
let ourSkillSection = document.getElementById("our-skills")
let skillsSpans=[...document.getElementsByClassName("skill")]
let skillsTitle=document.querySelector(".our-skills .head")
// howItWorksSection
let howItWorksSection= document.getElementById("how-it-works")
let howItWorksTitle=document.querySelector(".how-it-works .head")
let howItWorksCards=document.querySelectorAll(".how-it-works .box")
// eventsSection
let eventsSection= document.getElementById("events")
let eventsTitle=document.querySelector(".latest-events .head")
let eventDays=document.querySelector(".days-no")
let eventHours=document.querySelector(".hours-no")
let eventMinutes=document.querySelector(".minutes-no")
let eventSeconds=document.querySelector(".Seconds-no")
let startCounter=false
// pricingSection
let pricingSection= document.getElementById("pricing")
let pricingTitle=document.querySelector(".pricing .head")
let pricingCards=document.querySelectorAll(".pricing .card")
let pricingLeft=document.querySelector(".pricing .card.one")
let pricingCenter=document.querySelector(".pricing .card.two")
let pricingRight=document.querySelector(".pricing .card.three")
// videosSection
let videosSection= document.getElementById("videos")
let videosTitle=document.querySelector(".top-videos .head")
// statsSection
let statsSection= document.getElementById("stats")
let statsNumber=document.querySelectorAll(".stats .number")
let statsCards=document.querySelectorAll(".stats .box")
let started=false
// discountSection
let discountSection= document.getElementById("discount")
// footerSection
let footerSection= document.getElementById("footer")

let galleryCardsone=document.getElementById("galleryone")
let galleryCardstwo=document.getElementById("gallerytwo")
let galleryCardsthree=document.getElementById("gallerythree")
let galleryCardsfour=document.getElementById("galleryfour")
let galleryCardsfive=document.getElementById("galleryfive")
let galleryCardssix=document.getElementById("gallerysix")
let teamone=document.getElementById("teamone")
let leftArea=document.getElementById("left-area")
let ScrollingY=window.scrollY+window.innerHeight-300

// animationDelay
function delayAnimation (arr,...moveDirection){
    let delay=.5
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.classList.add(...moveDirection)
        element.style.animationDelay=`${delay}s`
        delay+=.2   
    }
}
// numberCounterIncreasing
 function counterIncrease(element){
    let goal=element.dataset.stat;
    let count= setInterval(
        ()=>{
        element.textContent++
        if(element.textContent==goal){
            clearInterval(count)
        }
    }, 1000 / goal )
}
// dayCountDown
    function getDaysTillYearEnds(){
        let countDownDate=new Date("Dec 31, 2023 23:59:59").getTime()
        let dateDiffInterval=setInterval(() => {
            let dateNow=new Date().getTime();
            let dateDiff=countDownDate-dateNow
            let days=Math.floor(dateDiff/1000/60/60/24)
            let hours=Math.floor((dateDiff % (1000*60*60*24))/1000/60/60)
            let minutes=Math.floor((dateDiff % (1000*60*60))/1000/60)
            let seconds=Math.floor((dateDiff % (1000*60)) /1000)
            eventDays.textContent=days
            eventHours.textContent=hours
            eventMinutes.textContent=minutes
            eventSeconds.innerHTML=seconds
            if(dateDiff<0){
                clearInterval(dateDiffInterval)
            }
        }, 1000);
    }
    getDaysTillYearEnds()
// fadeUpIn
 window.addEventListener("scroll",()=>{
    ScrollingY=window.scrollY+window.innerHeight-300
    if(ScrollingY>articleSection.offsetTop)
    {articleSection.classList.add("animate__animated","animate__fadeInUp")
    articleTitle.classList.add("turnon")
    delayAnimation (articlesCards,"animate__animated","animate__fadeInUp")
}
    if(ScrollingY>gallerySection.offsetTop)
{
    gallerySection.classList.add("animate__animated","animate__fadeInUp")
    galleryTitle.classList.add("turnon")
    delayAnimation (galleryCards,"animate__animated","animate__fadeInUp")
}
    if(ScrollingY>featuresSection.offsetTop-300+featuresSection.offsetHeight/2)
{
    featuresSection.classList.add("animate__animated","animate__fadeInUp")
    featuresTitle.classList.add("turnon")
    featuresLeft.classList.add("animate__animated","animate__bounceInRight")
    featuresCenter.classList.add("animate__animated","animate__fadeInUp")
    featuresrRight.classList.add("animate__animated","animate__bounceInLeft")
}
if(ScrollingY>featuresSection.offsetTop)
{
    featuresTitle.classList.add("turnonmobile")
}
    if(ScrollingY>testmonialsSection.offsetTop)
{
    testmonialsSection.classList.add("animate__animated","animate__fadeInUp")
    testmonialsTitle.classList.add("turnon")
    delayAnimation(testmonialsCards,"animate__animated","animate__fadeInUp")
}
    if(ScrollingY>teamMembersSection.offsetTop)
{
    teamMembersSection.classList.add("animate__animated","animate__fadeInUp")
    teamMembersTitle.classList.add("turnon")
    delayAnimation (teamMembersCards,"animate__animated","animate__bounceInRight")
}
    if(ScrollingY>servicesSection.offsetTop)
{
    servicesSection.classList.add("animate__animated","animate__fadeInUp")
    servicesTitle.classList.add("turnon")
    delayAnimation (servicesCards,"animate__animated","animate__fadeInUp")
}
    if(ScrollingY>ourSkillSection.offsetTop)
{
    ourSkillSection.classList.add("animate__animated","animate__fadeInUp")
    skillsTitle.classList.add("turnon")
    skillsSpans.forEach((el)=>{
    el.style.width=el.dataset.progress
    })
}
    if(ScrollingY>howItWorksSection.offsetTop)
{
    howItWorksSection.classList.add("animate__animated","animate__fadeInUp")
    howItWorksTitle.classList.add("turnon")
}
    if(ScrollingY>eventsSection.offsetTop)
{
    eventsSection.classList.add("animate__animated","animate__fadeInUp")
    eventsTitle.classList.add("turnon")
}
    if(ScrollingY>pricingSection.offsetTop-300 + pricingSection.offsetHeight/2)
{
    pricingSection.classList.add("animate__animated","animate__fadeInUp")
    pricingTitle.classList.add("turnon")
    pricingLeft.classList.add("animate__animated","animate__bounceInRight")
    pricingCenter.classList.add("animate__animated","animate__fadeInUp")
    pricingRight.classList.add("animate__animated","animate__bounceInLeft")
}
if(ScrollingY>pricingSection.offsetTop)
{
    pricingTitle.classList.add("turnonmobile")
}

    if(ScrollingY>videosSection.offsetTop)
{
    videosSection.classList.add("animate__animated","animate__fadeInUp")
    videosTitle.classList.add("turnon")
}
    if(ScrollingY>statsSection.offsetTop)
{
    statsSection.classList.add("animate__animated","animate__fadeInUp")
    if(!started){
        statsNumber.forEach(element=>counterIncrease(element))
        started=true
    }
}

    if(ScrollingY>discountSection.offsetTop)
{
    discountSection.classList.add("animate__animated","animate__fadeInUp")

}
    if(ScrollingY>footerSection.offsetTop)
{
    footerSection.classList.add("animate__animated","animate__fadeInUp")

}
scrollIndicator.style.width=`${(scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100}%`
})

// mobileAnimation
function addingHoverEffect(element,offset){
    if(scrollY>offset+element.offsetHeight-window.innerHeight&&scrollY<offset+element.offsetHeight*2-window.innerHeight){
        element.classList.add("hover")
    }
    else {element.classList.remove("hover")
}
}
// gettingOffsetTop
const getOffsetTop = element => {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop
  }

  window.addEventListener("scroll",()=>{
    articlesCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    galleryCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    featuresCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    teamMembersCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    servicesCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    howItWorksCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    pricingCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
    statsCards.forEach(card =>addingHoverEffect(card,getOffsetTop(card)));
})

let blob1=document.querySelector("#blob1")
let blob2=document.querySelector("#blob2")
var tween = KUTE.fromTo(
    blob1,                  
        {path:blob1},               
        {path:blob2},               
        {repeat:999,duration:3000,yoyo:true}               
    );
    tween.start()