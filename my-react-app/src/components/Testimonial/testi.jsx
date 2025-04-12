// import { motion } from "framer-motion";
// import styles from "./TestimonialsSection.module.css"; // Import CSS module


// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.",
//       image: "/girls.jpeg",
//       styleClass: "testimonialBoxPink",  // Class for Sarah's testimonial
//     },
//     {
//       name: "Climily Carter",
//       text: "A fantastic tool for early detection and awareness. Highly recommended!",
//       image: "/girls1.jpg",
//       styleClass: "testimonialBoxYellow", // Class for Climily's testimonial
//     },
//     {
//       name: "Michael Lee",
//       text: "This website provided me with valuable insights and reassurance.",
//       image: "/girls2.jpeg",
//       styleClass: "testimonialBoxGreen", // Class for Michael's testimonial
//     }
//   ];

//   return (
//     <div className={styles.testimonialsContainer}>
//       <div className={styles.testimonialsContent}>
//         <h2 className={styles.testimonialsHeader}>A good word means a lot</h2>
//         <p className={styles.testimonialsTitle}>Client Testimonials</p>
//         <p className={styles.testimonialsSubText}>
//           It’s always the word of mouth that’s the best advice.
//         </p>

//         <div className={styles.testimonialsGrid}>
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className={`${styles.testimonialBox} ${styles[testimonial.styleClass]}`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//             >
//               {/* Circular Image */}
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className={styles.testimonialImage}
//               />
//               <p className={styles.testimonialText}>“{testimonial.text}”</p>
//               <h4 className={styles.testimonialName}>- {testimonial.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;













// import { motion } from "framer-motion";
// import styles from "./TestimonialsSection.module.css";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.",
//       image: "/girls.jpeg",
//       styleClass: "testimonialBoxPink",
//     },
//     {
//       name: "Climily Carter",
//       text: "A fantastic tool for early detection and awareness. Highly recommended!",
//       image: "/girls1.jpg",
//       styleClass: "testimonialBoxYellow",
//     },
//     {
//       name: "Michael Lee",
//       text: "This website provided me with valuable insights and reassurance.",
//       image: "/girls2.jpeg",
//       styleClass: "testimonialBoxGreen",
//     },
//   ];

//   return (
//     <div className={styles.testimonialsContainerDark}>
//       <div className={styles.testimonialsContent}>
//         <h2 className={styles.testimonialsHeader}>A good word means a lot</h2>
//         <p className={styles.testimonialsTitle}>Client Testimonials</p>
//         <p className={styles.testimonialsSubText}>
//           It’s always the word of mouth that’s the best advice.
//         </p>

//         <div className={styles.testimonialsGrid}>
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className={`${styles.testimonialBox} ${styles[testimonial.styleClass]}`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className={styles.testimonialImage}
//               />
//               <p className={styles.testimonialText}>“{testimonial.text}”</p>
//               <h4 className={styles.testimonialName}>- {testimonial.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;







// import { motion } from "framer-motion";
// import styles from "./TestimonialsSection.module.css";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.",
//       image: "/girls.jpeg",
//       styleClass: "testimonialBoxPink",
//     },
//     {
//       name: "Climily Carter",
//       text: "A fantastic tool for early detection and awareness. Highly recommended!",
//       image: "/girls1.jpg",
//       styleClass: "testimonialBoxYellow",
//     },
//     {
//       name: "Michael Lee",
//       text: "This website provided me with valuable insights and reassurance.",
//       image: "/girls2.jpeg",
//       styleClass: "testimonialBoxGreen",
//     }
//   ];

//   return (
//     <div className={styles.testimonialsContainerDark}>
//       <motion.div
//         className={styles.testimonialsContent}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <h2 className={styles.testimonialsHeader}>A good word means a lot</h2>
//         <p className={styles.testimonialsTitle}>Client Testimonials</p>
//         <p className={styles.testimonialsSubText}>
//           It’s always the word of mouth that’s the best advice.
//         </p>
//       </motion.div>

//       <div className={styles.testimonialsGrid}>
//         {testimonials.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             className={`${styles.testimonialBox} ${styles[testimonial.styleClass]}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             <motion.img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className={styles.testimonialImage}
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 2,
//                 ease: "easeInOut",
//               }}
//             />
//             <p className={styles.testimonialText}>“{testimonial.text}”</p>
//             <h4 className={styles.testimonialName}>- {testimonial.name}</h4>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;















import { motion } from "framer-motion";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.",
      image: "/girls3.jpg",
      styleClass: "testimonialBoxPink",
    },
    {
      name: "Climily Carter",
      text: "A fantastic tool for early detection and awareness. Highly recommended!",
      image: "/girls1.jpg",
      styleClass: "testimonialBoxYellow",
    },
    {
      name: "Michael Lee",
      text: "This website provided me with valuable insights and reassurance.",
      image: "/girls2.jpeg",
      styleClass: "testimonialBoxGreen",
    }
    // {
    //   name: "Priya Desai",
    //   text: "I felt supported and informed throughout. This tool is a game-changer for women's health.",
    //   image: "/girls.jpeg",
    //   styleClass: "testimonialBoxPink",
    // }
  ];

  return (
    <div className={styles.testimonialsContainerDark}>
      <motion.div
        className={styles.testimonialsContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.testimonialsHeader}>A good word means a lot</h2>
        <p className={styles.testimonialsTitle}>Client Testimonials</p>
        <p className={styles.testimonialsSubText}>
          It’s always the word of mouth that’s the best advice.
        </p>
      </motion.div>

      <div className={styles.testimonialsRow}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`${styles.testimonialBox} ${styles[testimonial.styleClass]}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.testimonialImage}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <p className={styles.testimonialText}>“{testimonial.text}”</p>
            <h4 className={styles.testimonialName}>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;








