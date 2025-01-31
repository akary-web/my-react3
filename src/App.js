
import { Home } from './home/Home';
import { Header } from './components/Header';
import { Detail } from './detail/Detail';
import { Route, Routes } from "react-router-dom"
import { Contact } from "./contact/Contact";

function App() {
  return (
    <>
      <Header />
      {/* 【 Routes 】Linkで設定したパスごとに表示するルーティングの出しわけを行うためのコンポーネント。 */}
      <Routes>
        {/* 【 Route 】ルーティングで表示したいコンポーネントとそのパスを設定するコンポーネント。 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="posts/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    </>

  );
}

export default App;
