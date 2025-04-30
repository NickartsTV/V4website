
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import ThirdwebContext from './context/ThirdWeb.tsx'
import ContractsContext from './context/useContract.tsx'
import App from './App.tsx'
import "@/assets/css/sec1.css"
import "@/assets/css/sec2.css"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebContext>
    <ContractsContext>
      <ToastContainer />
      <App />
    </ContractsContext>
  </ThirdwebContext>
)
