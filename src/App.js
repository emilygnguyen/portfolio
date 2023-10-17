import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  NavLink
} from "react-router-dom";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Experience from './experience';
import Navbar from './navbar';
import Header from './header';

export default function App()
{
    return(
        <div>
            <Navbar/>
            <Header/>
            <Experience/>
        </div>
    );
}