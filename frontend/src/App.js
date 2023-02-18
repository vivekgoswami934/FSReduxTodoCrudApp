import { useSelector } from 'react-redux';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Loader from './Components/Loader';
import Loader2 from './Components/Loader2';

function App() {

 
   const appLoading = useSelector(state => state.AppReducer.isLoading)
   const authLoading  = useSelector(state => state.AuthReducer.isLoading)

    if(authLoading) return <Loader />
    // if(appLoading) return <Loader2 />

  return <AllRoutes />
}

export default App;
