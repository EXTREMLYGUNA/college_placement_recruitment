/* eslint-disable no-unused-vars */
import React from 'react'
import TopBar from './TopBar'

function InterviewScheduling() {

  let Fruit = document.createElement("h2")
Fruit.innerText = ""
document.body.appendChild(Fruit)

function createAdd(){
  let div = document.createElement("div")
  div.setAttribute('id',"offer")
  div.innerHTML = "<h2>APPLY NOW !</h2>"
  document.body.appendChild(div)
}
setTimeout(()=>{
  createAdd()
},5000)

setTimeout(()=>{
  let div = document.getElementById('offer')
  div.remove()
},10000)

let counter =0
let Hour = 7
let Minutes =59
let Seconds = 60
let MilliSeconds = 100

setInterval(()=>{
  MilliSeconds--
  if(MilliSeconds===0){
      Seconds--
      MilliSeconds = 100
  }
  if(Seconds===0){
      Minutes--
      Seconds = 60
  }
  if(Minutes===0){
      Hour--
      Minutes = 59
  }
  let timer = document.getElementById('timer')
timer.innerHTML = `<b style="color:red;">Offers end in</b>  ${Hour}<sub> Hour</sub> : ${Minutes}<sub>Minutes</sub> : ${Seconds}<sub>Seconds</sub> : ${MilliSeconds}<sub>MilliSeconds</sub>`
},10)

  return (<>
    <div className='p-3'>
      <TopBar/>
      <h1>Interview Scheduling</h1>
      <div style={{marginLeft:"100px"}}>
      <h2 style={{align:"center", color: 'orange'}}>
        March 2025
    </h2>
    <br />
    <table>
 
        <caption align="top"></caption>
 
        <thead style={{textAlign:'center'}}>
            <tr>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Sun</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Mon</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Tue</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Wed</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Thu</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Fri</th>
                <th style={{color: 'white', backgroundColor: 'purple'}}>
                    Sat</th>
            </tr>
        </thead>
 
        <tbody style={{textAlign:'center',borderRadius:'50%'}} >
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td style={{backgroundColor:'#98999b',color:'red',borderRadius:'50%'}} >
                  5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
            </tr>
            <tr>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
            </tr>
            <tr>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
            </tr>
            <tr>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
            </tr>
            <tr>
                <td>30</td>
                <td>31</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
      </div>
    <div id="counter">
        <div id="timer">
            <h2><b>Offers end in</b>  00<sub> Hour</sub> : 00<sub>Minutes</sub> : 00<sub>Seconds</sub> : 00<sub>MilliSeconds</sub></h2>
        </div>
    </div>
    </div>
    </>)
}

export default InterviewScheduling

