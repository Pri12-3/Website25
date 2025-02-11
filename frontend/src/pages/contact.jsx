import React from "react";
import { FaEnvelope, FaInstagram, FaPhone, FaUserCircle } from "react-icons/fa";
import styles from "./Contact.module.css";

const heads = [
  { name: "Vishal S E", phone: "6381949514" },
  { name: "Priyadharshini E", phone: "8610131664" },
  { name: "V S Suriyaprakash", phone: "9940711761" },
];

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Contact Section</h1>
        <p className={styles.label}>For any queries reach out to us!!</p>
        <div className={styles.formGroup}>
          <FaEnvelope className={styles.contactIcon} />
          <a href="nssnittrichy@gmail.com" className={styles.input}>
            nssnittrichy@gmail.com
          </a>
        </div>

        <div className={styles.formGroup}>
          <FaInstagram className={styles.contactIcon} />
          <a 
            href="https://www.instagram.com/nss_nitt?igsh=cnE2aWNrdDdpZmM3" 
            className={styles.input}
          > INSTA ACCOUNT
          </a>
        </div>

        <button className={styles.button} type="button">Contact</button>

        <h2 className={styles.sectionTitle}>Core Members</h2>
        <div className={styles.teamContainer}>
          {heads.map((head, index) => (
            <div key={index} className={styles.memberBox}>
              <FaUserCircle className={styles.profileIcon} />
              <h3 className={styles.memberName}>{head.name}</h3>
              <p className={styles.memberPhone}>
                <FaPhone className={styles.phoneIcon} /> {head.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;