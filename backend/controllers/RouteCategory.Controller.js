const RouteCategoryModule = require("../Models/routecategory.model");

module.exports = {
    saveRouteCategory: async (req,resp,next) => {
        try{
            const route = new RouteCategoryModule(req.body);

            if(!req.body.category || !req.body.amount){
                return resp.send(JSON.stringify("Please fill all the fields!!"))
            }

            let result = await RouteCategoryModule.save();

            if(result){
                resp.send(JSON.stringify("Route Saved Successfully!!"));
            }else{
                resp.send(JSON.stringify("Error while saving route!!"));
            }
        }catch(err){
            console.log(err);
        }
    }
}