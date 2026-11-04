<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terokai Terengganu | Permata Pantai Timur</title>
    <!-- Font dari Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome untuk Ikon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-size/6.4.0/css/all.min.css">
    
    <style>
        /* CSS UTAMA */
        :root {
            --primary-color: #006699;
            --secondary-color: #f39c12;
            --dark-color: #2c3e50;
            --light-bg: #f9f9f9;
            --white: #ffffff;
            --text-color: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            color: var(--text-color);
            background-color: var(--light-bg);
            line-height: 1.6;
        }

        /* Navigasi */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 102, 153, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
        }

        .logo {
            color: var(--white);
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo span {
            color: var(--secondary-color);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        .nav-menu a {
            color: var(--white);
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
            font-size: 0.95rem;
        }

        .nav-menu a:hover {
            color: var(--secondary-color);
        }

        /* Banner Utama (Hero) */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            /* Alternate background idea: Gambar pantai atau Jambatan Angkat Terengganu */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--white);
            padding: 0 20px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            animation: fadeInUp 1s ease-out;
        }

        .hero-content p {
            font-size: 1.25rem;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
            animation: fadeInUp 1.2s ease-out;
        }

        .btn {
            display: inline-block;
            background-color: var(--secondary-color);
            color: var(--white);
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s ease;
            box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
        }

        .btn:hover {
            background-color: #e67e22;
            transform: translateY(-3px);
        }

        /* Bahagian Tarikan Utama (Destinations) */
        .section-padding {
            padding: 100px 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark-color);
            position: relative;
            display: inline-block;
            padding-bottom: 10px;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--secondary-color);
            border-radius: 2px;
        }

        .section-title p {
            color: #777;
            margin-top: 10px;
        }

        /* Grid Kad */
        .destination-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: 0.4s ease;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .card-img {
            height: 240px;
            overflow: hidden;
            position: relative;
        }

        .card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease;
        }

        .card:hover .card-img img {
            transform: scale(1.1);
        }

        .category-tag {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: var(--primary-color);
            color: var(--white);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .card-content {
            padding: 25px;
        }

        .card-content h3 {
            font-size: 1.3rem;
            color: var(--dark-color);
            margin-bottom: 10px;
        }

        .card-content p {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 20px;
            height: 70px; /* menghadkan ketinggian untuk keselarasan visual */
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }

        .location {
            color: #888;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .read-more {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: 0.3s;
        }

        .read-more:hover {
            color: var(--secondary-color);
        }

        /* Fakta Menarik (Keunikan) */
        .features-section {
            background-color: var(--dark-color);
            color: var(--white);
        }

        .features-section .section-title h2 {
            color: var(--white);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            text-align: center;
        }

        .feature-box {
            padding: 30px 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            transition: 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-box:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-5px);
        }

        .feature-icon {
            font-size: 2.5rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }

        .feature-box h3 {
            font-size: 1.25rem;
            margin-bottom: 12px;
        }

        .feature-box p {
            color: #ccc;
            font-size: 0.9rem;
        }

        /* Bahagian Hubungi / Galeri Ringkas */
        .cta-section {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;;
            color: var(--white);
            text-align: center;
        }

        .cta-content h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .cta-content p {
            max-width: 600px;
            margin: 0 auto 30px;
            font-size: 1.1rem;
        }

        /* Footer */
        footer {
            background-color: #1a252f;
            color: #bbb;
            padding: 40px 20px;
            text-align: center;
            border-top: 4px solid var(--primary-color);
        }

        footer p {
            font-size: 0.9rem;
        }

        .social-icons {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .social-icons a {
            color: #bbb;
            font-size: 1.2rem;
            transition: 0.3s;
        }

        .social-icons a:hover {
            color: var(--secondary-color);
        }

        /* Animasi */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsif (Paparan Telefon Bimbit) */
        @media (max-width: 768px) {
            .nav-menu {
                display: none; /* Untuk ringkas, boleh diubahsuai nanti */
            }
            .hero-content h1 {
                font-size: 2.3rem;
            }
            .hero-content p {
                font-size: 1rem;
            }
            .section-padding {
                padding: 60px 20px;
            }
        }
    </style>
</head>
<body>

    <!-- NAVIGASI -->
    <header>
        <div class="nav-container">
            <a href="#" class="logo">TERENGGANU<span>TRAVEL</span></a>
            <ul class="nav-menu">
                <li><a href="#hero">Utama</a></li>
                <li><a href="#destinations">Destinasi Populer</a></li>
                <li><a href="#features">Mengapa Terengganu</a></li>
                <li><a href="#cta">Hubungi Kami</a></li>
            </ul>
        </div>
    </header>

    <!-- BANNER UTAMA (HERO) -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Keindahan Semulajadi Terengganu</h1>
            <p>Terokai pantai berpasir memutih, pulau-pulau idaman, warisan seni budaya yang kaya, dan kulinari tradisional yang memikat selera.</p>
            <a href="#destinations" class="btn">Mulakan Kembara</a>
        </div>
    </section>

    <!-- DESTINASI POPULAR -->
    <section class="section-padding" id="destinations">
        <div class="container">
            <div class="section-title">
                <h2>Tempat Menarik Untuk Dikunjungi</h2>
                <p>Destinasi paling "hits" dan mesti ada dalam senarai wajib-pergi anda di Terengganu</p>
            </div>

            <div class="destination-grid">
                <!-- Destinasi 1 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Pulau</span>
                        <!-- Foto Pulau Redang, jika sedia ada, masukkan pautan fail anda, di bawah saya letak placeholder berkualiti tinggi dari Unsplash -->
                        <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=80" alt="Pulau Redang">
                    </div>
                    <div class="card-content">
                        <h3>Pulau Redang</h3>
                        <p>Dikenali dengan air laut yang jernih bak kristal, pasir putih halus, serta ekosistem marin dan terumbu karang yang sangat sesuai untuk aktiviti snorkeling dan menyelam.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Kuala Nerus</span>
                            <a href="https://ms.wikipedia.org/wiki/Pulau_Redang" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Destinasi 2 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Mercu Tanda</span>
                        <img src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80" alt="Masjid Kristal">
                    </div>
                    <div class="card-content">
                        <h3>Masjid Kristal</h3>
                        <p>Masjid yang dibina daripada kaca dan keluli di Taman Tamadun Islam (TTI). Cahaya matahari yang memantul pada permukaannya menghasilkan visual menakjubkan yang tiada tandingan.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Kuala Terengganu</span>
                            <a href="https://ms.wikipedia.org/wiki/Masjid_Kristal" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Destinasi 3 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Pantai & Kota</span>
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" alt="Jambatan Angkat Terengganu">
                    </div>
                    <div class="card-content">
                        <h3>Jambatan Angkat (Drawbridge)</h3>
                        <p>Jambatan angkat pertama di Asia Tenggara yang menghubungkan Muara Utara dan Muara Selatan. Ia menjadi ikon moden Terengganu yang wajib dikunjungi terutama pada waktu malam dengan limpahan lampu berwarna-warni.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Kuala Terengganu</span>
                            <a href="https://ms.wikipedia.org/wiki/Jambatan_Angkat_Kuala_Terengganu" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Destinasi 4 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Pasar & Belanja</span>
                        <img src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80" alt="Pasar Payang">
                    </div>
                    <div class="card-content">
                        <h3>Pasar Payang</h3>
                        <p>Pusat tumpuan utama pelancong untuk membeli-belah cenderamata tradisi seperti kain batik asli Terengganu, songket, periuk tembaga, keropok lekor, dan pelbagai jenis snek tradisional.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Bandar Kuala Terengganu</span>
                            <a href="https://ms.wikipedia.org/wiki/Pasar_Payang" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Destinasi 5 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Tasik</span>
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Tasik Kenyir">
                    </div>
                    <div class="card-content">
                        <h3>Tasik Kenyir</h3>
                        <p>Tasik buatan manusia terbesar di Asia Tenggara yang menempatkan ratusan pulau, air terjun, gua, dan santuari kelah. Syurga bagi pencinta aktiviti lasak, memancing, dan pencinta alam semula jadi.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Hulu Terengganu</span>
                            <a href="https://ms.wikipedia.org/wiki/Tasik_Kenyir" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Destinasi 6 -->
                <div class="card">
                    <div class="card-img">
                        <span class="category-tag">Makanan</span>
                        <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" alt="Kampung Losong">
                    </div>
                    <div class="card-content">
                        <h3>Keropok Lekor Losong</h3>
                        <p>Bukan sekadar melancong, anda wajib singgah ke Kampung Losong untuk merasai sendiri keropok lekor asli yang padat dengan rasa ikan yang segar, sama ada jenis rebus atau goreng panas-panas.</p>
                        <div class="card-footer">
                            <span class="location"><i class="fa-solid fa-location-dot"></i> Kampung Losong</span>
                            <a href="https://ms.wikipedia.org/wiki/Keropok_lekor" target="_blank" class="read-more">Lihat <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- KEUNIKAN TERENGGANU -->
    <section class="section-padding features-section" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Mengapa Melancong ke Terengganu?</h2>
                <p>Keunikan tersendiri yang sukar dicari di tempat lain</p>
            </div>

            <div class="features-grid">
                <div class="feature-box">
                    <div class="feature-icon">⚓</div>
                    <h3>Pantai & Pulau</h3>
                    <p>Terkenal dengan persisiran pantai yang panjang, bersih, dan berdekatan dengan pulau-pulau yang terkenal di peringkat antarabangsa.</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">🍲</div>
                    <h3>Kekayaan Kulinari</h3>
                    <p>Dari Nasi Dagang hingga ke Keropok Lekor, Terengganu menawarkan kembara makanan yang unik dan sangat menyelerakan.</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">🎨</div>
                    <h3>Seni Budaya & Warisan</h3>
                    <p>Melihat pembuatan batik bertulis, songket eksklusif, serta ketukangan kapal kayu tradisional yang masih hidup subur.</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">🤝</div>
                    <h3>Kemurahan Hati Penduduk</h3>
                    <p>Terkenal dengan keramahan budaya warga tempatan yang sangat mesra menyambut kedatangan pelancong.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- BAHAGIAN CTA / HUBUNGI -->
    <section class="section-padding cta-section" id="cta">
        <div class="container cta-content">
            <h2>Rancang Percutian Anda Ke Terengganu Hari Ini</h2>
            <p>Sediakan beg anda dan rasai pengalaman percutian yang penuh ketenangan, keindahan, dan kenangan indah.</p>
            <a href="https://www.terengganu.gov.my" target="_blank" class="btn">Dapatkan Maklumat Lanjut</a>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="container">
            <p>&copy; 2026 Muhammad Aniq Aiman bin Mohammad Salim. Hak Cipta Terpelihara.</p>
            <p style="margin-top: 5px; font-size: 0.8rem;">Dibina sebagai projek pelancongan menggunakan GitHub Pages</p>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </footer>

</body>
</html>
