import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        key: name,
        value: value
      }
    });
  };

  return (
    <div>
      <h1>User Information</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={user.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </form>
      <div>
        <h2>Current User:</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default App;
