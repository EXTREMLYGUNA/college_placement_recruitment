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
    GET_ALL_LOGIN:{
        path:'/student/studentsAll',
        authenticate:true
    },
}
 
export default ApiRoutes