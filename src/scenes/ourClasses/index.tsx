import { SelectedPage, ClassType } from '@/shared/types'
import HText from '@/shared/HText'
import Class from './Class'

import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"

import { motion } from 'framer-motion'

const classes: Array<ClassType> = [
    {
        title: "Ab Core Trainning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
        image: image1,
    },
    {
        title: "Yoga Class",
        image: image2,
    },
    {
        title: "Endurance Trainning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
        image: image3,
    },
    {
        title: "Strength Trainning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
        image: image4,
    },
    {
        title: "Flexible Trainning",
        image: image5,
    },
    {
        title: "Fullbody Strength",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id='ourclasses' className='w-full bg-primary-100 py-40'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        {/* HEADER */}
        <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 },
            }}
        >
            
            <div className='md:w-3/5'>
                {/* TITLE */}
                <HText>
                    OUR CLASSES
                </HText>

                {/* DESCRIPT */}
                <p className="py-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa. 
                    Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat. 
                </p>
            </div>
        </motion.div>

        {/* CAROUSEL */}
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item: ClassType, index) => (
                    <Class 
                        key={`${item.title}-${index}`}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </ul>
        </div>
    </motion.div>    
  </section>
}

export default OurClasses