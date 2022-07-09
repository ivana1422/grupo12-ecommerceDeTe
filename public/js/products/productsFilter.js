URL_API = "http://localhost:5000/api/productos/"

fetch(URL_API)
.then(result=>result.json())
.then(data=>console.log(data))