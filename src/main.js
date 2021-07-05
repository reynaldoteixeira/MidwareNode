// const { forEachLeadingCommentRange } = require("typescript");
const ClientOne = require("./client/ClientOne");
const ClientTwo = require("./client/ClientTwo");

async function main() {
    console.log("main works");
    
    try {
        console.log("Acesso ao cliente 1")
        clientOne = await ClientOne.accessClientOne();
    } catch(err){
        logger.error("Fail access client one");
    }
    
    let clientOneMenuitem = clientOne.popup.menuitem;

    for(var x = 0; x <= clientOneMenuitem.length; x++){
       
        menuItemValue = clientOneMenuitem[x].value;
        menuItemOnClick = clientOneMenuitem[x].onclick;


        try{
            ClientTwo.createValuesClientTwo(menuItemValue,menuItemOnClick);
        } catch(error){
            logger.error("Post failed in for inside on main.js");
        }
    }
    

    
}

main().then(()=>{

}).catch(err =>{

})