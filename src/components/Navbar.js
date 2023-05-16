import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'my projects',
        to: '/devportfolio',
        active: 'development portfolio'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'my music',
        to: '/musicportfolio',
        active: 'music portfolio'
    },
    {
        name: 'Blog',
        to: '/blog',
        active: 'about'
    },
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1rem', md: '6rem'}} width={'80vw'}
                 textTransform={'lowercase'} fontSize={{md:'1.5rem', xs:'1.2rem'}} paddingTop={'1.5vh'} paddingBottom={'2.0vh'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
/*
<li>
<Toggler darkMode={darkMode} handleClick={handleClick}/>
</li>
*/