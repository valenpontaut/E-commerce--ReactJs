import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Prop greeting from App.jsx to ItemListContainer.jsx"/>
    </>
  )
}

export default App
