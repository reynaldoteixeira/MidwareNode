// const { default: axios } = require("axios")
const request = require("request");

async function createValuesClientTwo(menuItemValue, menuItemOnClick) {
   
    let bodyMenu = {
        "value":menuItemValue,
        "onclick":menuItemOnClick
    }

    var options = {
        "method": "POST",
        "url": "http://localhost:3333/menuitem",
        'headers': {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(bodyMenu)
    }

    // try{
    //     const res = await axios(options)
    //     return res.data;
    // }catch(error){
    //     logger.error("Post client two failed");
    // }

    return new Promise((resolve, reject) =>{

        request (options, function(error, response, body){

            if (error) {
                reject(new Error(error));
            }

            resolve(body);
        });

    });
}

module.exports = {
    createValuesClientTwo:createValuesClientTwo
}