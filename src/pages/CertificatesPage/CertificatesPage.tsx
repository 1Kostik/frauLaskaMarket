import { containerStyles } from "@styles/variables";
import {
  imgGalery,
  imgStyles,
  sectionStyle,
  title,
} from "./CertificatesPage.styled";
import img1 from "@assets/images/imagesCertificates/2023-06-02 12.15 1.png";
import img2 from "@assets/images/imagesCertificates/2023-06-02 12.15 2.png";
import img3 from "@assets/images/imagesCertificates/2023-06-02 12.16 1.png";
import img4 from "@assets/images/imagesCertificates/2023-06-02 12.16 10.png";
import img5 from "@assets/images/imagesCertificates/2023-06-02 12.16 11.png";
import img6 from "@assets/images/imagesCertificates/2023-06-02 12.16 12.png";
import img7 from "@assets/images/imagesCertificates/2023-06-02 12.16 13.png";
import img8 from "@assets/images/imagesCertificates/2023-06-02 12.16 14.png";
import img9 from "@assets/images/imagesCertificates/2023-06-02 12.16 15.png";
import img10 from "@assets/images/imagesCertificates/2023-06-02 12.16 16.png";
import img11 from "@assets/images/imagesCertificates/2023-06-02 12.16 17.png";
import img12 from "@assets/images/imagesCertificates/2023-06-02 12.16 18.png";
import img13 from "@assets/images/imagesCertificates/2023-06-02 12.16 2.png";
import img14 from "@assets/images/imagesCertificates/2023-06-02 12.16 3.png";
import img15 from "@assets/images/imagesCertificates/2023-06-02 12.16 4.png";
import img16 from "@assets/images/imagesCertificates/2023-06-02 12.16 5.png";
import img17 from "@assets/images/imagesCertificates/2023-06-02 12.16 6.png";
import img18 from "@assets/images/imagesCertificates/2023-06-02 12.16 18.png";
import img19 from "@assets/images/imagesCertificates/2023-06-02 12.16 7.png";
import img20 from "@assets/images/imagesCertificates/2023-06-02 12.16 8.png";
import img21 from "@assets/images/imagesCertificates/2023-06-02 12.16 9.png";
import img22 from "@assets/images/imagesCertificates/2023-06-02 12.17 1.png";
import img23 from "@assets/images/imagesCertificates/2023-06-02 12.17 10.png";
import img24 from "@assets/images/imagesCertificates/2023-06-02 12.17 11.png";
import img25 from "@assets/images/imagesCertificates/2023-06-02 12.17 12.png";
import img26 from "@assets/images/imagesCertificates/2023-06-02 12.17 13.png";
import img27 from "@assets/images/imagesCertificates/2023-06-02 12.17 14.png";
import img28 from "@assets/images/imagesCertificates/2023-06-02 12.17 15.png";
import img29 from "@assets/images/imagesCertificates/2023-06-02 12.17 16.png";
import img30 from "@assets/images/imagesCertificates/2023-06-02 12.17 17.png";
import img31 from "@assets/images/imagesCertificates/2023-06-02 12.17 17.png";
import img32 from "@assets/images/imagesCertificates/2023-06-02 12.17 3.png";
import img33 from "@assets/images/imagesCertificates/2023-06-02 12.17 4.png";
import img34 from "@assets/images/imagesCertificates/2023-06-02 12.17 5.png";
import img35 from "@assets/images/imagesCertificates/2023-06-02 12.16 6.png";
import img36 from "@assets/images/imagesCertificates/2023-06-02 12.17 7.png";
import img37 from "@assets/images/imagesCertificates/2023-06-02 12.17 8.png";
import img38 from "@assets/images/imagesCertificates/2023-06-02 12.17 9.png";
import img39 from "@assets/images/imagesCertificates/2023-06-02 12.18 1.png";
import img40 from "@assets/images/imagesCertificates/2023-06-02 12.18 2.png";
import { nanoid } from "nanoid";

const imgArrayCertificates = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
];

const CertificatesPage = () => {
  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <h1 css={title}>Сертифікати:</h1>
        <ul css={imgGalery}>
          {imgArrayCertificates &&
            imgArrayCertificates.map((item, index) => (
              <li key={nanoid()} css={imgStyles}>
                <img src={item} alt={`certificate-${index}`} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificatesPage;
