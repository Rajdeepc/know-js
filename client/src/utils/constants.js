import React from 'react';

import {
    javascript,
    react,
    redux,
    vue,
    angular,
    flutter,
    ionic,
    mongodb,
    nodejs,
    svelte,
    reactnative,
    ds
} from '../assets/images/images';
import { AiOutlineHome } from "react-icons/ai";
import { FiVideo, FiSettings } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";



const JSLinks = [
    {
        id:1,
        core: 'Data Structures',
        value:"data structures in programming tutorials",
        img:ds
    },
    {
        id:2,
        core: 'JavaScript',
        value:"javascript tutorials",
        img:javascript
    },
    {
        id:3,
        core: 'React',
        value:"react tutorials",
        img:react
    },
    {
        id:4,
        core: 'Redux',
        value:"redux tutorials",
        img:redux
    },
    {
        id:5,
        core: 'Vue',
        value:"vue js tutorials",
        img:vue
    },
    {
        id:6,
        core: 'Svelte',
        value:"svelte tutorials",
        img:svelte
    },
    {
        id:7,
        core: 'Angular',
        value:"angular tutorials",
        img:angular
    },
    {
        id:8,
        core: 'React Native',
        value:"react native tutorials",
        img:reactnative
    },
    {
        id:9,
        core: 'Flutter',
        value:"flutter tutorials",
        img:flutter
    },
    {
        id:10,
        core: 'MongoDB',
        value:"mongodb database tutorials",
        img:mongodb
    },
    {
        id:11,
        core: 'Node',
        value:"nodejs tutorials",
        img:nodejs
    }
]


const SidebarLinks = [
    {
        id:0,
        title:'Home',
        logo:  <AiOutlineHome size={20} /> ,
        route:'#/'
    },
    {
        id:1,
        title:'Videos',
        logo:  <FiVideo size={20} />,
        route:'#videos'
    },
    {
        id:2,
        title:'Quiz',
        logo: <RiTimerLine size={20} />,
        route:'#quiz'
    }
]



export  { JSLinks,SidebarLinks}