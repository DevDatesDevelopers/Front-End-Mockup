<template>
    <div class="bg-[var(--clr-primary)] max-w-md mx-auto p-12">
        
        <section class="mx-auto text-center w-40 mb-4">
            <div class="relative mb-6">
                <img class="w-32 h-32 object-cover rounded-3xl mx-auto" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="No Image">
                
                <button class="
                    bg-[var(--clr-purple1)] 
                    w-fit h-fit
                    border-[2.5px] border-[var(--clr-white)] rounded-full
                    absolute -bottom-4 right-2 
                    p-2">

                    <Icon class="text-[var(--clr-white)] h-6 w-6" icon="jam:camera-f"/>
                </button>
            </div>
            
            <h2 class="text-[var(--clr-white)] text-xl mb-1">
                Boyko, 14
            </h2>

            <p class="text-[var(--clr-content)] leading-4">
                I love the sound of money and gold
            </p>
        </section>

        <section class="flex justify-between text-center items-start">
                <div class="py-2">
                    <button class="
                        bg-[var(--clr-black1)] 
                        w-fit h-fit 
                        border border-[var(--clr-white)] rounded-2xl 
                        mx-auto 
                        p-2 mb-1">

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