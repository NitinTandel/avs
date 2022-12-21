<template>
    <div class="pt-20">
        <section class="bg-white border-b py-8">            
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Our Products
                </h2>
                <div class="w-full mb-4">
                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="w-full p-4 flex flex-wrap" >
                    <div v-for= "p in ProductList " :key="p.ProductId"  class="w-full md:w-1/2 lg:w-1/3">
                        <product-card :product="p" />
                    </div>            
                </div>
        </section>
    </div>
</template>

<script setup>
    const ProductList = [ { ProductId : 1 , ProductName : "FeesPro", shortDescr: "An ERP software for CA's and Tax Consultants",  Descr : "A Complete billing, Accounting and Work Management Solution for Chartered Accoutants and Tax Consultants." , Logo : "img/web_applications.png" , page : "feespro" },
                       { ProductId : 2 , ProductName : "Excel2Tally", shortDescr: 'Excel To Tally Integrtion', Descr : "Excel Automation Tool to Import and Export Data from Excel To Tally." , Logo : "img/mobile_app.jpg" , page : "excel2tally" },
                       { ProductId : 3 , ProductName : "TiffApp", shortDescr: 'A Cloud based solution for Tiffin Service Business', Descr : "A simple cost effective Solution for Tiffin Service Business." , Logo : "img/Tally_service.png" , page : "Left" },
                       { ProductId : 4 , ProductName : "Tally Document Management", shortDescr: 'TDL utility for Tally', Descr : "A Custom TDL utility for Tally to Manage documents for vouchers." , Logo : "img/Excel_automation.png" , page : "Right" },
                       { ProductId : 5 , ProductName : "Tally Approval Workflow", shortDescr: 'Voucher Approval Module for Tally', Descr : "A Custom utility for Tally to for Voucher Approval along with Workflow management." , Logo : "img/pythonlogo.png" , page : "Left" }
                     ]


</script>

<style  scoped>

</style>