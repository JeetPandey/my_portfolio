import React from 'react'
import Button from '../components/Button'
const navLinks = [
    {href:"#about",label:"About"},
    {href:"#projects",label:"Projects"},
    {href:"#experience",label:"Experience"},
    {href:"#tetstimonials",label:"Tetstimonials"},
]

export default function Navbar() {
  return (
    <div>
        <header className='fixed top-0 left-0 right-0 bg-transparent py-3'>
        <nav className='container mx-auto px-6 flex items-center justify-between'>
            <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
                Logo<span className='text-primary'>.</span>
            </a>
            {/* Desktop nav */}
        
            <div className='hidden md:flex items-center gap-1 '>
                <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                {navLinks.map((link,index)=>(<a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>{link.label}</a>))}
                </div>
            </div>

            {/* CTA Button */}
            <div className='hidden md:block'>
                <Button size='sm'>Contact me </Button>
            </div>
            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-foreground'></button>
        </nav>
        </header>
      
    </div>
  )
}
