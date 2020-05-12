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
import { DiHackernews } from "react-icons/di";
import { FaPodcast,FaRegLightbulb,FaUserCheck } from "react-icons/fa";



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
        title:'Video Tutorials',
        logo:  <FiVideo size={20} />,
        route:'#videos'
    },
    {
        id: 2,
        title:'Latest News',
        logo:  <DiHackernews size={20} />,
        route:'#news'
    },
    {
        id: 3,
        title:'Podcasts',
        logo:  <FaPodcast size={20} />,
        route:'#podcasts'
    },
    {
        id:4,
        title:'Assesments',
        logo: <FaRegLightbulb size={20} />,
        route:'#quiz'
    },
    {
        id:5,
        title:'Profile',
        logo: <FaUserCheck size={20} />,
        route:'#profile'
    },
    {
        id:6,
        title:'Settings',
        logo: <FiSettings size={20} />,
        route:'#settings'
    }
]



export  { JSLinks,SidebarLinks}