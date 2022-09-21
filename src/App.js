import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts";
import { AppContainer, Body } from "./AppStyledComponents";
import ContactDetails from "./Components/ContactDetails";
import Message from "./Components/Message";
import Otps from "./Components/Otps";

function App() {
  return (
    <AppContainer>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/message/:id" element={<Message />} />
          <Route path="/otps" element={<Otps />} />
        </Routes>
      </Body>
    </AppContainer>
  );
}

export default App;
