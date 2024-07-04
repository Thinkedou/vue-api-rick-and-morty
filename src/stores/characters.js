import { ref, computed } from 'vue'
import { defineStore }   from 'pinia'
import ky from 'ky'

export const useCharacterStore = defineStore('characters', () => {
  
  const allCharacters = ref([])

  const fetchAllCharacters = async ()=>{
    const tryToFetch = await ky.get('https://rickandmortyapi.com/api/character').json()
    const {results}  = tryToFetch
    allCharacters.value = results
  }


  return { allCharacters,fetchAllCharacters }
})
