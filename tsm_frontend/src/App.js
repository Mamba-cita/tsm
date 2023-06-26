import Header from "./components/Header";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./components/HomePage/Home";
import Registry from "./components/Registry/Registry";
import Finance from "./components/FinancePayment/Finance";
import Shipments from "./components/Shipments/Shipments"
import Moves from "./components/Moves/Moves"
import Analytics from "./components/Analytics/Analytics"
import Error from "./components/PageNotFound/Error"
import { Route, Routes } from "react-router-dom";


const client = new ApolloClient({
  uri: "http://localhost:5000/tsm",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
            <Routes>
              <Route path="/" element={ <Home /> }></Route>
              <Route path="/Shipments" element={ <Shipments /> }></Route>
              <Route path="/Moves" element={ <Moves /> }></Route>
              <Route path="/Registry" element={ <Registry /> }></Route>
              <Route path="/Finance" element={ <Finance /> }></Route>
              <Route path="/Analytics" element={ <Analytics /> }></Route>
              <Route path="*" element={ <Error /> }></Route>
              </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
