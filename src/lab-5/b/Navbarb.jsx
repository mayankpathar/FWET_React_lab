import React from 'react'
import { Link } from 'react-router-dom'

function Navbarb() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">lab React</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/A1">A1</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A2">A2</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A3">A3</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A4">A4</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A5">A5</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A6">A6</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A7">A7</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A8">A8</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A9">A9</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A10">A10</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A11">A11</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A12">A12</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A13">A13</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A14">A14</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/A15">A15</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbarb