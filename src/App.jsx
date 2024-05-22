import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {
  return (
    <menu className='menu'>
      <Navbar />
      <ItemListContainer greeting={'Esta es mi tienda on line'}/>
    </menu>
  )
};

export default App
