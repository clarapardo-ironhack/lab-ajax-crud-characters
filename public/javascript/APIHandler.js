class APIHandler {

  constructor(baseUrl) {
    this.BASE_URL = baseUrl

    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)
    
  }

  createOneRegister(characterInfo) {
    return this.axiosApp.post('/characters', characterInfo)
  }

  updateOneRegister(characterId, characterInfo) {
    return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister(characterId) {
    return this.axiosApp.delete(`/characters/${characterId}`)
  }

  getId() {
    
  }
}
