import Homepage from "./components/homepage";
import ImageUploadPage from "./components/image-upload-page";
import NotFound from "./components/not-found";
import NutriScan from "./components/nutriscan";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/insights" element={<NutriScan /> } />
        <Route path="/try-nutriscan" element={<ImageUploadPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>      
    </>
  );
}
