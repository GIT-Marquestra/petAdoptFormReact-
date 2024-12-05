import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [tables, setTables] = useState([]);
  const [isFilling, setIsFilling] = useState(true);
  const [form, setForm] = useState({
    petName: '',
    petType: '',
    breed: '',
    yourName: '',
    email: '',
    number: '',
  });

  function addTables() {
    setTables([...tables, form]);
    setForm({
      petName: '',
      petType: '',
      breed: '',
      yourName: '',
      email: '',
      number: '',
    });
    setIsFilling(false);
  }

  function change(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function toggleIsFilling() {
    setIsFilling((e) => !e);
  }

  const tableComponents = tables.map((table, index) => (
    <TableComponent key={index} {...table} />
  ));

  return (
    <div className="container">
      {isFilling ? (
        <div>
          <h2>Enter Pet Details</h2>
          <input
            onChange={change}
            type="text"
            placeholder="Pet Name"
            name="petName"
            value={form.petName}
          />
          <input
            onChange={change}
            type="text"
            placeholder="Pet Type"
            name="petType"
            value={form.petType}
          />
          <input
            onChange={change}
            type="text"
            placeholder="Breed"
            name="breed"
            value={form.breed}
          />
          <input
            onChange={change}
            type="text"
            placeholder="Your Name"
            name="yourName"
            value={form.yourName}
          />
          <input
            onChange={change}
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
          />
          <input
            onChange={change}
            type="number"
            placeholder="Phone"
            name="number"
            value={form.number}
          />
          <button className="submit-btn" onClick={addTables}>
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h2>Submitted Pet Details</h2>
          {tableComponents}
          <button className="add-btn" onClick={toggleIsFilling}>
            Add Another Entry
          </button>
        </div>
      )}
    </div>
  );
}

function TableComponent({ petName, petType, breed, yourName, email, number }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{petName}</td>
            <td>{petType}</td>
            <td>{breed}</td>
            <td>{yourName}</td>
            <td>{email}</td>
            <td>{number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;