/// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import UserInterface from './components/UserInterface'
import CompanyDatabaseIntegration from './components/Company Database Integration'
import ReportsAndAnalytics from './components/Reports and Analytics'
import StudentAndAppplication from './components/student and appplicatin management'
import Dashboard from './components/Dashboard'
import InterviewScheduling from './components/Interview scheduling'
import CompanyCoordination from './components/Company Coordination'
import {Navigate} from 'react-router-dom'
import PlacementDrivesManagement from './components/Placement Drives Management'
import RecruitmentStatusTracking from './components/Recruitment Status Tracking'
import IntegrationWithAcademicRecords from './components/Integration with Academic Records'
import ViewAndEdit from './components/ViewAndEdit'
import ShortList from './components/ShortList'
import Reject from './components/Reject'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoutes from './service/protectedRoutes'
import AdminGuard from './service/adminGuard'
import Recruitment from './service/Recruitment'
import SideBar from './components/SideBar'
import CompanyDatabaseUsers from './components/Company Database Users'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = React.createContext();
function App() {
  let [user,setUser] = useState([
      {
        id:1,
        name:"Guna",
        email:'guna@gmail.com',
        birth:"1999-12-14",
        mobile:6123457890,
        age:25,
        address:'Vellore',
        resume:'C:/fakepath/resume1.jpg',
        gender:"Male",
        status:true
      },
      {
        id:2,
        name:"Rajesh",
        email:'rajesh@gmail.com',
        birth:"2000-007-28",
        mobile:9123457554,
        age:"24",
        address:'Gudiyattam',
        resume:'C:/fakepath/resume2.jpeg',
        gender:"Male",
        status:true
      },
      {
        id:3,
        name:"Sesha",
        email:'sesha@gmail.com',
        birth:"1999-08-25",
        mobile:8123458520,
        age:"25",
        address:'Chennai',
        resume:'C:/fakepath/resume3.pdf',
        gender:"Male",
        status:true
      },
      {
        id:4,
        name:"Geetha",
        email:'geetha@gmail.com',
        birth:"1997-10-27",
        mobile:8123454521,
        age:"23",
        address:'Thirunelvali',
        resume:'C:/fakepath/resume4.pdf',
        gender:"Female",
        status:true
      },
      {
        id:5,
        name:"Piriya",
        email:'piriya@gmail.com',
        birth:"2001-05-05",
        mobile:9223457785,
        age:"24",
        address:'Madurai',
        resume:'C:/fakepath/resume5.pdf',
        gender:"Female",
        status:true
      },
    ])
    
 
  return <>
  <div className='wrappers'>
  <div id = "wrapper">

  
  <BrowserRouter> 
  <UserContext.Provider value={{user,setUser}} >
  <Routes >  
 
    <Route path='/login'                      element = { <Login/>} ></Route>

    <Route path='/signup'                     element = { <Signup/>} ></Route>

    <Route path='/welcome'                      element = { <SideBar/>}></Route>
    
    <Route path='/'                           element = { 
      <ProtectedRoutes>
        <Recruitment><SideBar/></Recruitment>
      </ProtectedRoutes>
     } ></Route>

    <Route path ='/dashboard'                 element = { 
      <ProtectedRoutes>
        <Dashboard/>
        </ProtectedRoutes> 
      }></Route>

    <Route path='/studentCreates'             element = { 
      <ProtectedRoutes>
      <StudentAndAppplication/>
      </ProtectedRoutes> 
    }></Route>

    <Route path='/schedule'                   element = { 
      <ProtectedRoutes>
      <InterviewScheduling/>
      </ProtectedRoutes>
      }></Route>

    <Route path='/company'                    element = { 
      <ProtectedRoutes>
        <AdminGuard>
        <CompanyCoordination/>
        </AdminGuard>
      </ProtectedRoutes>
      } ></Route>

    <Route path='/placement'                  element = { 
      <ProtectedRoutes>
      <AdminGuard>
      <PlacementDrivesManagement/>
      </AdminGuard>

    </ProtectedRoutes>} ></Route>
    <Route path='/status'                     element = { 
      <ProtectedRoutes>
      <RecruitmentStatusTracking/>
    </ProtectedRoutes>} ></Route>

    <Route path='/records'                    element = { 
      <ProtectedRoutes>
      <AdminGuard>
      <IntegrationWithAcademicRecords/>
      </AdminGuard>
    </ProtectedRoutes>} ></Route>

    <Route path = "/database/loginData"                 element = { 
      <ProtectedRoutes>
      <CompanyDatabaseIntegration/>
    </ProtectedRoutes>}/>

    <Route path = "/database/userData"                 element = { 
      <ProtectedRoutes>
      <CompanyDatabaseUsers/>
    </ProtectedRoutes>}/>

    <Route path = '/interface/:id' element = { 
      <ProtectedRoutes>
        <UserInterface/>
      </ProtectedRoutes>
    } />

    <Route path = '/viewEdit/:id'             element = { <ViewAndEdit/> } />

    <Route path = '/shortlist'                element = { 
      <ProtectedRoutes>
        <AdminGuard>
        <ShortList/>
        </AdminGuard>
      </ProtectedRoutes>
     } />

    <Route path = '/reject'                   element = { 
      <ProtectedRoutes>
        <AdminGuard>
        <Reject/>
        </AdminGuard>
      </ProtectedRoutes>
    } />

    <Route path='/reports'                    element={
      <ProtectedRoutes>
      <AdminGuard>
      <ReportsAndAnalytics/>
      </AdminGuard>
      </ProtectedRoutes>
      } ></Route>

    <Route path='*'                           element={<Navigate to='/login' />} ></Route>
  
  </Routes>
  </UserContext.Provider>
  </BrowserRouter>

  </div>
  </div>
  </>}
 
export default App
