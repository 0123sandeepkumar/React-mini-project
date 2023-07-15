import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
//import MyApp2 from './Components/App2';



const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


function MyButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      I'm a button
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h1>My name is Sandeep The Last One Standing</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quia nemo exercitationem ut fugit laboriosam nisi dolores voluptatum architecto tempore debitis molestiae, incidunt aspernatur harum optio placeat in deserunt odio.</h2>
      <MyButton />
      <Profile />
      <ShoppingList />
      
    </div>
  );
}