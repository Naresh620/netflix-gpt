import React from 'react'
import Header from './Header'

const Browse = () => {
  return (
    <div><Header/></div>
  )
}

const data = {
  12345: [
    {
      name: "tibaker",
      age: 25
    }
  ]
};

// Get the dynamic key
const dynamicKey = Object.keys(data)[0];  // gets '12345'

// Access the array using dynamicKey
const userArray = data[dynamicKey];

// Map over the array to get age
userArray.forEach(user => {
  console.log(user.age);  // Output: 25
});

export default Browse