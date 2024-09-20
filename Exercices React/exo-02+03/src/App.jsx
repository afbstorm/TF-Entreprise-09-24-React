import './App.css'
import List from "./components/Exo collections/List/list.jsx";
import Compteur from "./components/Exo compteur/Compteur/compteur.jsx";

function App() {
  // Exercice Collections :
  //   const productList = [
  //       {id: 1, price: 0.89, name: 'Pomme', isPromo: false},
  //       {id: 2, price: 1.19, name: 'Poire', isPromo: false},
  //       {id: 3, price: 5.79, name: 'Banane', isPromo: true}
  //   ]
  return (
    //  Exercice Collections :
    // <div>
    //     <List productList={productList} />
    // </div>

      // Exercice Compteur :
      <div>
          <Compteur increment={2} />
      </div>
  )
}

export default App
