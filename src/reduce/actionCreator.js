function actionCreator(username){
    return{
        type: 'changeUsername',
        payloads:{
        username,
        }
    }
}
export default actionCreator;
