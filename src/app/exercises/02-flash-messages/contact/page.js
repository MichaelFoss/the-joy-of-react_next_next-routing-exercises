'use client';
import React, { useContext } from 'react';
import { ToastContext } from '../../../../components/ToastProvider';
import { useRouter } from 'next/navigation';

function ContactPage() {
  const router = useRouter();
  const { createToast } = useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast('Got your message!', 'notice');
    router.push('/exercises/02-flash-messages');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
