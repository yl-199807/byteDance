const http = require('http');

const session = {}

http.createServer((req,res)=>{

    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',`abc=123;`)  // cookie能看见
    res.end('Hello');
})
.listen(3005, () => {
    console.log(`Server at 3005`)
})
