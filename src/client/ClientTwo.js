const { default: axios } = require("axios")

async function createValuesClientTwo(menuItemValue, menuItemOnClick) {
    
    var options = {
        "method": "POST",
        "url": "http://localhost:3333/menuitem",

        data: {
            "value":menuItemValue,
            "onclick":menuItemOnClick
        }
    }

    

    try{
        const res = await axios(options)
        return res.data;
    }catch(error){
        logger.error("Post client two failed");
    }
}

module.exports = {
    createValuesClientTwo:createValuesClientTwo
}