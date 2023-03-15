import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from "./Navbar.module.css"


function Navbar() {

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (


    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/registro" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>Novo post</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>


    </nav>
  );
}

export default Navbar;
