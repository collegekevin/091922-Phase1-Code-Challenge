// Crap. I feel like I'll be able to get that last part to work.
// It's just gonna take me a little longer.
const url = 'http://localhost:3000/characters'
function fetchCharacter(url){
    fetch(url)
    .then(resp => resp.json())
    .then(json => renderCharacters(json))
}

fetchCharacter(url)

function renderCharacters(characters){
    characters.forEach(displayName)
}

function displayName(character){

    const characterDiv = document.getElementById('character-bar')
    const characterName = document.createElement('span')
    characterName.textContent = character.name
    characterDiv.append(characterName)

    characterName.addEventListener("click", (e) => {
        showCharacterDetails(character)
        })   

// this might have to be moved into the above function
characterName.addEventListener("click", (e) => {
showCharacterDetails(character)
})
}

function showCharacterDetails(character){
    const detailName = document.querySelector('#name')
    const characterImage = document.querySelector('#image')
    let characterVoteCount = document.querySelector('#vote-count')
    detailName.textContent = character.name
    characterImage.src = character.image
    characterVoteCount.textContent = character.votes
// I was calling the above character['#vote-counts'] and it took me 10 minutes
// to find the error
const submitPress = document.getElementById('votes')
submitPress.addEventListener('submit', showNewVotes)

function showNewVotes (e) {
    e.preventDefault()
    console.log(e)

// const b = parseInt(a);

    const newVotes = e.target.votes.value
    const newVoteTotal = parseInt(newVotes) + parseInt(character.votes)
    characterVoteCount = newVoteTotal
    console.log(newVotes)
}

}

// const submitPress = document.getElementById('votes-form')
// submitPress.addEventListener('submit', showNewVotes)

// function showNewVotes (e) {
//     e.preventDefault()

// // const b = parseInt(a);

//     const newVotes = e.target.votes.value
//     const newVoteTotal = parseInt(newVotes) + parseInt(character.votes)
//     characterVoteCount = newVoteTotal
// }