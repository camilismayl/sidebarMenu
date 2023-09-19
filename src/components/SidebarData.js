import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
export const SidebarData = {
    items: [
        {
          name: 'Home',
          url: '/home',
          icon:<AiIcons.AiFillHome/>,
          iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>
        },
        {
          name: 'About',
          url: '/about',
          icon:<AiIcons.AiFillAudio/>,
          iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>
        },
        {
          name: 'Products',
          url: '/products',
          icon:<AiIcons.AiFillHome/>,
          iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>,
          children: [
            {
              name: 'Sold',
              url: '/sold'
            },
            {
              name: 'In stock',
              url: '/in-stock'
            },
          ]
        },
        {
          name: 'Users',
          url: '/users',
          icon:<AiIcons.AiFillPlusCircle/>,
          iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>,
          children: [
            {
              name: 'All',
              url: '/all'
            },
            {
              name: 'Admins',
              url: '/admins'
            },
            {
              name: 'Banned',
              url: '/banned'
            },
          ]
        },
      ]
}