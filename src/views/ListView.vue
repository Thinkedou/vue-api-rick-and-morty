<script setup>
import {onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import {  storeToRefs } from 'pinia'
import {useCharacterStore} from '../stores/characters'

const router = useRouter()
const characterStore = useCharacterStore()
const {fetchAllCharacters} = characterStore
const { allCharacters } = storeToRefs(characterStore)


const handleDetailsButton = (charId)=>{
    router.push({
        name:'detail',
        params:{
            charId:charId
        }
    })
}

onBeforeMount(async ()=>{
    await fetchAllCharacters()
    console.log(allCharacters.value)
})

</script>
<template>
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        v-for="char in allCharacters"
                        :key="char.id"
                      >
                        <th scope="row">{{char.id}}</th>
                        <td>{{char.name}}</td>
                        <td>{{ char.species }}</td>
                        <td><span @click="handleDetailsButton(char.id)">👀</span></td>
                      </tr>
                      
                    </tbody>
                  </table>
            </div>
        </section>
</template>