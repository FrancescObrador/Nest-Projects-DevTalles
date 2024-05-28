import { Manager, Socket } from "socket.io-client"

let socket: Socket

export const connectToServer = (token: string)=>{

    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js', {
        extraHeaders: {
            authentication: token
        }
    })

    socket?.removeAllListeners()
    socket = manager.socket('/')

    addListeners()
}

const addListeners = () => {
    const serverStatusLabel = document.querySelector('#server-status')!
    const clientsUl = document.querySelector('#clients-ul')!
    const messageForm = document.querySelector<HTMLFormElement>('#message-form')!
    const messageInput = document.querySelector<HTMLInputElement>('#message-input')!
    const messagesUl = document.querySelector<HTMLUListElement>('#messages-ul')!

    socket.on('connect', () => {
        console.log('connected')
        serverStatusLabel.innerHTML = 'connected'
    })

    socket.on('disconnect', () => {
        console.log('disconnected')
        serverStatusLabel.innerHTML = 'disconnected'
    })

    socket.on('clients-updated', (clients: string[]) => {
        let clientHtml = ''

        clients.forEach( clientId => {
            clientHtml += `
            <li>${clientId}</li>
            `
        })

        clientsUl.innerHTML = clientHtml
    }) 

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if(messageInput.value.trim().length <= 0) return

        socket.emit('message-from-client', {
            id: 'YO', message: messageInput.value
        })

        messageInput.value = ''
    })

    socket.on('messages-from-server', (payload: {fullName: string, message: string}) => {
        console.log(payload)
        const newMessage = `
        <li>
            <string>${payload.fullName}: ${payload.message}</string>
        </li>
        `

        const li = document.createElement('li')
        li.innerHTML = newMessage
        messagesUl.append(li)
    })
}