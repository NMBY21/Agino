import logo from './logo.svg';
import Farm from './pages/Farm/farm.pages';
import Field from './pages/Field/field.pages';
import SignupLanding from './pages/Landing/SignupLanding/signUpLanding.pages'
import FarmLanding from './pages/Landing/FarmLanding/farmLanding.pages';
import FieldLanding from './pages/Landing/FieldLanding/fieldLanding.pages';
import SensorLanding from './pages/Landing/SensorLanding/sensorLanding.pages'
import Help from './pages/Help/help.pages'
import FarmForm from './pages/Form/FarmForm/farmForm.pages';
import FieldForm from './pages/Form/FieldForm/fieldForm.component';
import SensorForm from './pages/Form/SensorForm/sensorForm.component';
import SignupForm from './pages/Form/SignupForm/signupForm.pages';
import Profile from './pages/Profile/Profile.pages';

import { BrowserRouter,Route ,Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.component';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions.pages';

import SimpleMap from './gogglemap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
	  		<NavBar/>
			<Routes>
				<Route path='/' element={<FarmLanding/>} />
				<Route path='/signUp' element={<SignupLanding/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/farm' element={<Farm/>} />
				<Route path='/field' element={<Field/>} />
				<Route path='/fieldLanding' element={<FieldLanding/>} />
				<Route path='/sensorLanding' element={<SensorLanding/>} />
				<Route path='/help' element={<Help/>} />
				<Route path='/farmForm' element={<FarmForm/>} />
				<Route path='/fieldForm' element={<FieldForm/>}/>
				<Route path='/sensorForm' element={<SensorForm/>}/>
				<Route path='signupForm' element={<SignupForm/>} />
				<Route path='map' element={<SimpleMap/>} />
				<Route path='/termsandconditions' element={<TermsAndConditions/>} />
			</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// AIzaSyBXEUMJ5JljujyZ5lEz8dlvjbG6SzFbum0