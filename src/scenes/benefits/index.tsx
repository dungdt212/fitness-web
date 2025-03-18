import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="w-6 h-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
    },
    {
        icon: <UserGroupIcon className="w-6 h-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
    },
    {
        icon: <AcademicCapIcon className="w-6 h-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 },
            }}
        >
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa. 
                Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat. 
            </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:flex md:mt-28">
            {/* GRAPHIC */}
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />

            {/* DESCRIPTION */}
            <div>
                <motion.div 
                    className="relative mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:50 },
                        visible: { opacity: 1, x:0 },
                    }}
                >
                    {/* TITLE */}
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <div className="md:my-5 md:w-3/5">
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <div>
                        <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa. 
                        Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat. 
                        Nullam ut est diam. In ut lacus et est elementum molestie.
                        </p>
                        <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa. 
                        Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat.    
                        </p>
                    </div>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16 z-0">
                    <motion.div 
                        className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x:50 },
                            visible: { opacity: 1, x:0 },
                        }}
                        
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </motion.div>
                </div>
            </div>

        </div>
    </motion.div>

  </section>
}

export default Benefits;