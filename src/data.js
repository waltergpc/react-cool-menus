import { FaCreditCard, FaUserCheck, FaBriefcase } from 'react-icons/fa'
import {
  GiCupcake,
  GiStairsCake,
  GiCakeSlice,
  GiStorkDelivery,
} from 'react-icons/gi'
import { AiOutlineGift } from 'react-icons/ai'
import React from 'react'
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'personalization', icon: <FaUserCheck />, url: '/products' },
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'delivery', icon: <GiStorkDelivery />, url: '/products' },
    ],
  },
  {
    page: 'create',
    links: [
      { label: 'pastries', icon: <GiCupcake />, url: '/products' },
      { label: 'cakes', icon: <GiStairsCake />, url: '/products' },
      { label: 'pies', icon: <GiCakeSlice />, url: '/products' },
      { label: 'special', icon: <AiOutlineGift />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
]

export default sublinks
