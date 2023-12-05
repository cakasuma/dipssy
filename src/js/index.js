
const ENVIRONMENT = window.location.protocol === 'https:' ? 'production' : 'development'
const API_URL = ENVIRONMENT === 'production' ? 'https://anya.up.railway.app' : 'http://localhost:3000'

const containerElement = document.getElementById('container')
const inputElement = document.getElementById('edit-user-nama')
let loginUser = '';

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

const deleteUser = async (id) => {
    // TODO: call API to delete user
    try {
        await fetch(`${API_URL}/user/${id}`, { method: 'DELETE' })
        alert(`User ${nama} berhasil dihapus`)
    } catch (error) {
        console.error({
            error
        })
        alert('User gagal dihapus')
    }
}

const editUser = async (id, nama) => {
    // TODO: call API to delete user
    try {
        const namaBaru = inputElement.value
        await fetch(`${API_URL}/user/${id}?nama=${namaBaru}`, { method: 'PUT' })
        alert(`User ${nama} berhasil dihapus`)
    } catch (error) {
        console.error({
            error
        })
        alert('User gagal dihapus')
    }
}

const appendUserToContainer = (user) => {
    const userHTMLElement = document.createElement('div')
    userHTMLElement.className = 'box'
    userHTMLElement.innerHTML = `
        <img class="img" src="${API_URL}${user.profile_picture}" />
        <h1>${user.nama}</h1>
        <p>${user.nama} suka makan ${user.Food.rasa}</p>
        <button onclick="EditUser(${user.id}, ${user.nama})">Edit</button>
        <button onclick="deleteUser(${user.id}, ${user.nama})">Delete</button>
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