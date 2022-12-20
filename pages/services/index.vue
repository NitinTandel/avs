<template>
    <div class="mt-10">        
        <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Our Services
            </h2>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div v-for= "s in ServicesList " :key="s.ServiceId" >
                <services-card :service="s" />
            </div>            
        </div>
        </section>

    </div>
</template>

<script setup>

const ServicesList = [ { ServiceId : 1 , ServiceName : "Web Applications", ServiceDescr : "We develop custom Web Applications as per your requirements. We also deploy your application on cloud." , Logo : "img/web_applications.png" , LogoPosition : "Left" },
                       { ServiceId : 2 , ServiceName : "Mobile Applications", ServiceDescr : "We develop custom mobile appications as per your requirements." , Logo : "img/mobile_app.jpg" , LogoPosition : "Right" },
                       { ServiceId : 3 , ServiceName : "Tally Customizations", ServiceDescr : "Customize your Tally with us. We can make changes to Tally using TDL programming." , Logo : "img/Tally_service.png" , LogoPosition : "Left" },
                       { ServiceId : 4 , ServiceName : "Excel Automation", ServiceDescr : "We develop custom mobile appications as per your requirements." , Logo : "img/Excel_automation.png" , LogoPosition : "Right" },
                       { ServiceId : 5 , ServiceName : "Python Automation", ServiceDescr : "Make any kind of automation using python." , Logo : "img/pythonlogo.png" , LogoPosition : "Left" }
                     ]


</script>

<style  scoped>

</style>