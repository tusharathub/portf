import styles from './page.module.css';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import TargetCursor from "../../../../../bits/TargetCursor/TargetCursor";

export default function index() {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                        <TargetCursor
                            spinDuration={2}
                            hideDefaultCursor={true}
                        />
                            <a className='cursor-target'>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}