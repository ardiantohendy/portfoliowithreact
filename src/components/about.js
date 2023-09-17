import "../css/aboutPage.css";
import image from "../images/abou.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="for-image">
        <img src={image} alt="" />
      </div>
      <div className="for-desc">
        <h3>about me</h3>
        <p>
          Halo, perkenalkan nama saya Hendy dan saya seorang mahasiswa di salah satu universitas negeri di Kota Malang. Saya saat ini masih menempuh studi saya untuk mendapatkan gelar sarjana dan tentu berjuang agar dapat lulus. Hampir
          kebanyakan waktu saya diluar kampus saya habiskan untuk ngoding (web dan mobile). Karena hobi yang saya miliki, saya akhirnya memutuskan untuk membangun website pribadi dan membagikan hasil-hasil yang saya dapat dari hobi yang
          dimana wujudnya adalah terbentuknya website ini. Melalui website ini kedepannya saya ingin menyediakan jasa untuk membangun mobile app dan website yang responsif dan interaktif. Oleh karena itu jangan ragu untuk menghubungi saya
          jika anda membutuhkan jasa-jasa yang saya sediakan. Terima kasih telah berkunjung ke website saya.
        </p>
        <div className="skills-bar">
          <li>
            <p>Dart</p>
            <span className="bar">
              <span className="Dart"></span>
            </span>
          </li>
          <li>
            <p>Javascript</p>
            <span className="bar">
              <span className="Javascript"></span>
            </span>
          </li>
          <li>
            <p>Java</p>
            <span className="bar">
              <span className="Java"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
