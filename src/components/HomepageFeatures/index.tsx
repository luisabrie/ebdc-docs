import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Manual de Usuario',
    Svg: require('@site/static/img/documents-flat.svg').default,
    description: (
      <>
        Documento donde se establecen las instrucciones, reglas y sugerencias para jugar nuestro juego.
      </>
    ),
    link: "docs/prototipo/manual"
  },
  {
    title: 'Ruleta',
    Svg: require('@site/static/img/roulette-svgrepo-com.svg').default,
    description: (
      <>
        La usarás para los castigos.
      </>
    ),
    link: "https://luisabrie.github.io/DocumentacionProyectoVJ/media/files/index.html"
  },
];

function Feature({title, Svg, description,link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div  className="text--center">
        <a href={link}>
        <Svg className={styles.featureSvg} role="img" />
        </a>
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
