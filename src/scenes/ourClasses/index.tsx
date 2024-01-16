import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
        "Dive into our Weight Training Classes for a transformative fitness journey. Led by experienced instructors, these sessions are crafted to boost muscle tone, power, and overall fitness. Enjoy personalized programs that cater to your unique goals and fitness level, ensuring a rewarding and effective weight training experience.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: 
        "Embark on a serene and rejuvenating journey with our Yoga Classes. Led by skilled instructors, these classes provide a tranquil space to explore various yoga styles, fostering flexibility, balance, and mindfulness. Whether you're a beginner or an experienced yogi, our classes cater to all levels, promoting physical well-being and mental harmony.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
        "Strengthen and sculpt your core with our Ab Core Classes. Guided by expert trainers, these sessions focus on targeted exercises to tone and define abdominal muscles. Engage in dynamic workouts designed for all fitness levels, ensuring a comprehensive approach to building a strong and resilient core.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
        "Dive into a transformative fitness journey with our diverse Fitness Classes. Led by expert instructors, these sessions cater to various preferences, providing a dynamic and engaging approach to achieving your health and wellness goals. Whether you're a beginner or seasoned fitness enthusiast, our classes offer a supportive and motivating environment for your fitness exploration.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: 
        "Immerse yourself in our diverse Fitness Classes, led by expert instructors. These sessions cater to various preferences, providing a dynamic and engaging approach to achieving health and wellness goals. Whether you're a beginner or a seasoned fitness enthusiast, our classes offer a supportive and motivating environment for your fitness journey.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
        "Engage in our dynamic Training Classes guided by expert instructors. These sessions are tailored to various fitness levels, providing a comprehensive and motivating approach to achieving your health and wellness goals. Whether you're a novice or an experienced fitness enthusiast, our classes offer a supportive environment for your fitness journey.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Discover a world of fitness variety with our extensive class offerings. 
            From invigorating high-intensity sessions to mindful practices, our classes are designed to meet diverse preferences. 
            Led by expert instructors, each session is a blend of fun and fitness, creating a dynamic and engaging workout environment. 
            Join our classes to experience the energy of group workouts, where motivating instructors guide you towards your fitness goals. 
            Whatever your fitness aspirations, our classes offer a tailored and enjoyable path to success.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;