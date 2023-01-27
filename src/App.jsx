import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Prop greeting desde App.jsx a ItemListContainer.jsx"/>
    </>
  )
}

export default App
