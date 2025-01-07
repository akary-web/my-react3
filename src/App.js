
import { Home } from './home/Home';
import { Header } from './components/Header';
import { Detail } from './detail/Detail';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      {/* 【 Routes 】Linkで設定したパスごとに表示するルーティングの出しわけを行うためのコンポーネント。 */}
      <Routes>
        {/* 【 Route 】ルーティングで表示したいコンポーネントとそのパスを設定するコンポーネント。 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="posts/:id" element={<Detail />}></Route>
      </Routes>

    </>

  );
}

export default App;
