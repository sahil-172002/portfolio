import { Outlet } from "react-router-dom"
import { Navbar } from "./components"
import Footer from "./components/Footer"

function Layout() {
    return (
        <div className="w-full h-full min-h-screen p-5 text-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="w-full max-w-2xl mx-auto py-10">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default Layout