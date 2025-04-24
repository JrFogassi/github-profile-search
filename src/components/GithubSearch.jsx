import React, { useState } from "react";
import axios from 'axios';
import GithubIcon from '../../public/github-icon.svg';
import GithubText from '../../public/github-text.svg';

export const GithubSearch = () => {
    const [username, setUsername] = useState("");

    return (
        <div className="main-container">
            <img src={GithubIcon} alt="" />
            <h1 className="main-heading">Perfil</h1>
            <img src={GithubText} alt="" />
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Digite um usuário do Github" value={username} className="search-input" onChange={(e) => setUsername(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}