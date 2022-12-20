<template>
    <div>
        <div class="header flex flex-row shadow-md">
            <div class="flex w-1/4 " >
                <div class="logoBackground" >
                    <img class="h-20 pl-4 pt-5"  src="img/AVSolutions_Logo.png" alt="">
                </div>
                <button class="mt-4 mr-4 w-5 h-5 ">
                    <img class="w-5 h-5 "  src="img/list-view-icon.svg"   alt="">
                </button>
                <button class="mt-4 mr-4 w-5 h-5">
                    <img class="w-5 h-5 "  src="img/homepage-icon.svg"   alt="">
                </button>
                
                <!--<img class="h-28 " src="img/logobg.svg" alt="">-->
            </div>
            <div class="grow">
                <div class="col-span-2">
                    <ul class="navmenu flex pr-10 justify-end">
                        <li>
                            <a href="#" class=" flex md:inline-flex pt-4 px-4 items-center border-transparent ">
                                <!--<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>-->
                                <img class="w-5 h-5 mr-2 "  src="img/homepage-icon.svg"   alt="">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex md:inline-flex pt-4 px-4 items-center hover:bg-gray-50">
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex md:inline-flex pt-4 px-4 items-center hover:bg-gray-50">
                                <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex md:inline-flex pt-4 px-4 items-center hover:bg-gray-50">
                                <span>About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex md:inline-flex pt-4 px-4 items-center hover:bg-gray-50">
                                <span>Contact Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex  md:inline-flex pt-4 px-4 items-center hover:bg-gray-50 ">
                                <img class="w-5 h-5 mr-2 greenfill"  src="img/login-icon.svg"   alt="">
                                <span>Login</span>
                            </a>
                        </li>


                    </ul>
                </div>
                <div class="flex gap-3 justify-center mt-3">
                    <div class="w-44 mt-2"  >                   
                        <!--<svg class="w-4 h-4 mr-2" style="fill:green;" viewBox="0 0 92.53 122.88"><path class="cls-1" d="M46.27,18.21A28.62,28.62,0,1,1,17.64,46.83,28.62,28.62,0,0,1,46.27,18.21Zm1.36,97.49A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7ZM48.79,28.35c.37,0,.74.12,1.11.19a19,19,0,0,1,3.49,1.06,18.2,18.2,0,0,1,3.23,1.73,18.71,18.71,0,0,1,5.15,5.14A18.92,18.92,0,0,1,63.5,39.7l0,.07a18.34,18.34,0,0,1,1,3.43c.07.36.14.74.19,1.11h3.07a1.27,1.27,0,0,1,1.27,1.26v2.52a1.28,1.28,0,0,1-1.27,1.26H64.75c0,.37-.12.75-.19,1.11A18.88,18.88,0,0,1,63.5,54a18.91,18.91,0,0,1-4,6h0a19.11,19.11,0,0,1-6.05,4l-.07,0a18.34,18.34,0,0,1-3.43,1c-.37.08-.74.14-1.11.19v3.08a1.28,1.28,0,0,1-1.27,1.26H45a1.27,1.27,0,0,1-1.26-1.26V65.31c-.38,0-.75-.11-1.12-.19A18.86,18.86,0,0,1,33.08,60a19.41,19.41,0,0,1-2.32-2.84A17.77,17.77,0,0,1,29,54,18.18,18.18,0,0,1,28,50.46c-.07-.36-.13-.74-.18-1.11H24.71a1.27,1.27,0,0,1-1.26-1.26V45.57a1.27,1.27,0,0,1,1.26-1.26h3.08c.05-.37.11-.75.18-1.11A18.18,18.18,0,0,1,29,39.7a17.77,17.77,0,0,1,1.72-3.22,19.41,19.41,0,0,1,2.32-2.84,19,19,0,0,1,6.06-4l.07,0a18.24,18.24,0,0,1,3.42-1c.37-.07.74-.14,1.12-.19V25.27A1.27,1.27,0,0,1,45,24h2.51a1.27,1.27,0,0,1,1.27,1.26v3.08ZM46.27,42.06a4.77,4.77,0,1,1-4.78,4.77,4.77,4.77,0,0,1,4.78-4.77Zm13.54,7.29c-5.65,0-5.65-5,0-5q-.08-.42-.18-.84a13.46,13.46,0,0,0-.77-2.24l0-.06A12.64,12.64,0,0,0,57.64,39a14.61,14.61,0,0,0-1.63-2,14.2,14.2,0,0,0-1.95-1.62,13.91,13.91,0,0,0-2.2-1.23,13.57,13.57,0,0,0-2.25-.77l-.82-.18c0,5.66-5,5.66-5,0l-.84.19a13.11,13.11,0,0,0-2.24.76,14.37,14.37,0,0,0-2.2,1.23l-.07,0A14.24,14.24,0,0,0,34.89,39a13.39,13.39,0,0,0-2,4.44c-.07.28-.13.55-.18.83,5.66,0,5.65,5,0,5q.08.42.18.84a14.09,14.09,0,0,0,.77,2.24h0a15,15,0,0,0,1.23,2.2,13.59,13.59,0,0,0,1.63,1.95,13.92,13.92,0,0,0,4.14,2.85l.08,0a13.83,13.83,0,0,0,2.17.73l0,0c.26.06.52.12.78.16,0-5.66,5-5.66,5,0l.84-.19a13.16,13.16,0,0,0,2.24-.77h0A13.8,13.8,0,0,0,56,56.58a13.8,13.8,0,0,0,2.85-4.15l0-.06a14.58,14.58,0,0,0,.74-2.2c.06-.27.12-.54.17-.82Z"/></svg>-->                    
                        <span class="flex"><img class="w-5 h-5 mr-2 greenfill"  src="img/location-icon.svg"   alt="">Address :</span>
                        <span>Mahim, Mumbai, India</span>
                    </div>
                    <div class="w-44 mt-2 border-4 border-l-green-800 border-r-0 border-t-0 border-b-0">
                        <span class="flex ml-4"><img class="w-5 h-5 mr-2 greenfill"  src="img/timings-icon.svg"   alt="">Timings :</span>
                        <span class="pl-4">9:00 AM to 6:00 PM</span>
                    </div>
                    <div class="w-44 mt-2 border-4 border-l-green-800 border-r-0 border-t-0 border-b-0">
                        <span class="flex ml-4"><img class="w-5 h-5 mr-2 greenfill"  src="img/phone-icon.svg"   alt="">Contact :</span>
                        <span class="pl-4">+91 96641 44493</span>
                    </div>
                </div>
            </div>
        </div>        

        <!-- Page content -->
        <div >
            <slot />
        </div>

        <div class="footer">
            <p>Resize the browser window to see how the content respond to the resizing.</p>
        </div>        
    </div>
</template>

<script setup>

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

    .gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
      }


    /* background-color: #3A526B; */

</style>