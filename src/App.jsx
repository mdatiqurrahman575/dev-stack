import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import TechnologySection from './component/TechnologySection';
import Footer from './component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const [tools, setTools] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('./technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Data fetch korte somossa hoise:', err);
        setLoading(false);
      });
  }, []);

  const addStack = (tech) => {
    const isExist = stack.find((item) => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} check koren, already ase!`, { autoClose: 2000 });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} add hoise successfully!`, { autoClose: 2000 });
  };

  const removeItem = (id) => {
    const remaining = stack.filter((item) => item.id !== id);
    setStack(remaining);
    toast.info('Item delete kora hoise.', { autoClose: 2000 });
  };

  const clearAll = () => {
    setStack([]);
    toast.error('Sob item kete deya hoise!', { autoClose: 2000 });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-2 text-sm font-semibold">Loading Tools...</p>
        </div>
      ) : (
        <TechnologySection
          technologies={tools}
          stack={stack}
          onAddToStack={addStack}
          onRemoveFromStack={removeItem}
          onClearStack={clearAll}
        />
      )}

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
