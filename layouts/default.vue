<template>
    <div class="leading-normal tracking-normal text-white gradient" style="font-family:'Source Sans Pro', sans-serif;">
        <!--Nav-->
        <header>
            <nav id="header" class="fixed w-full z-30 top-0 text-white">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div class="pl-4 flex items-center">
                    <a class="flex toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <!--Icon from: http://www.potlabicons.com/ -->
                        <!--
                        <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                        <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                        <path
                            class="plane-take-off"
                            d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                        />
                        </svg>
                        -->
                        <img class="h-12 pr-4"  src="img/AVSolutions_Logo.png" alt="">A. V. SOLUTIONS
                    </a>
                    </div>
                    <div class="block lg:hidden pr-4">
                    <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" @click="toggleMenu($event)">
                        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                    </div>
                    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="mr-3">
                        <!--<a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Home</a>-->
                        <NuxtLink class="inline-block py-2 px-4 text-black font-bold no-underline" to ="/">Home</NuxtLink>
                        </li>
                        <li class="mr-3">
                        <!--<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Services</a>-->
                        <NuxtLink class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to ="/services">Services</NuxtLink>
                        </li>
                        <li class="mr-3">
                        <!--<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Products</a>-->
                        <NuxtLink class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to ="/products">Products</NuxtLink>
                        </li>
                        <li class="mr-3">
                        <!--<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">About Us</a>-->
                        <NuxtLink class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to ="/about">About Us</NuxtLink>
                        </li>
                        <li class="mr-3">
                        <!--<a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Contact Us</a>-->
                        <NuxtLink class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to ="/contact">Contact Us</NuxtLink>
                        </li>
                    </ul>
                    <button
                        id="navAction"
                        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        @click="signUp()"
                    >
                        Sign Up
                    </button>
                    <button
                        id="navAction"
                        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        @click="signIn()"
                    >
                        Login
                    </button>

                    </div>
                </div>
                <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </header>

        <!-- page content-->
        <div>
            <slot/>
        </div>


        <!--Footer-->
        <footer class="bg-white">
            <div class="container mx-auto px-8">
                <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6 text-black">
                    <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                    <!--Icon from: http://www.potlabicons.com/ -->
                    <!--
                    <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                        <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                        <path
                        class="plane-take-off"
                        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                        />
                    </svg>
                    -->
                    A. V. SOLUTIONS
                    </a>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Links</p>
                    <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                    </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                    <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <NuxtLink to="/terms" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</NuxtLink> 
                        <!--<a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>-->
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <NuxtLink to="/privacy" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</NuxtLink> 
                        <!--<a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>-->
                    </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Social</p>
                    <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                    </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Company</p>
                    <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>        
        </footer>        

    </div>
</template>

<script >
export default {

    beforeMount () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll)
    }    ,
    

    methods: {
    handleScroll () {
      // Your scroll handling here
      //console.log(window.scrollY)
      let scrollpos = window.scrollY;

      var header = document.getElementById("header");
      var navcontent = document.getElementById("nav-content");
      var navaction = document.getElementById("navAction");
      var brandname = document.getElementById("brandname");
      var toToggle = document.querySelectorAll(".toggleColour");      


      if (scrollpos > 10) {
          header.classList.add("bg-white");
          navaction.classList.remove("bg-white");
          navaction.classList.add("gradient");
          navaction.classList.remove("text-gray-800");
          navaction.classList.add("text-white");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
          }
          header.classList.add("shadow");
          navcontent.classList.remove("bg-gray-100");
          navcontent.classList.add("bg-white");
        } else {
          header.classList.remove("bg-white");
          navaction.classList.remove("gradient");
          navaction.classList.add("bg-white");
          navaction.classList.remove("text-white");
          navaction.classList.add("text-gray-800");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
          }

          header.classList.remove("shadow");
          navcontent.classList.remove("bg-white");
          navcontent.classList.add("bg-gray-100");
        }

    },

    checkParent(t, elm) {
        while (t.parentNode) {
          if (t == elm) {
            return true;
          }
          t = t.parentNode;
        }
        return false;
     },

     signIn(){
        this.$router.push({ path: '/login'})
     },

     signUp(){
        this.$router.push({ path: '/signup'})
     },


    toggleMenu(e){
      var navMenuDiv = document.getElementById("nav-content");
      var navMenu = document.getElementById("nav-toggle");
      var target = (e && e.target) ;

      if (!this.checkParent(target, navMenuDiv)) {
          // click NOT on the menu
          if (this.checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
              navMenuDiv.classList.remove("hidden");
            } else {
              navMenuDiv.classList.add("hidden");
            }
          } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
          }
        }

    }

    
  },



}


</script>

<style  scoped>

@media only screen and (min-width: 768px){
        .parent:hover .child {
            opacity:1;
            height:auto;
            overflow:none;
            transform: translateY(0);
        }
        .child {
            opacity:0;
            height:0;
            overflow:hidden;
            transform: translateY(-10%);
        }
    }

    .navmenu a:hover {
        border-bottom-width: 0.2rem;
        border-bottom-color: green;
        font-weight: bold;

    }

    .logoBackground {
        background-image: url("img/logobg.svg");
        width: 300px;
        background-repeat: no-repeat;

    }



    /* background-color: #3A526B; */

</style>