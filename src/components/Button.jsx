import React from "react";
import styles from "../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:shadow-lg hover:shadow-[#5ce1e6] transform hover:-translate-y-1 transition duration-300 hover:text-dimWhite `}>
      Get Started
    </button>
  );
};

export default Button;
