import { ApolloProvider } from "@apollo/client";
import { Space } from "antd";
import tsm from "./Url";
import "./App.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/LeftSidebar/Sidebar";

function App() {
  return (
    <>
      <div className="MainApp">
        <ApolloProvider client={tsm}>
          <Header />
          <Space className="SideMenuPageContent">
            <Sidebar/>
           <PageContent/>
          </Space>
          <Footer/>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
