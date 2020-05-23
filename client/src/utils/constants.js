import React from 'react';

import {
    javascript,
    react,
    redux,
    vue,
    angular,
    flutter,
    mongodb,
    nodejs,
    svelte,
    reactnative,
    ds
} from '../assets/images/images';
import { FiVideo } from "react-icons/fi";

const isLoggedIn = JSON.parse(sessionStorage.getItem('state'))

const JSLinks = [
    {
        id:'categrory1',
        core: 'Data Structures',
        value:"data structures tutorials",
        img:ds,
        routeName:'datastructure'
    },
    {
        id:'categrory2',
        core: 'JavaScript',
        value:"javascript tutorials",
        img:javascript,
        routeName:'javascript'
    },
    {
        id:'categrory3',
        core: 'React',
        value:"react tutorials",
        img:react,
        routeName:'react'
    },
    {
        id:'categrory4',
        core: 'Redux',
        value:"redux tutorials",
        img:redux,
        routeName:'redux'
    },
    {
        id:'categrory5',
        core: 'Vue',
        value:"vue js tutorials",
        img:vue,
        routeName:'vue'
    },
    {
        id:'categrory6',
        core: 'Svelte',
        value:"svelte tutorials",
        img:svelte,
        routeName:'svelte'
    },
    {
        id:'categrory7',
        core: 'Angular',
        value:"angular tutorials",
        img:angular,
        routeName:'angular'
    },
    {
        id:'categrory8',
        core: 'React Native',
        value:"react native tutorials",
        img:reactnative,
        routeName:'reactnative'
    },
    {
        id:'categrory9',
        core: 'Flutter',
        value:"flutter tutorials",
        img:flutter,
        routeName:'flutter'
    },
    {
        id:'categrory10',
        core: 'MongoDB',
        value:"mongodb database tutorials",
        img:mongodb,
        routeName:'mongodb'
    },
    {
        id:'categrory11',
        core: 'Node',
        value:"nodejs tutorials",
        img:nodejs,
        routeName:'nodejs'
    }
]


const SidebarLinks = [
    {
        id:'sidebar1',
        value:'saved_videos',
        title:'My Saved Videos',
        logo:  <FiVideo size={20} />,
        route:'/videos',
        isLogged: false
    }
]



export  { JSLinks,SidebarLinks}