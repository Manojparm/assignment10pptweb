//Q.6 Build a Server Using Http Module NodeJS with api endpoints
// for Getting Products Data

const http=require('http');

const port=3012;
const men={
    "watch":"1000",
    "shoes":"2000",
}

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to Men & Women Dummy Data");
    }
    else if(req.url==='/men'){
        res.end(JSON.stringify(men));
    }
});

server.listen(port,()=>{
    console.log("server is listening at");
})
