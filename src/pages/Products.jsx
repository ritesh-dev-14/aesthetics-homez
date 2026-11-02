import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search } from 'lucide-react'
import Reveal from '../components/Reveal'
import CollectionCard from '../components/CollectionCard'
import { collections } from '../data'

export default function Products() {
  const [filter,setFilter] = useState('All')
  const [query,setQuery] = useState('')
  const filters = ['All',...collections.flatMap(c=>c.categories)]
  const shown = useMemo(()=>collections.filter(c=>(filter==='All'||c.categories.includes(filter)) && `${c.title} ${c.description} ${c.categories.join(' ')}`.toLowerCase().includes(query.toLowerCase())),[filter,query])
  return <>
    <section className="inner-hero"><div className="mx-auto max-w-7xl px-5 pb-16 pt-44 sm:px-8 sm:pb-24"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow mb-5">Our collections</motion.p><motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="font-display text-6xl leading-none sm:text-8xl">Made for the<br/><em className="text-gold">way you live.</em></motion.h1><p className="mt-7 max-w-2xl text-base leading-8 text-black/55">Explore premium curtains, designer blinds and upholstery fabrics curated for considered interiors.</p></div></section>
    <section className="section-space pt-8"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-10 flex flex-col gap-5 border-b border-black/10 pb-6 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-wider transition ${filter===f?'border-gold bg-gold text-white':'border-black/15 hover:border-gold'}`}>{f}</button>)}</div><label className="flex items-center gap-3 border-b border-black/20 py-2"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search collections..." className="w-full bg-transparent text-sm outline-none sm:w-52"/></label></div>
      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">{shown.map((item,i)=><motion.div layout key={item.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}><CollectionCard item={item} index={i}/></motion.div>)}</AnimatePresence></motion.div>
      {shown.length===0&&<p className="py-20 text-center font-display text-3xl">No matching collections found.</p>}
    </div></section>
  </>
}
