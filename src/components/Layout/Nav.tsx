import {Link} from "react-router";

export const Nav = () => {
    return (
        <nav className="fixed top-0 w-full bg-gray-800 py-4">
            <div className="container mx-auto">
                <ul className="flex justify-center items-center gap-10">
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded
                                      bg-blue-600 hover:bg-blue-700
                                      text-white font-medium">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/form" className="block py-2 px-4 rounded
                                      bg-blue-600 hover:bg-blue-700
                                      text-white font-medium">S'inscrire</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}