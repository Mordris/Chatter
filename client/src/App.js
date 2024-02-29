import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "318462605033-9us05bctq3ormo2o9mg43kkpgf95u1h0.apps.googleusercontent.com";

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <Messenger />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
