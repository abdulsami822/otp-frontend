import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts";
import { AppContainer, Body } from "./AppStyledComponents";
import ContactDetails from "./Components/ContactDetails";

function App() {
  return (
    <AppContainer>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/:id" element={<ContactDetails />} />
        </Routes>
      </Body>
    </AppContainer>
  );
}

export default App;
