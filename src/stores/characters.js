import { ref, computed } from 'vue'
import { defineStore }   from 'pinia'
import ky from 'ky'

const API_ENDPOINT = 'https://rickandmortyapi.com/api/'

export const useCharacterStore = defineStore('characters', () => {
  
  const allCharacters    = ref([])
  const currentCharacter = ref({})

  const fetchAllCharacters = async ()=>{
    const tryToFetch = await ky.get(`${API_ENDPOINT}character`).json()
    const {results}  = tryToFetch
    allCharacters.value = results
  }

  const fetchOneCharacter = async (charId)=>{
    const tryToFetch = await ky.get(`${API_ENDPOINT}character/${charId}`).json()
    currentCharacter.value = tryToFetch
  }

  return { 
    allCharacters,
    currentCharacter,
    fetchOneCharacter,
    fetchAllCharacters
   }
})
