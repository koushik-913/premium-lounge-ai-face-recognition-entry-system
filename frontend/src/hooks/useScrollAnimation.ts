import { useEffect, RefObject } from 'react';

export function useScrollAnimation(
  sectionRef: RefObject<HTMLElement | null>,
  childRefs: RefObject<HTMLElement | null>[]
) {
  useEffect(() => {
    const elements = childRefs.map((r) => r.current).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
}

export function useActiveSection(sectionId: string, sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.dispatchEvent(
              new CustomEvent('activeSectionChange', { detail: { sectionId } })
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionId]);
}
