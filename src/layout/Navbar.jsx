import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'
const navLinks = [
    {href:"#about",label:"About"},
    {href:"#projects",label:"Projects"},
    {href:"#experience",label:"Experience"},
    {href:"#testimonials",label:"Testimonials"},
]

export default function Navbar() {
    const[isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    const[isScrolled,setIsScrolled] = useState(false);
    const handleScroll=()=>{
        if(window.scrollY > 50){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>(window.removeEventListener("scroll",handleScroll))
    },[]);
  return (
    <div>
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3": "bg-transparent py-5"} z-50 `}>
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
                <a href="#contact"><Button size='sm'>Contact me</Button></a>
            </div>
            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-foreground cursor-pointer animate-fade-in' onClick={()=>(setIsMobileMenuOpen(()=>(!isMobileMenuOpen)))}>
                {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen &&(<div className='md:hidden glass-strong'>
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                {navLinks.map((link,index)=>(<a key={index} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className='text-lg text-muted-foreground hover:text-foreground py-2 '>{link.label}</a>))}
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}><Button>Contact me</Button></a>
                </div>

        </div>)}
        
        </header>
      
    </div>
  )
}
