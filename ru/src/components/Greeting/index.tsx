import React, { useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const Greetings = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },
      })
      .fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
  }, []);
  return (
    <section className={styles.block} id="about">
      <p ref={headerRef}>
        Я&nbsp;люблю фильм Back to&nbsp;the Future, музыку жанра Progressive
        Metal и&nbsp;велосипед. А&nbsp;не&nbsp;пора&nbsp;ли прокатиться
        по&nbsp;вечернему парку? Дорога дарит не&nbsp;только пейзажи,
        но&nbsp;и&nbsp;идеи. 🤔
        <br />
        С&nbsp;2015 года я&nbsp;активно вовлечена в&nbsp;сферу IT. С&nbsp;2018
        года уделяю особое внимание разработке пользовательских интерфейсов.
        Я&nbsp;стремлюсь к&nbsp;конкретным и&nbsp;измеримым результатам,
        принимая решения, основанные на&nbsp;проверенных гипотезах.
        <br />
        Я&nbsp;убеждена, что баланс между удобством пользователя
        и&nbsp;повышением прибыли компании является ключом к&nbsp;успеху.
      </p>
    </section>
  );
};
