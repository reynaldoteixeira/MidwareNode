const request = require("request")

async function accessClientOne (){

    var options = {
        "method":"GET",
        "url":"http://localhost:3000/menu"
    }

    return new Promise ((resolve,reject) =>{
        request (options, function(error,response,body){
            if(error){
                console.log("Get fail");
            }
            resolve(JSON.parse(body))
        })
    })
}

module.exports = {
    accessClientOne:accessClientOne
}