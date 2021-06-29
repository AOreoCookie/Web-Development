import React, { useState } from 'react';
import * as FcIcons from 'react-icons/fc';
/* import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from "react-icons/hi";
import { ImBooks, ImLibrary, ImProfile, ImInfo} from "react-icons/im"; */

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FcIcons.FcHome />,
    cName: 'side-text'
  },
  {
    title: 'Command Team',
    path: '/command-team',
    icon: <FcIcons.FcAbout />,
    cName: 'side-text'
  },
  {
    title: 'News',
    path: '/news',
    icon: <FcIcons.FcNews />,
    cName: 'side-text'
  },
  {
    title: 'Alumni',
    path: '/almuni',
    icon: <FcIcons.FcDiploma1 />,
    cName: 'side-text'
  },
];