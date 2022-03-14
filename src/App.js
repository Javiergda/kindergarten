import { AppRouter } from "./components/Routes/AppRouter";
import { AuthContext } from "./auth/authContext";

function App() {

  const initialValue = JSON.parse(localStorage.getItem('user')) || { // mira si esta logeado
    id: '',
    email: '',
    user_type: 0,
    logged: false,
    token: ''
  };

  console.log(initialValue);

  return (
    <AuthContext.Provider value={initialValue}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
