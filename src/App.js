import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { SearchAndFilterPage } from './Pages/Search'
// import { Names } from './Pages/Name'
// import { Source } from './Pages/Source';
import { NavBar } from './Components/Navbar'
import { AlternativeMaterialsLib } from './Pages/AlternativeMaterialsLib'
import { Footer } from './Components/Footer';
import { TypeOfMaterial } from './Pages/TypeOfMaterials';
import { NameOfMaterial } from './Pages/NameOfMaterial';
import { MaterialsOfProducer } from './Pages/MaterialsOfProducer';
import { TypeSearch } from './Pages/TypeSearch';
import { SearchAndFilterPage } from './Pages/AdvancedSearch';
import { SearchWith } from './Pages/SearchWith/SearchWith';
import { SearchWithType } from './Pages/SearchWith/Type';
import { Material, SearchWithName } from './Pages/SearchWith/Name';
import { MainPage } from './Pages/MainPage';
import { AlternativeMaterial } from './Components/AlternativeMaterial';


function App() {


  return (
    <div style={{}}>
      <NavBar />
      <AlternativeMaterial />

      <Router>
        <Routes>
          <Route path='' element={<MainPage />} />
          {/* <Route path='' element={<AlternativeMaterialsLib />} /> */}
          <Route path='/TypeOfMaterial/:id' element={<TypeOfMaterial />} />
          <Route path='/NameOfMaterial/:id' element={<NameOfMaterial />} />
          <Route path='/MaterialsOfProducer/:id' element={<MaterialsOfProducer />} />
          <Route path='/TypeSearch' element={<TypeSearch />} />
          <Route path='/AdvancedSearch' element={<SearchAndFilterPage />} />
          <Route path='/SearchWith' element={<SearchWith />} />
          <Route path='/SearchWith/Type/:id' element={<SearchWithType />} />
          <Route path='/SearchWith/Name/:id' element={<SearchWithName />} />
        </Routes>
      </Router>

      <Footer />


    </div>
  );
}

export default App;
