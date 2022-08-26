import Form from '../components/auth/Form';
import Header from '../components/Header';
import { motion } from 'framer-motion';
const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Form />
    </motion.div>
  );
};

export default Login;
