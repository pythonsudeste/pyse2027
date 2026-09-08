import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ButaoFlutuante from "./components/ButaoFlutuante"

export default function Layout() {
    return (<>
        <Header/>
        <ButaoFlutuante/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
    </>)
}