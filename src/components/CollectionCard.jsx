import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CollectionCard({ item, index = 0 }) {
  return (
    <motion.article initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,delay:index*.1}} className="group">
      <Link to={`/products/${item.id}`} className="block">
        <div className="image-frame relative aspect-[4/5] overflow-hidden bg-sand">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"/>
          <span className="absolute left-5 top-5 bg-ivory px-3 py-2 text-[10px] tracking-[.2em]">{item.number}</span>
          <span className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-gold text-white transition duration-300 group-hover:rotate-45 group-hover:bg-ink"><ArrowUpRight size={20}/></span>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-black/15 py-5">
          <div><h3 className="font-display text-3xl">{item.title}</h3><p className="mt-2 text-sm text-black/50">{item.subtitle}</p></div>
          <span className="pt-2 text-[9px] uppercase tracking-[.16em] text-gold">Discover</span>
        </div>
      </Link>
    </motion.article>
  )
}
