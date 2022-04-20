const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(allCharacts => {
        let characts = ''
        allCharacts.data.forEach(elm => characts += `<div class="character-info">
        <div class="name">ID: ${elm.id}</div>
        <div class="name">Name: ${elm.name}</div>
        <div class="occupation">Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
        <div class="weapon">Weapon: ${elm.weapon}</div>
      </div>` )
        document.querySelector('.characters-container').innerHTML = characts

      })
      .catch(err => console.log(err))
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const searchedID = document.querySelector('#fetch').value

    charactersAPI
      .getOneRegister(searchedID)
      .then(({ data }) => {
        let characts = `<div class="character-info">
          <div class="name">ID: ${data.id}</div>
          <div class="name">Name: ${data.name}</div>
          <div class="occupation">Occupation: ${data.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${data.cartoon}</div>
          <div class="weapon">Weapon: ${data.weapon}</div>
        </div>`
        document.querySelector('.characters-container').innerHTML = characts

      })
      .catch(err => console.log(err))
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const searchedID = document.querySelector('#delete').value

    charactersAPI
      .deleteOneRegister(searchedID)
      .then(() => {
        document.querySelector('#delete-one').style = 'background-color: green'
      })
      .catch(document.querySelector('#delete-one').style = 'background-color: red')
  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    // const newName = document.querySelector('#new-name').value
    // const newOccupation = document.querySelector('#new-occupation').value
    // const newCartoon = document.querySelector('#new-cartoon').checked
    // const newWeapon = document.querySelector('#new-weapon').value

    const newCharacter = {
      name: document.querySelector('#new-name').value,
      occupation: document.querySelector('#new-occupation').value,
      cartoon: document.querySelector('#new-cartoon').checked,
      weapon: document.querySelector('#new-weapon').value
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(() => {
        console.log('holi')
      })
      .catch(err => console.log(err))
  })
})
