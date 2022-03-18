import { useState,useEffect } from 'react'
import {Addchart, ArrowDownwardOutlined, ArrowUpwardOutlined, EuroSharp, GroupOutlined, ShowChart} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Visibility} from '@mui/icons-material';

import './Home.css'
import axios from 'axios';

function Home() {
  const [costs, setCosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('./api.json')
    .then(res => {
      setCosts(res.data[0].costs)
      setUsers(res.data[0].user)

    })
  },[])
  
const data = [
  {
    name: 'Jan',
    "active user":4000
  },
  {
    name: 'Feb',
    "active user":3000
  },{
    name: 'Mar',
    "active user":4000
  },{
    name: 'Apr',
    "active user":5000
  },{
    name: 'May',
    "active user":2000
  },{
    name: 'Jun',
    "active user":4000
  },{
    name: 'Jul',
    "active user":3000
  },{
    name: 'Agu',
    "active user":1000
  },{
    name: 'Sep',
    "active user":5000
  },{
    name: 'Oct',
    "active user":4000
  },{
    name: 'Nov',
    "active user":2000
  },{
    name: 'Dec',
    "active user":3000
  },
  
];
  return (
    <div className='home'>    
      <div className="costs">
        {costs.map(item => <div key={item.id} className="cost-box">
            <h4>{item.name}</h4>
            <div className='cost-number'>
              <span>{item.total}</span>
              { item.changes  > 0 ? <span>+{item.changes} </span>: <span>{ item.changes }</span>}
              {item.changes > 0 ? 
                <span className='up-arrow'><ArrowUpwardOutlined /> </span> 
                :<span className='down-arrow'><ArrowDownwardOutlined /></span>  
              }
            </div>   
            <p>Compared to last month</p>       
          </div>
        
        )}
      </div>

      <h3 className="user-h3">
        User Analytics
      </h3>

      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis dataKey="name" stroke='#764abc'/>
            <Line type="monotone" dataKey="active user" stroke="#764abc" activeDot={{ r: 8 }}/>
            <Tooltip />
            <CartesianGrid stroke='#80808063' strokeDasharray="5 5" />
            {/* <YAxis stroke='#764abc'/> */}

          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="new-status">
        <div className="new-members">
          <h3>New Join Members</h3>
          <div className="member-box">
            {users.map(item => <div key={item.id} className="one-member">
              <img src={item.img}/>
              <div className="member-info">
                <p>{item.name}</p>
                <span>{item.job}</span>
              </div>
              <span className="display">
                <Visibility />
                View
              </span>
            </div>)}
            
          </div>
        </div>
        <div className="status">
          <div className="one-status">
            <div className="status-info">
              <h4>total sales</h4>
              <p>2350</p>
            </div>
            <span className="status-icon">
              <Addchart />
            </span>
          </div>
          <div className="one-status">
            <div className="status-info">
              <h4>total user</h4>
              <p>3605</p>
            </div>
            <span className="status-icon">
              <GroupOutlined />
            </span>
          </div>
          <div className="one-status">
            <div className="status-info">
              <h4>total earning</h4>
              <p>2000</p>
            </div>
            <span className="status-icon">
              <EuroSharp />
            </span>
          </div>
          <div className="one-status">
            <div className="status-info">
              <h4>total visitors</h4>
              <p>1452</p>
            </div>
            <span className="status-icon">
              <ShowChart />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home