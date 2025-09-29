import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./context/AuthProvider"
import Routers from "./routers/Routers"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    
      <AuthProvider>
           <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
            <Routers></Routers>
            </main>
         <Footer></Footer>
          </div>

      </AuthProvider>
  
  )
}

export default App;


