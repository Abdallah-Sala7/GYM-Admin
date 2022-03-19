import './EditProgram.css'
import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import SelectAutoWidth from '../new-program/days';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProgram } from '../../store/programSlice';

function EditProgram() {
  const [activeIndex,setActiveIndex] = useState(0)
  const data = [
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 100 },
    { name: 'Apr', value: 300 },
  ];

  const {program} = useSelector(state => state.programs) 
  const dispatch = useDispatch()
  const params = useParams()
  const programId = program[params.id - 1]

  const [name, setName] = useState(programId.name)
  const [price, setPrice] = useState(programId.price)
  const [member, setMember] = useState(programId.member)
  const [days, setDays] = useState(programId.days)
  const [img, setImg] = useState(programId.img)

  const target = (el) =>{
    setDays(el)
  }


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const onPieEnter = (_, index) => {
  setActiveIndex(index)
};


  return (
    <div className='container'>
        <div className="program-top">
          <div className="program-performance">
            <h4>Program Performance</h4>
            <div className="program-performance-chart">
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#764abc"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
            </PieChart>
            </ResponsiveContainer>
            </div>
          </div>
          <div className="program-info">
            <div className="img-box">
              <img src={img} alt="" />
              <h4>{name}</h4>
            </div>
            <p>
              <span>ID : </span> {programId.id}
            </p>
            <p>
              <span>Price : </span>  ${price}
            </p>
            <p>
              <span>Members : </span>  {member}
            </p>
            <p>
              <span>Active : </span>  yes
            </p>
            <p>
              <span>Day : </span>  {days}
            </p>
          </div>
        </div>
        <div className="program-bottom">
          <div className="program-left-form">
            <label htmlFor="Program Name">Program Name</label>
            <input 
              type="text" 
              defaultValue={name} 
              onChange={(e)=>setName(e.target.value)}
            />

            <label htmlFor="Price">Price</label>
            <input 
              type="number" 
              onChange={(e)=>setPrice(e.target.value)}
              defaultValue={price} 
            />

            <label htmlFor="Member">Member</label>
            <input 
              type="number" 
              defaultValue={member} 
              onChange={(e)=>setMember(e.target.value)}
            />

            <label htmlFor="days">per week</label>
            <div className="days">
              <SelectAutoWidth  targetfu = {target} />
            </div>

          </div>
          <div className="edit-upload">
                <div className="uploaud-img">
                  <input type="file"  
                    onChange={(e)=>setImg("/img"+e.target.value.slice(11,))}
                  />
                  <img src={img} alt="" />
                </div>
                <button
                  onClick={()=>dispatch(updateProgram({id:programId.id,img,name,days,price,member}))}
                >
                  Update
                </button>
          </div>
        </div>
    </div>
  )
}

export default EditProgram