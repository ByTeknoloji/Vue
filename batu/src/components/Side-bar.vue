<script setup>



    console.log(localStorage.getItem("dark"));
    const darkMode=()=>{ 
        document.documentElement.classList.toggle('dark')
        if(document.documentElement.classList.contains('dark')){
            localStorage.setItem("dark" ,true);
        }
        else{
            localStorage.removeItem("dark");
        }
    }
</script>
<template>
  <main class="flex-auto flex">
    <aside class="w-64 border-r p-3 dark:border-gray-600 dark:divide-gray-600 border-gray-100 flex flex-col overflow-auto divide-solid divide-gray-100 divide-y">
        <nav class="pb-8">
            <a href="#" class="nav">Anasayfa</a>
            <a href="#" class="nav">Akış</a>
            <a href="#" class="nav">Keşfet</a>
            <a href="#" class="nav">Makaleler</a>
            <a href="#" class="nav">Soru&Cevap</a>
            
        </nav>
        <nav class="pt-8">
            <a href="#" class="nav">HTML</a>
            <a href="#" class="nav">CSS</a>
            <a href="#" class="nav">Javascript</a>
            <a href="#" class="nav">Vue JS</a>
          
            
        </nav>
        <div class="mt-auto pt-3">
            <button @click="darkMode()" href="#" class="bg-gray-700 w-full text-white rounded-md h-10 flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span class="hidden dark:inline">Açık Mod</span>
                <span class="inline dark:hidden">Koyu Mod</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="ml-1" viewBox="0 0 24 24"><path fill="currentColor" d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>

            </button>
            
        </div>
        
    </aside>
    <section class="flex-auto py-6 px-10">
        <div class="mx-auto max-w-screen-xl">

            <h2 class="text-3xl font-semibold mb-3 leading-relaxed text-handro dark:text-white">Kendine değer kat!</h2>
            <p class="text-handro dark:text-white">İyi bir kariyer için, doğru bir başlangıç gerekir. Handro'da bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!</p>

            <div class="grid grid-cols-10 mt-5 gap-7">
                <div class="col-span-2">
                    <a href="#" class="group border flex flex-col px-4 py-7 transition-colors hover:!border-red-300 items-center rounded">
                        <span class="w-24 h-24 border bg-red-100 border-red-500 rounded-full grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" class="" viewBox="0 0 32 32"><path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"/><path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"/><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"/></svg>
                                
                        </span>
                        <span class="mt-3 flex px-5 py-1 text-white  border border-red-500 bg-orange-600 group-hover:bg-red-500 transition-colors rounded">HTML</span>
                    </a>
                </div>
                <div class="col-span-2">
                    <a href="#" class="border flex flex-col px-4 py-7 items-center rounded">
                        <span class="w-24 h-24 border bg-blue-100 border-blue-500 rounded-full grid place-items-center">
                           
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"/><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"/><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"/><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"/><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"/></svg>
                        </span>
                        <span class="mt-3 flex px-5 py-1 text-white  border border-blue-400 bg-blue-400 rounded">CSS</span>
                    </a>
                </div>
                <div class="col-span-2">
                    <a href="#" class="border flex flex-col px-4 py-7 items-center rounded">
                        <span class="w-24 h-24 border bg-yellow-100 border-yellow-500 rounded-full grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
                                
                        </span>
                        <span class="mt-3 flex px-5 py-1 text-black  border border-yellow-300 bg-yellow-300 rounded">Javascript</span>
                    </a>
                </div>
                <div class="col-span-2">
                    <a href="#" class="border flex flex-col px-4 py-7 items-center rounded">
                        <span class="w-24 h-24 border bg-green-100 border-green-500 rounded-full grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"/></svg>
                                
                        </span>
                        <span class="mt-3 flex px-5 py-1 text-white  border border-green-500 bg-green-500 rounded">Vue JS</span>
                    </a>
                </div>
               


            </div>

            <div class="bg-twitter pt-6 mt-40 rounded-lg flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" class="m-8" viewBox="0 0 20 20"><path fill="white" fill-rule="evenodd" d="M20 3.894a8.299 8.299 0 0 1-2.357.636a4.062 4.062 0 0 0 1.804-2.234a8.298 8.298 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04c0 .316.036.624.106.92a11.71 11.71 0 0 1-8.457-4.22a3.974 3.974 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.143 4.143 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.189 4.189 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.317 8.317 0 0 1-5.096 1.73A8.42 8.42 0 0 1 0 16.185A11.747 11.747 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492c0-.175-.004-.35-.012-.523A8.249 8.249 0 0 0 20 3.895Z"/></svg>
                <div class="">
                    <h6 class="text-white font-bold text-xl">Twitter'da bizi takip etmeyi unutma!</h6>
                    <p class="text-gray-300">Hazırladığımız son videolardan anında haberdar olmak için twitter hesabımızı takip etmeyi unutma!</p>
                    <button class="border bg-white mt-5 w-28 justify-center rounded text-gray-700 flex px-2 py-1 ">Takip Et</button>
                </div>
                
            </div>
        </div>
    </section>
  </main>
</template>



<style>

</style>