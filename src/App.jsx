import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {
      id:101,
      name: 'Tiko',
      salary: 500000
    },
    {
      id:102,
      name: 'Hayk',
      salary: 300000
    },
    {
      id:103,
      name: 'Anna',
      salary: 600000
    },
    {
      id:104,
      name: 'Anahit',
      salary: 400000
    },
    {
      id:105,
      name: 'Arman',
      salary: 700000
    },
    {
      id:106,
      name: 'Karen',
      salary: 550000
    }
  ]);

  const salaryUp = id => {
    let temp = [...users];
    let obj = temp.find(x=>x.id == id);

    obj.salary += 50000;

    setUsers(temp);
  }

  const salaryDown = id => {
    let temp = [...users];
    let obj = temp.find(x=>x.id == id);

    if (obj.salary == 50000) {
      return
    }
    obj.salary -= 50000;
    setUsers(temp);
  }
  
  const removeUser = id => {
    let temp = [...users];
    let obj = temp.find(x=>x.id == id);

    temp.splice(obj, 1);

    setUsers(temp);
  }

  return (
    <>
      {/* <h1>barev {count} Erkir :D</h1>
      <h2>barev Venera {1 + 1} :D </h2>
      <button onClick={()=>setCount(count+1)}>up</button> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( us => 
              <tr key={us.id}> 
                <td>{us.id}</td>
                <td>{us.name}</td>
                <td>{us.salary}</td>
                <td>
                  <button onClick={()=>salaryUp(us.id)}>Salary Up</button>
                  <button onClick={()=>salaryDown(us.id)}>Salary Down</button>
                  <button onClick={()=>removeUser(us.id)}>Remove</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
