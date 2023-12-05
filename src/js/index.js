

const API_URL = 'http://localhost:3000'
const containerElement = document.getElementById('container')

// Using Async Await
const getUsers = async () => {
    try {
        const userResponse = await fetch(`${API_URL}/user-food`, { method: 'GET' })
        const userData = await userResponse.json()
        console.log({ userData })
        
        return userData
    } catch (error) {
        console.error({
            error
        })
    }
}

const appendUserToContainer = (user) => {
    const userHTMLElement = document.createElement('div')
    userHTMLElement.className = 'box'
    userHTMLElement.innerHTML = `
        <img class="img" src="${API_URL}${user.profile_picture}" />
        <h1>${user.nama}</h1>
        <p>${user.nama} suka makan ${user.Food.rasa}</p>
    `

    containerElement.appendChild(userHTMLElement)
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await getUsers()

        users.forEach(appendUserToContainer)
    } catch (error) {
        console.error({
            error
        })
    }
})

// Using Callback Chaining
// fetch(`${API_URL}/user-foo`, { method: 'GET' })
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(user => {
//             const userHTMLElement = document.createElement('div')
//             userHTMLElement.className = 'box'

//             userHTMLElement.innerHTML = `
//                 <h1>${user.nama}</h1>
//                 <p>${user.nama} suka makan ${user.Food.rasa}</p>
//             `

//             containerElement.appendChild(userHTMLElement)
//         })
//     })
//     .catch(error => {
//         console.error({
//             error
//         })
//         alert('Error happens')
//     })