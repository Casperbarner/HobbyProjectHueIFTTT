// Connect to Socket.io
let socket = io()

socket.on('debug message', data => {
    console.log('Debug message from socket', data)
})

socket.on('page view', data => {
    console.log('Someone viewed a page: ', data)
})

console.log('Hello from app.js')