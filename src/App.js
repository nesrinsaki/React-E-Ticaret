
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa"
import Musteri from "./Musteri"
import YeniMusteri from "./YeniMusteri"
import Urun from "./Urun"
import Siparis from "./Siparis";
import Odeme from "./Odeme";
import Tahsilat from "./Tahsilat";
import Sehir from "./Sehir";
import UrunKategorisi from "./UrunKategorisi";
import TahsilatTipi from "./TahsilatTipi";
import SiparisDurumu from "./SiparisDurumu";
import Login from "./Login";
import Logout from "./Logout";




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/Musteri" element={<Musteri />} />
          <Route path="/YeniMusteri" element={<YeniMusteri />} />
          <Route path="/Urun" element={<Urun />} />
          <Route path="/Siparis" element={<Siparis />} />
          <Route path="/Odeme" element={<Odeme />} />
          <Route path="/Tahsilat" element={<Tahsilat />} />
          <Route path="/Sehir" element={<Sehir />} />
          <Route path="/UrunKategorisi" element={<UrunKategorisi />} />
          <Route path="/TahsilatTipi" element={<TahsilatTipi />} />
          <Route path="/SiparisDurumu" element={<SiparisDurumu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default App;