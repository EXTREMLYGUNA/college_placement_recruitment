/// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import SideBar from './components/SideBar'
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

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = React.createContext();
function App() {
  let [user,setUser] = useState([
      {
        id:1,
        name:"Guna",
        email:'guna@gmail.com',
        birth:"14/12/1999",
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
        birth:"28/07/2000",
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
        birth:"25/08/1999",
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
        birth:"27/10/1997",
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
        birth:"05/05/2001",
        age:"24",
        address:'Madurai',
        resume:'C:/fakepath/resume5.pdf',
        gender:"Female",
        status:true
      },
    ])
 
  return <div id = "wrapper">
  
  <BrowserRouter>
  <SideBar/> 
  <UserContext.Provider value={{user,setUser}} >
  <Routes>
    <Route path = '/' element = {<Dashboard/>}/>
    <Route path = '/dashboard' element = {<Dashboard/>}/>
    <Route path='/student' element={<StudentAndAppplication/>}></Route>
    <Route path='/schedule' element={<InterviewScheduling/>} ></Route>
    <Route path='/company' element={<CompanyCoordination/>} ></Route>
    <Route path='/placement' element={<PlacementDrivesManagement/>} ></Route>
    <Route path='/status' element={<RecruitmentStatusTracking/>} ></Route>
    <Route path='/records' element={<IntegrationWithAcademicRecords/>} ></Route>
    <Route path = "/database" element = {<CompanyDatabaseIntegration/>}/>
    <Route path = '/interface/:id' element = {<UserInterface/>} />
    <Route path = '/viewEdit/:id' element = {<ViewAndEdit/>} />
    <Route path = '/shortlist' element = {<ShortList/>} />
    <Route path = '/reject' element = {<Reject/>} />
    <Route path='/reports' element={<ReportsAndAnalytics/>} ></Route>
    <Route path='*' element={<Navigate to='/' />} ></Route>
  </Routes>
  </UserContext.Provider>
  </BrowserRouter>
    
  </div>
}
 
export default App
