import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../style.css";

export default function App() {
  const [view, setView] = useState("list");

  return (
    <div className="App">
      {/* 1. タイトルエリアをHeaderコンポーネントに任せる */}
      <Header view={view} setView={setView} />

      {/* 2. メインコンテンツ */}
      <Main view={view} />
      
      <Footer />
    </div>
  );
}