import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from './common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sierra p-8"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-sierra-dark">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sierra-orange focus:ring-sierra-orange"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sierra-dark">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sierra-orange focus:ring-sierra-orange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-sierra-dark">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sierra-orange focus:ring-sierra-orange"
          />
        </div>

        <Button type="submit" variant="primary" icon={Send} className="w-full">
          Skicka meddelande
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;