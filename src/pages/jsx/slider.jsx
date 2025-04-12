// ProjectSlider.jsx
import React, { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
//motion
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my projects and blogs.",
    image: "https://via.placeholder.com/600x300",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Todo App",
    description: "A simple yet powerful todo app with filters and persistence.",
    image: "https://via.placeholder.com/600x300",
    tech: ["React", "LocalStorage"],
  },
  {
    title: "API Explorer",
    description: "A tool to explore public APIs visually.",
    image: "https://via.placeholder.com/600x300",
    tech: ["Next.js", "REST APIs"],
  },
];

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-10">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white"
          >
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">
              {projects[current].title}
            </h2>
            <p className="text-gray-600">{projects[current].description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {projects[current].tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevSlide} className="p-2 bg-white rounded-full shadow">
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextSlide} className="p-2 bg-white rounded-full shadow">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
