const http = require('http')
const port = '3003'
http.createServer(((req, res) => {
    console.log('request')

    const {url, method} = req
    if(url === '/' && method === 'GET'){
        console.log('可以读文件啦')
    }
})

).listen(port, () => {
    console.log(`Server at ${port}`)
})
