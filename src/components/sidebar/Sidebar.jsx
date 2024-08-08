import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <p className="aboutMeText">
          Ben Aycan Kaynakcı, Gazi Üniversitesi Bilgisayar Mühendisliği bölümünden bu yıl mezun oldum ve veri bilimi alanına büyük bir ilgi ve tutku duyuyorum. SQL veritabanları, Python programlama dili ve veri analizi konularında bilgi sahibiyim. Eğitimim ve projelerim boyunca makine öğrenimi ve veri analizi konularında çeşitli deneyimler kazandım. Analitik düşünme yeteneğim, veri odaklı çözümler geliştirme becerim ve güçlü problem çözme yeteneklerimle veri bilimindeki fırsatları değerlendirmeyi hedefliyorum. İnovatif projelerde yer alarak, veri tabanlı içgörüler sağlama ve iş süreçlerine değer katma konusunda katkıda bulunmak istiyorum.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">MY PROJECTS</span>
        <ul className="project-list">
          <li>
            <div className="project-box">
              <a href="https://github.com/kynkcaycan/NeuroVision" target="_blank" rel="noopener noreferrer" className="project-title">NeuroVision</a>
              <div className="project-description">
                Bu proje, derin öğrenme teknolojilerini kullanarak nörolojik MR görüntülerinde tümör tespiti yapmayı ve erken teşhisi kolaylaştırmayı amaçlamaktadır. U-Net modeli 3D verilerde kullanılmaktadır. Ayrıca, model ile tümörlü bölgenin tespitini de yapabilmektedir. Kullanıcı dostu bir web arayüzü üzerinden erişilebilecek olan bu sistem, nöroloji uzmanlarının kullanımına yönelik tasarlanmıştır. Eğitilmiş model ile elde edilen tümörün koordinat ve büyüklük bilgileri ChatGPT entegresine otomatik olarak gitmektedir. Bu sayede uygulama kullanıcısı tümör hakkında yapay zeka ile sohbet edebilmektedir.
                <p><strong>Projede Kullanılan Teknolojiler:</strong> CNN, U-Net, React, Flask, Gaussian Filtreleme, Histogram Eşitleme</p>
              </div>
            </div>
          </li>
          <li>
            <div className="project-box">
              <a href="https://github.com/kynkcaycan/TR_SignLanguageRecognition" target="_blank" rel="noopener noreferrer" className="project-title">Turkish Sign Language Detection</a>
              <div className="project-description">
                Turkish Sign Language Recognazition projesi, görüntülerden işaret dilini tanıyabilen ve bunu metne dönüştürebilen bir sistem geliştirmeyi amaçlamaktadır. Bu sistem, derin öğrenme tekniklerinden yararlanarak bir veri kümesindeki görüntüleri işleyip işaret dilini metne çevirir.
                <p><strong>Projede Kullanılan Teknolojiler:</strong> CNN-LSTM, NumPy, Matplotlib, PyTorch, Pandas</p>
              </div>
            </div>
          </li>
          <li>
            <div className="project-box">
              <a href="https://github.com/kynkcaycan/veri_bilimi_istatistik_is_uygulamalari" target="_blank" rel="noopener noreferrer" className="project-title">Veri Bilimi İstatistik Uygulamaları</a>
              <div className="project-description">
                A/B testi sonuçlarını bağımlı ve bağımsız örneklemlerle analiz etmekten kullanıcı arayüzü deneyimlerini incelemeye kadar geniş bir yelpazeyi kapsar. Ayrıca, dönüşüm oranlarını değerlendirme, fiyat stratejilerini analiz etme, reklam harcamalarını optimize etme ve hata olasılıklarını hesaplama gibi işlemleri içerir. Bahşişler ile toplam hesap tutarı arasındaki ilişkiyi inceleme, ürün satış olasılıklarını tahmin etme ve varyans analizi yapma konularında da çalışmalar bulunmaktadır. Web sitesinde geçirilen süreyi test eden projeler, kullanıcı oturum sürelerinin analizine yönelik bilgiler sunar. Bu projeler, gerçek dünya problemleri çözülmüş ve iş süreçleri optimize edilmiştir.
              </div>
            </div>
          </li>
          <li>
            <div className="project-box">
              <a href="https://github.com/kynkcaycan/SQL_with_SQLite" target="_blank" rel="noopener noreferrer" className="project-title">SQLite ile SQL</a>
              <div className="project-description">
                SQLite kullanarak veritabanı tabloları üzerinde SQL kodları test edilmiş ve çeşitli sorgular geliştirilmiştir.
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://github.com/kynkcaycan" target="_blank" rel="noopener noreferrer" className="sidebarIcon fab fa-github" aria-label="Github"></a>
          <a href="https://www.linkedin.com/in/aycan-kaynakc%C4%B1-0129b0235/" target="_blank" rel="noopener noreferrer" className="sidebarIcon fab fa-linkedin" aria-label="LinkedIn"></a>
        </div>
      </div>

    </div>
  );
}
