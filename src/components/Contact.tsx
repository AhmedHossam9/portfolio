'use client';


import { motion } from 'framer-motion';
import { Mail, Linkedin, Mail as MailIcon, Download } from 'lucide-react';
import { contactData } from '@/data/portfolio';
import { containerVariants, itemVariants, fadeInLeft, fadeInRight } from '@/animations/variants';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: contactData.email,
    link: `mailto:${contactData.email}`
  }
];

export default function Contact() {

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {contactData.title}
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {contactData.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {contactData.message}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <info.icon size={24} className="text-primary-600 dark:text-primary-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* CV Download Button */}
              <motion.a
                href="/Ahmed_Hossam_CV.pdf"
                download="Ahmed_Hossam_CV.pdf"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-400 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Download size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Download CV</h4>
                  <p className="text-white/90">Get my full resume in PDF format</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${contactData.email}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  <MailIcon size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
