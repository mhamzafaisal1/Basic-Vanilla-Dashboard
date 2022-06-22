import React from 'react'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Assignment</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" aria-current="page" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/allprojects">All Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/allteams">All Teams</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/mytasks'>My Tasks</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header