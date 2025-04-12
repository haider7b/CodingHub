import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// لازم تسجل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function MySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    gsap.fromTo(
      elem,
      { opacity: 0, y: 50 }, // الحالة البداية
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 80%", // يشتغل من يوصل 80% من الشاشة
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="my-section p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">القسم مالتك ✨</h2>
      <p>هذا المحتوى راح يطلع بانميشن من توصل له أثناء السكرول.</p>
    </section>
  );
}

