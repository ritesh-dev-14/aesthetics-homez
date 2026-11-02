// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './pages/Home'
// import About from './pages/About'
// import Products from './pages/Products'
// import CollectionDetail from './pages/CollectionDetail'
// import Contact from './pages/Contact'
// import { AnimatePresence, motion } from 'framer-motion'

// function PageFrame({children}) {
//   return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}>{children}</motion.div>
// }
// export default function App() {
//   return <Routes><Route element={<Layout/>}>
//     <Route index element={<PageFrame><Home/></PageFrame>}/>
//     <Route path="/about" element={<PageFrame><About/></PageFrame>}/>
//     <Route path="/products" element={<PageFrame><Products/></PageFrame>}/>
//     <Route path="/products/:id" element={<PageFrame><CollectionDetail/></PageFrame>}/>
//     <Route path="/contact" element={<PageFrame><Contact/></PageFrame>}/>
//     <Route path="*" element={<PageFrame><main className="min-h-screen px-6 pt-48 text-center"><h1 className="font-display text-6xl">Page not found</h1><a href="/" className="text-link mt-8">Back home</a></main></PageFrame>}/>
//   </Route></Routes>
// }



import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import CollectionDetail from './pages/CollectionDetail'
import Contact from './pages/Contact'

function PageFrame({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <PageFrame>
                <Home />
              </PageFrame>
            }
          />
          <Route
            path="/about"
            element={
              <PageFrame>
                <About />
              </PageFrame>
            }
          />
          <Route
            path="/products"
            element={
              <PageFrame>
                <Products />
              </PageFrame>
            }
          />
          <Route
            path="/products/:id"
            element={
              <PageFrame>
                <CollectionDetail />
              </PageFrame>
            }
          />
          <Route
            path="/contact"
            element={
              <PageFrame>
                <Contact />
              </PageFrame>
            }
          />
          <Route
            path="*"
            element={
              <PageFrame>
                <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
                  <h1 className="font-serif text-6xl text-[#121212]">404</h1>
                  <p className="mt-4 text-sm text-black/60 uppercase tracking-widest">
                    Fabric Collection or Page Not Found
                  </p>
                  <a
                    href="/"
                    className="mt-8 bg-[#C5A038] text-[#121212] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#121212] hover:text-white transition-all"
                  >
                    Back to Home
                  </a>
                </main>
              </PageFrame>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}