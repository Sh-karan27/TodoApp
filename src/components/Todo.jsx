import React from 'react';
import Header from './Header';
import Status from './Status';
import Projects from './Projects';
import Labels from './Labels';
import Footer from './Footer';

const Todo = () => {
  return (
    <section className='w-[400px] h-[700px] flex flex-col items-center justify-between bg-[#141B28] rounded-2xl overflow-hidden '>
      <Header />
      <Status />
      <Projects />
      <Labels />
      <Footer />
    </section>
  );
};

export default Todo;
