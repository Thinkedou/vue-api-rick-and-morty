<script setup>
import {onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import {  storeToRefs } from 'pinia'
import {useCharacterStore} from '../stores/characters'

const route = useRoute()

const characterStore = useCharacterStore()
const {fetchOneCharacter}  = characterStore
const { currentCharacter } = storeToRefs(characterStore)


onBeforeMount(async ()=>{
    // récupérer l'id dans l'url
    const {params:{charId}} = route
    await fetchOneCharacter(charId)
    console.log(currentCharacter.value)

})

</script>
<template>
    <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" :src="currentCharacter.image" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">{{currentCharacter.name}}</h5>
                                <!-- Product price-->
                                {{currentCharacter.status}}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
            
        </section>
</template>