import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-primary mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a className="text-gray-200">Item 1</a></li>
                        <li><a className="text-gray-200">Item 2</a></li>
                        <li><a className="text-gray-200">Item 3</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl text-gray-100" to={'/'}>pManager</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-gray-200">Item 1</a></li>
                    <li><a className="text-gray-200">Item 2</a></li>
                    <li><a className="text-gray-200">Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                <span className="material-symbols-outlined">
                notifications
                </span>
                    <span className="badge badge-xs badge-primary indicator-item bg-secondary"></span>
                </div>
            </button>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://lh3.googleusercontent.com/a/AAcHTtcIVhWfcRcm2qR9TOty6Vq7aJKJJhwt-rHCbEpUVkvAVAI=s288-c-no" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
            </div>
        </div>

    )
}

export default Navbar