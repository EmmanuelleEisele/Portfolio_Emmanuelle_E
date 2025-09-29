// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function NotFound() { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
    className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </motion.div>
  )
}