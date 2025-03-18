import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) return;
    };
    

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 py-3 px-5 placeholder-white`;

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> {" "} TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.
                    Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat.
                </p>
            </motion.div>

            {/* FORM AND GRAPHIC */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/0ef9c886fed8f2805e9014f4f372a465"
                        method="POST"
                    >
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required!"}
                                {errors.name.type === "maxLength" && "Max length is 100 char!"}
                            </p>
                        )}

                        <input 
                            className={inputStyles}
                            type="email"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required!"}
                                {errors.email.type === "pattern" && "Invalid email address"}
                            </p>
                        )}

                        <textarea 
                            className={inputStyles}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required!"}
                                {errors.message.type === "maxLength" && "Max length is 2000 char!"}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg px-20 py-3 bg-secondary-500 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0 z-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">                       
                        <img
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs