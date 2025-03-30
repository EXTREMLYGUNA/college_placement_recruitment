const ApiRoutes = {
    LOGIN:{
        path:'/student/login',
        authenticate:false
    },
    SIGNUP:{
        path:'/student/signup',
        authenticate:false
    },
    GET_ALL_USERS:{
        path:'/application/create',
        authenticate:false
    },
    COLLECT_ALL_USERS:{
        path:'/application/getApplication',
        authenticate:true
    },
    GET_ALL_LOGIN:{
        path:'/student/studentsAll',
        authenticate:true
    },
    EDIT_USER:{
        path:'/application/editUser/:id',
        authenticate:true
    },
    DELETE_USER:{
        path:'/application/deleteUser/:id',
        authenticate:true
    }
}
 
export default ApiRoutes