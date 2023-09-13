var http=require('http')
var url=require('url')

var httpp=http.createServer((req,res)=>{
var urls=url.parse(req.url).pathname
if(urls=='/'){
    res.write('home')
    res.end()
}
else if(urls=='/next'){
    res.write('next page')
    res.end()

}
else{
    res.write('no such a page in dictionary')
    res.end()

}

})
httpp.listen(9000)