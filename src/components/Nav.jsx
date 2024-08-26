import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../styles.scss"

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: <Link to="/">Home</Link>
  },
  {
    id: 1,
    navTitle: <Link to="/studioexperience">Estudio</Link>
  },
  {
    id: 2,
    navTitle: <Link to="/studioboutique">LA PUERTA Boutique</Link>
  },
  {
    id: 3,
    navTitle: <Link to="/masterclass">Formaciones</Link>
  },
  {
    id: 4,
    navTitle: <Link to="/aboutus">Sobre Nosotros</Link>
  },
  {
    id: 5,
    navTitle: <Link to="/contactus">Contáctanos</Link>
  }
]


const Nav = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="container-nav container-fluid">
      <div className="row">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          <div className="col-lg-4 col-md-4 col-2"></div>

          <div className="logo-container  col-lg-4 col-md-4 col-8">

            <Link to="/" className="d-flex justify-content-center">
              <motion.img className="logoHeader" variants={hideNavItemsVariant} src="/logolapuertawhite.png" alt="" />
            </Link>

          </div>
          <div className="menu-container col-lg-4 col-md-4 col-2 d-flex justify-content-end align-items-center">
            <motion.div
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
              <img src="/HamburgerWhite.svg" className="menuNav" />

            </motion.div>
          </div>

          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <motion.div className="d-flex col-lg-12 col-md-12 col-12 pt-5">

              <motion.div className="col-lg-4 col-md-4 col-4 "></motion.div>

              <motion.div className="lapuertaLogoToggle col-lg-4 col-md-4 col-4">
                <img src="/LogoFooter.png" alt="La Puerta Estudios" />
              </motion.div>

              <motion.button
                className="xIconoToggle col-lg-4 col-md-4 col-4 d-flex justify-content-end align-intems-center "
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}>
                <i class="bi bi-x-lg closeNav"></i>
              </motion.button>

            </motion.div>

            <motion.div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center mt-5 col-lg-12 col-md-12 col-12">

              <motion.ul variants={ulVariant} className="ulFirst col-lg-6 col-md-6 col-12 ">
                {MOBILE_NAV_ITEMS.map(navItem => (
                  <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                    <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
                  </motion.li>
                ))}
              </motion.ul>

            </motion.div>

          </motion.div>

        </motion.nav>
      </div>
    </main>
  )
}

export default Nav
