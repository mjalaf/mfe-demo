import './App.css';
// The remote component provided by federation_provider
import ProviderAstronauts from 'federation_provider/astronauts';

const App = () => {
  return (
    <div className="content">
      <h1>Main Container</h1>
      <div className='borderMicroFrontend'>
        <div>
          <h2>Astronauts Microfronend</h2>
        </div>
        <ProviderAstronauts />
      </div>
    </div>
  );
};

export default App;