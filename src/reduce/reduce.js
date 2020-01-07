const initData = {username:"王子奇"}
function reduce(state={userInfo:initData},action){
    if(action.type == 'changeUsername'){
        console.log(action.payloads.username)
        return {
            userInfo:{
                username: action.payloads.username
            }
        }
    }
    return state
}
export default reduce