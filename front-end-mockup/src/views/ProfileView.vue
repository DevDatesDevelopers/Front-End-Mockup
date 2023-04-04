<template>
    <div class="flex flex-col justify-center items-center">
        <section class="text-center w-10/12 mb-4">
            <div class="my-6 flex flex-col items-center">
                <div id="profileImageContainter" class="w-24 aspect-square bg-content rounded-xl">
                    <span class="cursor-pointer absolute mt-16 ml-16 block w-fit bg-primary-purple text-white p-2 rounded-full border-[3px]">
                        <Icon icon="jam:camera-f" style="width: 25px; height: 25px;" class=""/>
                    </span>
                </div>
            </div>
            <h3 class="mb-1 font-semibold">Boyko, 14</h3>
            <p class="">I love the sound of money and gold</p>
        </section>

        <section class="flex justify-between text-center items-start">
                <div class="py-2">
                    <button class="bg-[var(--clr-black1)] w-fit h-fit border border-[var(--clr-white)] rounded-2xl mx-auto p-2 mb-1">
                        <Icon class="text-[var(--clr-secondary)] w-8 h-8 mx-auto" icon="heroicons-outline:adjustments-horizontal"/>
                    </button>
                    
                    <p class="text-[var(--clr-white)]">Settings</p>
                </div>
                <div class="py-6">
                    <button class="
                        bg-[var(--clr-purple1)]
                        w-fit h-fit 
                        border-[2.5px] border-[var(--clr-white)] rounded-full
                        mx-auto  
                        p-2 mb-1">

                        <Icon class="text-[var(--clr-white)] h-10 w-10" icon="jam:camera-f"/>
                    </button>

                    <p class="text-[var(--clr-white)]">Add media</p>
                </div>
                <div class="py-2">
                    <button class="
                        bg-[var(--clr-black1)] 
                        w-fit h-fit 
                        border border-[var(--clr-white)] rounded-2xl
                        mx-auto  
                        p-2 mb-1">
                        <Icon class="text-[var(--clr-secondary)] w-8 h-8 mx-auto"  icon="heroicons-outline:pencil"/>
                    </button>

                    <p class="text-[var(--clr-white)]">Edit Info</p>
                </div>
        </section>
    </div>
    
    
</template>

<style scoped>

    h2, p, h3 {
        font-family: 'Inter';
    }

</style>

<script setup>
    import {Icon} from '@iconify/vue';
</script>