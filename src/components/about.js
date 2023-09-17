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
          Halo, perkenalkan nama saya Hendy dan saya seorang mahasiswa di salah satu universitas negeri di Kota Malang. Saya saat ini masih menempuh studi saya untuk mendapatkan gelar sarjana dan tentu berjuang agar dapat lulus dalam banyak
          mata kuliah yang ada di kampus saya. Di sela-sela kesibukan saya sebagai mahasiswa saya cukup banyak menghabiskan waktu saya untuk hobi bukannya kegiatan organisasi yang ada di kampus (saya mahasiswa kupu-kupu). Hampir kebanyakan
          waktu saya diluar kampus saya habiskan untuk fotografi, ngoding (web dan mobile), dan videografi. Karena hobi yang saya miliki, saya akhirnya memutuskan untuk membangun website pribadi dan membagikan hasil-hasil yang saya dapat
          dari hobi yang dimana wujudnya adalah terbentuknya website ini serta foto-foto di dalamnya. Melalui website ini kedepannya saya ingin menyediakan jasa berupa fotografi dan videografi untuk produk maupun kelulusan. Selain jasa foto
          dan video saya juga akan menyediakan jasa untuk membangun mobile app dan website yang responsif dan interaktif. Oleh karena itu jangan ragu untuk menghubungi saya jika anda membutuhkan jasa-jasa yang saya sediakan. Terima kasih
          telah berkunjung ke website saya.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
