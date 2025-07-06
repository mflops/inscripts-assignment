import Header from "./components/Header"
import SpreadsheetTable from "./components/SpreadsheetTable"
import Toolbar from "./components/Toolbar"
import Footer from "./components/Footer"
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Toolbar />
      <SpreadsheetTable />
      <Footer />
    </div>
  )
}