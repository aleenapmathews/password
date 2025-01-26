import About from "./component/about";
import Body from "./component/body";
import Footer from "./component/footer";
import Header from "./component/header";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div>
      <Header setPage={setPage}></Header>
    
      {page === "home" ? <Body></Body> : <About></About>}
      <Footer></Footer>
    </div>
  );
}
