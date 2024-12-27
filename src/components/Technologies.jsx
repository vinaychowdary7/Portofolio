import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiAwsamplify, SiExpress, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiTailwindcss} from "react-icons/si";
import {motion} from "framer-motion";


const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        
      <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiJavascript className="text-7xl text-yellow-400" />
      </motion.div>
        <motion.div
         variants={iconVariants(1)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiNodedotjs className="text-7xl text-green-600" />
      </motion.div>
      <motion.div variants={iconVariants(3.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiExpress className="text-7xl text-gray-700" />
      </motion.div>
      <motion.div variants={iconVariants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiPython className="text-7xl text-yellow-500" />
      </motion.div>
      <motion.div variants={iconVariants(4.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiTailwindcss className="text-7xl text-blue-400" />
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
