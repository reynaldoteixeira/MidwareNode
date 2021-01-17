// const { forEachLeadingCommentRange } = require("typescript");
const ClientOne = require("./client/ClientOne");
const ClientTwo = require("./client/ClientTwo");

async function main() {
    console.log("main works");
    
    try {
        clientOne = await ClientOne.accessClientOne();
    } catch(err){
        logger.error("Fail access client one");
    }
    
    

    for(var x = 0; x <= clientOne["popup"]["menuitem"].length; x++){

        menuItemValue = clientOne["popup"]["menuitem"][x]["value"];
        menuItemOnClick = clientOne["popup"]["menuitem"][x]["onclick"];

        try{
            await ClientTwo.createValuesClientTwo(menuItemValue,menuItemOnClick);
        } catch(error){
            logger.error("Post failed in for inside on main.js");
        }
    }
    

    
}

main().then(()=>{

}).catch(err =>{

})