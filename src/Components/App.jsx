import { useState } from "react";
import AuthPage from "./AuthPage";

function App() {

  const [selectedLogin, setSelectedLogin] = useState(null);

  const handleButtonClick = (visitorCategory) => {
    setSelectedLogin(visitorCategory);
  }

  return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        {!selectedLogin ? (
          <div>
            <h2>Select a login type</h2>
            <button onClick={() => handleButtonClick('User')}>User</button>
            <button onClick={() => handleButtonClick('CC')} >Content Creator</button>
            <button onClick={() => handleButtonClick('AI')} >Angel Investor</button>
          </div>
        ) : (
          <AuthPage userType={selectedLogin}/>
        )}
      </div>
    );
}

export default App;