const userManager = require('../manager/user.manager');
const registerUser = (request,response) => {
    userManager.registerUser(request.body)
    .then((result)=>response.status(result.code).send(result.data))
    .catch((error)=>response.status(501).send(error.message))
}
module.exports ={
    registerUser
}