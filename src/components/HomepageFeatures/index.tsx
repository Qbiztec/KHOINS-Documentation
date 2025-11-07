import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';


type FeatureItem = {
  title: string;
  imgUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Harga Kompetitif & Lebih Murah",
    imgUrl: "/img/cheap.png",
    description: (
      <>
        KHOINS menawarkan harga yang lebih murah dan kompetitif untuk produk
        digital.
      </>
    ),
  },
  {
    title: "Metode Top-up Fleksibel",
    imgUrl: "/img/flexible.png",
    description: (
      <>
        KHOINS menyediakan metode top-up yang fleksibel, baik melalui transfer
        bank manual maupun payment gateway otomatis seperti VA dan QRIS.
      </>
    ),
  },
  {
    title: "Alur Transaksi Jelas & Efisien",
    imgUrl: "/img/easy.png",
    description: (
      <>
        KHOINS memiliki alur transaksi yang jelas dan efisien, menggunakan respon
        synchronous untuk pascabayar dan asynchronous untuk prabayar
      </>
    ),
  },
];

function Feature({ title, imgUrl, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={useBaseUrl(imgUrl)} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
