import React, { use, useState } from "react";
import axios from 'axios';
import GithubIcon from '../../public/github-icon.svg';
import GithubText from '../../public/github-text.svg';
import SearchIcon from '../../public/search-icon.svg';
import './GithubSearch.css';

export const GithubSearch = () => {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(response.data);
            setError(null);
        } catch (error) {
            setProfile(null);
            setError('Nenhum perfil foi encontrado com esse nome de usuário. \nTente novamente');
        }
    }
    return (
        <div className="main-container">
            <div className="github-logo">
                <img src={GithubIcon} alt="" />
                <h1 className="main-heading">Perfil</h1>
                <img src={GithubText} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="search-form">
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <input type="text" placeholder="Digite um usuário do Github" value={username} className="search-input" onChange={(e) => setUsername(e.target.value)}></input>
                <div className="search-icon-background">
                    <button type="submit" className="search-button"><img src={SearchIcon} alt="" className="search-icon"/></button>
                </div>               
            </form>
            
            {error && (
            <div className="error-container">
            <p className="error-message">{error}</p>
            </div> 
            )}  
            {profile && (
                <div className="profile-container">
                    <div className="profile-content">
                        <div className="profile-image">
                            <img src={profile.avatar_url} alt="Avatar" className="profile-avatar"/>
                        </div>
                        <div className="profile-details">
                            <div className="profile-description">
                                <h2 className="profile-name">{profile.name}</h2>
                                <p className="profile-bio">{profile.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}