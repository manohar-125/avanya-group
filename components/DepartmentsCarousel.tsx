"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const departments = [
  {
    name: "Rural Development Department, Uttar Pradesh",
    logo: "/departments/rural.jpg",
  },
  {
    name: "Commercial Tax Department, Uttar Pradesh",
    logo: "/departments/commercial_tax.png",
  },
  {
    name: "Department of Military Affairs",
    logo: "/departments/military.png",
  },
  {
    name: "State Consumer Disputes Redressal Commission",
    logo: "/departments/consumer.jpg",
  },
  {
    name: "Rural Engineering Department",
    logo: "/departments/engineering.png",
  },
];

// Each card: w-64 (256px) + mx-4 on each side (16px * 2 = 32px) = 288px
const CARD_WIDTH = 288;

export default function DepartmentsCarousel() {
  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Measure container to correctly center the active card
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % departments.length);
    }, 4000);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % departments.length);
    startInterval(); // reset interval so manual click doesn't fight auto-slide
  }, [startInterval]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? departments.length - 1 : prev - 1));
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  // Center the active card within the container
  const translateX = containerWidth / 2 - (current * CARD_WIDTH + CARD_WIDTH / 2);

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-8">
        <h2 className="text-4xl font-bold text-secondary">
          Departments Worked With
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Successfully executed projects across various government
          departments with compliance and quality assurance.
        </p>

        <div className="relative mt-20 flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous department"
            className="absolute left-0 z-30 bg-white shadow-lg p-3 rounded-full hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Carousel Container */}
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <div
              className="flex items-center transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {departments.map((dept, index) => {
                const isActive = index === current;

                return (
                  <div
                    key={index}
                    className={`
                      relative mx-4 w-64 shrink-0
                      transition-all duration-700 ease-in-out
                      ${isActive ? "scale-110 opacity-100" : "scale-95 opacity-60"}
                    `}
                  >
                    {/* Gradient Glow Background */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 blur-xl z-0" />
                    )}

                    {/* Card */}
                    <div
                      className={`
                        relative z-10 bg-white rounded-2xl p-8 shadow-xl
                        transition-all duration-700
                        ${isActive ? "ring-2 ring-primary shadow-[0_0_40px_rgba(245,130,32,0.4)]" : ""}
                      `}
                    >
                      <div className="flex flex-col items-center">
                        <Image
                          src={dept.logo}
                          alt={dept.name}
                          width={80}
                          height={80}
                          className="object-contain mb-6 transition-opacity duration-700"
                          priority={index === 0}
                        />

                        <h3 className="text-lg font-semibold text-primary text-center">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next department"
            className="absolute right-0 z-30 bg-white shadow-lg p-3 rounded-full hover:bg-primary hover:text-white transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}