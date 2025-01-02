-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 29 Des 2024 pada 01.46
-- Versi server: 10.5.27-MariaDB-cll-lve
-- Versi PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `febk5472_course`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `about_us`
--

CREATE TABLE `about_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `about_us`
--

INSERT INTO `about_us` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Tentang Kami', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid nam optio, quae officiis illo velit officia voluptatem unde quaerat quia, amet pariatur reprehenderit odit! Tempore iusto laudantium eligendi, nihil veritatis reprehenderit. Laborum totam distinctio beatae qui dolores placeat dolorem! Fugiat ab sint unde! Illum minus obcaecati iste dolore debitis mollitia accusamus earum ea similique dolorem, officiis corporis amet, quos iusto, nesciunt beatae laborum quod ratione ab. Veritatis enim soluta suscipit molestiae, eius sunt! Cumque ad animi porro consectetur, iusto at officia ratione. Officiis nesciunt maiores exercitationem earum, ex, ratione facere consectetur voluptatibus at natus dolorum excepturi adipisci. Eos, consequatur!</p>', 'image-upload-server/01JG6KGB9CGDRT11Q32VG0HW79.png', '2024-12-02 05:22:24', '2024-12-28 12:22:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Laravel', 'laravel', 'image-upload-server/01JDWCDD995GMCW5JVG651THAD.svg', '2024-11-29 16:35:08', '2024-11-29 16:39:51'),
(3, 'Flutter', 'flutter', 'image-upload-server/01JDWCDVT8J9RSWFSMBA2C5YAE.svg', '2024-11-29 16:35:23', '2024-11-29 16:39:57'),
(5, 'React js', 'react-js', 'image-upload-server/01JDWCQZYTF2RSTD03H2QSQQXS.svg', '2024-11-29 16:40:55', '2024-11-29 16:40:55'),
(6, 'Kotlin', 'kotlin', 'image-upload-server/01JDWCRG6X2YEVH2H7M9BG8ED1.svg', '2024-11-29 16:41:12', '2024-11-29 16:41:12'),
(7, 'Golang', 'golang', 'image-upload-server/01JDWCS618XP0X37Z4FYJTSFV9.svg', '2024-11-29 16:41:34', '2024-11-29 16:41:34'),
(8, 'Python', 'python', 'image-upload-server/01JDWCSJWABB3P8HH3548MXMD1.svg', '2024-11-29 16:41:47', '2024-11-29 16:41:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `category_news`
--

CREATE TABLE `category_news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `category_news`
--

INSERT INTO `category_news` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(2, 'Pendidikan', 'pendidikan', '2024-12-01 18:24:01', '2024-12-01 18:24:01'),
(3, 'Kegiatan Akademik', 'kegiatan-akademik', '2024-12-01 18:24:41', '2024-12-01 18:24:41'),
(4, 'Fitur Platform', 'fitur-platform', '2024-12-01 18:24:48', '2024-12-11 18:20:33');

-- --------------------------------------------------------

--
-- Struktur dari tabel `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `created_at`, `updated_at`) VALUES
(1, 'Apa yang saya butuhkan untuk mengikuti kursus online ini?', 'Untuk mengikuti kursus online ini, Anda hanya perlu perangkat seperti komputer, laptop, atau smartphone dengan koneksi internet yang stabil. Pastikan Anda memiliki akses ke platform tempat kursus ini diselenggarakan, seperti melalui email, aplikasi, atau website kami. Beberapa kursus mungkin memerlukan perangkat lunak tambahan atau alat tertentu, yang akan kami informasikan sebelum kursus dimulai.', '2024-12-02 05:08:52', '2024-12-09 07:29:00'),
(2, 'Apakah saya akan mendapatkan sertifikat setelah menyelesaikan kursus ini?', 'Ya, setelah menyelesaikan kursus ini dan menyelesaikan semua tugas atau ujian yang diperlukan, Anda akan mendapatkan sertifikat yang dapat diunduh atau dikirimkan secara digital. Sertifikat ini dapat digunakan untuk memperkaya portofolio atau resume Anda.', '2024-12-09 07:29:16', '2024-12-09 07:29:16'),
(3, 'Apakah saya bisa mengakses materi kursus setelah kursus selesai?', 'Tergantung pada jenis kursus, sebagian besar kursus online memungkinkan Anda untuk mengakses materi kapan saja selama Anda terdaftar dalam kursus tersebut. Namun, beberapa kursus mungkin membatasi akses ke materi setelah tanggal tertentu. Pastikan untuk memeriksa ketentuan akses materi yang diberikan oleh instruktur.', '2024-12-09 07:29:27', '2024-12-09 07:29:27'),
(4, ' Berapa lama waktu yang diperlukan untuk menyelesaikan kursus ini?', 'Waktu yang diperlukan untuk menyelesaikan kursus ini tergantung pada tingkat kesulitan dan waktu yang Anda luangkan setiap hari. Kursus ini dirancang untuk dapat diselesaikan dalam beberapa minggu, dengan rata-rata waktu yang diperlukan sekitar 4-6 jam per minggu. Namun, Anda bisa menyelesaikannya sesuai dengan kecepatan belajar Anda sendiri.', '2024-12-09 07:29:38', '2024-12-09 07:29:38'),
(5, 'Bagaimana cara mendapatkan bantuan jika saya kesulitan selama mengikuti kursus?', 'Kami menyediakan berbagai cara untuk mendapatkan dukungan selama kursus. Anda dapat mengajukan pertanyaan kepada instruktur melalui forum diskusi, email, atau sesi tanya jawab langsung. Selain itu, kami juga memiliki grup komunitas tempat peserta dapat saling berbagi pengalaman dan saling membantu. Pastikan untuk memanfaatkan semua sumber daya ini jika Anda mengalami kesulitan.', '2024-12-09 07:29:51', '2024-12-09 07:29:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwals`
--

CREATE TABLE `jadwals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `murid` text NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `section_id` bigint(20) DEFAULT NULL,
  `tgl_jadwal` date NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL,
  `platform` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `zoom_id` varchar(255) NOT NULL,
  `zoom_passcode` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `link_overview` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`id`, `level_id`, `type_id`, `category_id`, `user_id`, `title`, `slug`, `price`, `link_overview`, `description`, `image`, `status`, `views`, `created_at`, `updated_at`) VALUES
(4, 1, 2, 2, 2, 'Membuat sistem dengan framework laravel', 'membuat-sistem-dengan-framework-laravel', 150000, '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=4LZgEZ2zOaY&list=RD4LZgEZ2zOaY&start_radio=1\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/4LZgEZ2zOaY?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet, repellendus provident in est obcaecati rem commodi, possimus excepturi necessitatibus doloribus totam quasi quas dolor quis iusto dolorem sapiente, soluta enim! Esse deserunt necessitatibus aliquam sequi obcaecati corrupti distinctio alias saepe possimus animi maxime consectetur laborum ducimus, delectus voluptates enim explicabo magnam eum voluptatem culpa accusamus ullam fuga tempora! Autem eaque ad in, nisi et libero mollitia eligendi recusandae sequi quia expedita cupiditate corporis eveniet optio laborum exercitationem quidem, dolore dolores. Similique facilis reiciendis autem excepturi neque corporis quaerat. Expedita sequi ab voluptas odio atque necessitatibus laborum est id tempora.</p>', 'image-upload-server/01JG75R1ZKVABVVCPW8M1HTPDJ.png', 'disetujui', 2, '2024-12-28 17:41:39', '2024-12-28 18:14:00'),
(5, 2, 2, 3, 5, 'Membuat aplikasi mobile dengan flutter', 'membuat-aplikasi-mobile-dengan-flutter', 400000, '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet, repellendus provident in est obcaecati rem commodi, possimus excepturi necessitatibus doloribus totam quasi quas dolor quis iusto dolorem sapiente, soluta enim! Esse deserunt necessitatibus aliquam sequi obcaecati corrupti distinctio alias saepe possimus animi maxime consectetur laborum ducimus, delectus voluptates enim explicabo magnam eum voluptatem culpa accusamus ullam fuga tempora! Autem eaque ad in, nisi et libero mollitia eligendi recusandae sequi quia expedita cupiditate corporis eveniet optio laborum exercitationem quidem, dolore dolores. Similique facilis reiciendis autem excepturi neque corporis quaerat. Expedita sequi ab voluptas odio atque necessitatibus laborum est id tempora.</p>', 'image-upload-server/01JG761081PQQCTWVK3XKMHTCT.png', 'disetujui', 4, '2024-12-28 17:46:33', '2024-12-28 18:14:28'),
(6, 3, 2, 5, 6, 'Belajar membangung sistem dengan react js', 'belajar-membangung-sistem-dengan-react-js', 350000, '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet, repellendus provident in est obcaecati rem commodi, possimus excepturi necessitatibus doloribus totam quasi quas dolor quis iusto dolorem sapiente, soluta enim! Esse deserunt necessitatibus aliquam sequi obcaecati corrupti distinctio alias saepe possimus animi maxime consectetur laborum ducimus, delectus voluptates enim explicabo magnam eum voluptatem culpa accusamus ullam fuga tempora! Autem eaque ad in, nisi et libero mollitia eligendi recusandae sequi quia expedita cupiditate corporis eveniet optio laborum exercitationem quidem, dolore dolores. Similique facilis reiciendis autem excepturi neque corporis quaerat. Expedita sequi ab voluptas odio atque necessitatibus laborum est id tempora.</p>', 'image-upload-server/01JG76AMTX207KVXH8N7XEYE53.png', 'disetujui', 10, '2024-12-28 17:51:49', '2024-12-28 18:24:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `levels`
--

CREATE TABLE `levels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `levels`
--

INSERT INTO `levels` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Beginner', 'beginner', '2024-11-29 16:28:05', '2024-11-29 16:28:05'),
(2, 'Intermediate', 'intermediate', '2024-11-29 16:28:41', '2024-11-29 16:28:41'),
(3, 'Expert', 'expert', '2024-11-29 16:28:51', '2024-11-29 16:28:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_11_29_122358_create_categories_table', 1),
(6, '2024_11_29_122415_create_levels_table', 1),
(7, '2024_11_29_122749_create_kelas_table', 1),
(8, '2024_11_29_122918_create_types_table', 1),
(9, '2024_11_29_123046_create_sections_table', 1),
(10, '2024_11_29_123125_create_videos_table', 1),
(11, '2024_11_29_123233_create_settings_table', 1),
(12, '2024_11_29_131201_create_sessions_table', 2),
(13, '2024_11_30_020928_add_long_logo', 3),
(14, '2024_12_01_130812_create_transactions_table', 4),
(15, '2024_12_01_232428_create_faqs_table', 5),
(16, '2024_12_01_232445_create_contact_us_table', 5),
(17, '2024_12_01_232538_create_about_us_table', 5),
(18, '2024_12_01_232805_create_news_table', 5),
(19, '2024_12_01_232931_create_category_news_table', 5),
(20, '2024_12_01_234307_create_authentication_log_table', 6),
(21, '2024_12_01_235500_create_activity_log_table', 7),
(22, '2024_12_01_235501_add_event_column_to_activity_log_table', 7),
(23, '2024_12_01_235502_add_batch_uuid_column_to_activity_log_table', 7),
(24, '2024_12_02_122131_about_us', 8),
(25, '2024_12_03_125442_add_themes_settings_to_users_table', 9),
(26, '2024_12_03_230918_add_column_setting', 10),
(27, '2024_12_07_140623_add_badge', 11),
(28, '2024_12_17_004140_create_testimonis_table', 12),
(29, '2024_12_17_181853_add_kelas_in_testimoni', 13),
(30, '2024_12_23_173211_create_jadwals_table', 14);

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_news_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `tags` text DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `user_id`, `category_news_id`, `title`, `slug`, `views`, `tags`, `status`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'Lorem ipsum dolor sit amet.', 'lorem-ipsum-dolor-sit-amet', 1, '[\"news\"]', '1', 'image-upload-server/01JG6KK7ZFFA5KNWQWR3JKCW8V.png', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid nam optio, quae officiis illo velit officia voluptatem unde quaerat quia, amet pariatur reprehenderit odit! Tempore iusto laudantium eligendi, nihil veritatis reprehenderit. Laborum totam distinctio beatae qui dolores placeat dolorem! Fugiat ab sint unde! Illum minus obcaecati iste dolore debitis mollitia accusamus earum ea similique dolorem, officiis corporis amet, quos iusto, nesciunt beatae laborum quod ratione ab. Veritatis enim soluta suscipit molestiae, eius sunt! Cumque ad animi porro consectetur, iusto at officia ratione. Officiis nesciunt maiores exercitationem earum, ex, ratione facere consectetur voluptatibus at natus dolorum excepturi adipisci. Eos, consequatur!</p>', '2024-12-28 12:24:27', '2024-12-28 12:26:09'),
(2, 1, 3, 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing', 0, '[\"news\"]', '1', 'image-upload-server/01JG6KKWA7GP3KENQ2RE1V41A0.png', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid nam optio, quae officiis illo velit officia voluptatem unde quaerat quia, amet pariatur reprehenderit odit! Tempore iusto laudantium eligendi, nihil veritatis reprehenderit. Laborum totam distinctio beatae qui dolores placeat dolorem! Fugiat ab sint unde! Illum minus obcaecati iste dolore debitis mollitia accusamus earum ea similique dolorem, officiis corporis amet, quos iusto, nesciunt beatae laborum quod ratione ab. Veritatis enim soluta suscipit molestiae, eius sunt! Cumque ad animi porro consectetur, iusto at officia ratione. Officiis nesciunt maiores exercitationem earum, ex, ratione facere consectetur voluptatibus at natus dolorum excepturi adipisci. Eos, consequatur!</p>', '2024-12-28 12:24:48', '2024-12-28 12:24:48'),
(3, 1, 4, 'Lorem ipsum dolor sit amet consectetur.', 'lorem-ipsum-dolor-sit-amet-consectetur', 1, '[\"news\"]', '1', 'image-upload-server/01JG6KMXBA2HZ90NYH9W6NZEKS.png', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid nam optio, quae officiis illo velit officia voluptatem unde quaerat quia, amet pariatur reprehenderit odit! Tempore iusto laudantium eligendi, nihil veritatis reprehenderit. Laborum totam distinctio beatae qui dolores placeat dolorem! Fugiat ab sint unde! Illum minus obcaecati iste dolore debitis mollitia accusamus earum ea similique dolorem, officiis corporis amet, quos iusto, nesciunt beatae laborum quod ratione ab. Veritatis enim soluta suscipit molestiae, eius sunt! Cumque ad animi porro consectetur, iusto at officia ratione. Officiis nesciunt maiores exercitationem earum, ex, ratione facere consectetur voluptatibus at natus dolorum excepturi adipisci. Eos, consequatur!</p>', '2024-12-28 12:25:22', '2024-12-28 12:26:16'),
(4, 1, 2, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, numquam! ', 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-repudiandae-numquam', 0, '[\"news\"]', '1', 'image-upload-server/01JG6KNSHPVQTSHXCW35Z6640Q.png', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid nam optio, quae officiis illo velit officia voluptatem unde quaerat quia, amet pariatur reprehenderit odit! Tempore iusto laudantium eligendi, nihil veritatis reprehenderit. Laborum totam distinctio beatae qui dolores placeat dolorem! Fugiat ab sint unde! Illum minus obcaecati iste dolore debitis mollitia accusamus earum ea similique dolorem, officiis corporis amet, quos iusto, nesciunt beatae laborum quod ratione ab. Veritatis enim soluta suscipit molestiae, eius sunt! Cumque ad animi porro consectetur, iusto at officia ratione. Officiis nesciunt maiores exercitationem earum, ex, ratione facere consectetur voluptatibus at natus dolorum excepturi adipisci. Eos, consequatur!</p>', '2024-12-28 12:25:51', '2024-12-28 12:25:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `total_video` int(11) DEFAULT NULL,
  `total_duration` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sections`
--

INSERT INTO `sections` (`id`, `kelas_id`, `title`, `total_video`, `total_duration`, `created_at`, `updated_at`) VALUES
(11, 4, 'Tahapan 1', 2, '20 menit', '2024-12-28 17:42:26', '2024-12-28 17:42:26'),
(12, 4, 'Tahapan 2', 3, '20 menit', '2024-12-28 17:43:18', '2024-12-28 17:43:41'),
(13, 4, 'Tahapan 3', 5, '20 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:36'),
(14, 5, 'Tahapan 1', 2, '10 menit', '2024-12-28 17:48:18', '2024-12-28 17:48:18'),
(15, 5, 'Tahapan 2', 3, '10 menit', '2024-12-28 17:48:59', '2024-12-28 17:48:59'),
(16, 5, 'Tahapan 3', 1, '10 menit', '2024-12-28 17:49:30', '2024-12-28 17:49:30'),
(17, 6, 'Tahapan 1', 2, '10 menit', '2024-12-28 17:55:58', '2024-12-28 17:55:58'),
(18, 6, 'Tahapan 2', 3, '20 menit', '2024-12-28 17:57:01', '2024-12-28 17:57:01'),
(19, 6, 'Tahapan 3', 2, '10 menit', '2024-12-28 17:57:39', '2024-12-28 17:57:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('XM0qdNjmIs1h9aMq0PMB7mSgi939olQZLJQ6e3h4', 2, '103.121.132.69', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiUkp6Wk9ueXZkNXFtVHc0Y1U4dE5kdGkxbUZseWF2NEZNbzQ3cmc5biI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDk6Imh0dHBzOi8vZGVtb2FwcGZlYnJpbm9nZW5kZXYubXkuaWQvbWVudG9yL2tlbGFzLzQiO31zOjM6InVybCI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJDluWFRlaVJ1UGV0cFFnTy5NTmZzOU83ZlhreTU1RDVnV0hhWkhMYW9NWXYuZmRUbUVXbVVLIjt9', 1735409039),
('xqDkXuHUhjZStCDV4zT0EwxP6cfEIJ2t1fBt7cVE', 1, '103.121.132.69', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiTnNueWduTjcwYmoxeTFEYjNPbkd1ZzVQakcyaDUxRTd6UWVFUklhayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDg6Imh0dHBzOi8vZGVtb2FwcGZlYnJpbm9nZW5kZXYubXkuaWQvbWFpbi9zZWN0aW9ucyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MzoidXJsIjthOjA6e31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTIkOW5YVGVpUnVQZXRwUWdPLk1OZnM5TzdmWGt5NTVENWdXSGFaSExhb01Zdi5mZFRtRVdtVUsiO3M6MTc6IkRhc2hib2FyZF9maWx0ZXJzIjthOjI6e3M6OToic3RhcnREYXRlIjtOO3M6NzoiZW5kRGF0ZSI7Tjt9fQ==', 1735411448);

-- --------------------------------------------------------

--
-- Struktur dari tabel `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `yt` varchar(255) DEFAULT NULL,
  `ig` varchar(255) DEFAULT NULL,
  `fb` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `long_logo` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `badge` varchar(255) DEFAULT NULL,
  `video` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `settings`
--

INSERT INTO `settings` (`id`, `site_name`, `keyword`, `email`, `address`, `phone`, `description`, `yt`, `ig`, `fb`, `logo`, `long_logo`, `thumbnail`, `heading`, `badge`, `video`, `created_at`, `updated_at`) VALUES
(1, 'Course System', 'Course System', 'course@course.com', 'JAWA BARAT ,INDONESIA', '081295916567', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci necessitatibus sequi facilis ipsam in saepe dicta consectetur temporibus. Nulla.', 'https://chatgpt.com/', 'https://chatgpt.com/', 'https://zen-browser.app/', 'image-upload-server/01JG6KB36CMGZQD1VRQWP3Z65Z.svg', 'image-upload-server/01JG6KB36EX6PF0CSMF90BABA6.svg', 'image-upload-server/01JG6KB36EX6PF0CSMF90BABA7.png', 'Belajar, Berbagi & Berkembang', 'Lorem ipsum dolor, sit amet consectetur adipisicing.', '{\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=4LZgEZ2zOaY&list=RD4LZgEZ2zOaY&start_radio=1\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/4LZgEZ2zOaY?controls=1&start=0\",\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '2024-11-29 12:45:19', '2024-12-28 12:21:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `testimonis`
--

CREATE TABLE `testimonis` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) NOT NULL,
  `body` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `nota` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `payment_type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `types`
--

CREATE TABLE `types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `types`
--

INSERT INTO `types` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'GRATIS', 'gratis', '2024-11-29 16:23:02', '2024-12-22 02:06:41'),
(2, 'BERBAYAR', 'berbayar', '2024-11-29 16:23:14', '2024-12-22 02:06:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tempat_lahir` varchar(255) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `jk` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `tempat_lahir`, `tanggal_lahir`, `umur`, `phone`, `alamat`, `jk`, `role`, `bio`, `status`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrator ', 'admin@admin.com', '$2y$12$9nXTeiRuPetpQgO.MNfs9O7fXky55D5gWHaZHLaoMYv.fdTmEWmUK', 'Indonesia', '2002-02-27', 22, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'admin', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sint porro dolor, distinctio temporibus ipsum, quos veritatis cumque labore, consectetur atque? Reprehenderit tenetur commodi necessitatibus deserunt adipisci praesentium, sint accusantium sequi nemo beatae possimus. Consequuntur eos qui quas possimus sint veritatis, harum aut atque quam, ullam, cum quos ut magni!</p>', 1, 'image-upload-server/01JG6KX1NHM69WN01GY68TYFA1.svg', '6L4WOORDmZxwqwa65CCfJbBKr96KytW8CiTWmbc6ADLzKKlUuOrYX0lkfRcc', '2024-11-29 05:41:06', '2024-12-28 12:29:49'),
(2, 'Mentor', 'mentor@mentor.com', '$2y$12$9nXTeiRuPetpQgO.MNfs9O7fXky55D5gWHaZHLaoMYv.fdTmEWmUK', 'Indonesia', '2002-12-03', 22, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'mentor', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum veritatis, incidunt, saepe error nam rerum, voluptatibus enim facilis quibusdam vitae minus sequi fuga laudantium!</p>', 1, 'image-upload-server/01JG6KVFESP6VXX8DCX65FFXRT.png', NULL, '2024-12-03 05:43:57', '2024-12-28 12:28:57'),
(3, 'Muhammad Febriansyah', 'muhammadfebrian121@gmail.com', '$2y$12$ZlJiMKuw/j.jy3Ra3qoym.OnT.zFjRMTgUH.MGZWK3/QHIWV/sd.u', 'Indonesia', '2007-06-20', 17, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'student', NULL, 1, 'profile/Bz98VY2QCIJBKVAppYRVShPZ9el72f295wQ6hVk5.png', NULL, '2024-12-14 12:45:17', '2024-12-18 00:14:14'),
(4, 'Albab', 'atpeelun@gmail.com', '$2y$12$CwVV0J4qlfXmP1Ar9vjGAeGXINUmUYkJIF1F5B3yNzNySNm/mmCES', '441albab', NULL, 32, '087790100077', NULL, 'Laki-Laki', 'student', NULL, 1, NULL, NULL, '2024-12-21 12:26:18', '2024-12-21 12:26:18'),
(5, 'Mentor 2', 'mentor2@mentor.com', '$2y$12$0hKygJWkE.T9NGvwDwAA6u7hlx0tU5GCpbdVnV6xR7.9iSuszPg3S', 'Indonesia', '2000-12-30', 22, '081295916567', 'Jambi', 'Laki-laki', 'mentor', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus id, labore asperiores quo tenetur?</p>', 1, 'image-upload-server/01JG6KSJZH36N9QXK1M5WK4X7J.png', NULL, '2024-12-28 12:27:56', '2024-12-28 12:27:56'),
(6, 'Mentor 3', 'mentor3@mentor.com', '$2y$12$9tsyPDWlhcstJVWWhFPuROSba34YUtycdu.8tPPoatuGmsp2IHlzW', 'Indonesia', '2002-11-22', 22, '081295916567', 'Jambi', 'Laki-laki', 'mentor', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus id, labore asperiores quo tenetur?</p>', 1, 'image-upload-server/01JG6KTWEVJCS8WPVJZ9FKD38V.png', NULL, '2024-12-28 12:28:38', '2024-12-28 12:28:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `section_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `duration` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `videos`
--

INSERT INTO `videos` (`id`, `section_id`, `title`, `url`, `duration`, `created_at`, `updated_at`) VALUES
(24, 11, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=4LZgEZ2zOaY&list=RD4LZgEZ2zOaY&start_radio=1\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/4LZgEZ2zOaY?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:42:26', '2024-12-28 17:42:26'),
(25, 11, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=4LZgEZ2zOaY&list=RD4LZgEZ2zOaY&start_radio=1\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/4LZgEZ2zOaY?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:42:26', '2024-12-28 17:42:26'),
(26, 12, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:43:18', '2024-12-28 17:43:18'),
(27, 12, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:43:18', '2024-12-28 17:43:18'),
(28, 12, 'Video 3', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:43:18', '2024-12-28 17:43:18'),
(29, 13, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:26'),
(30, 13, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:26'),
(31, 13, 'Video 3', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:26'),
(32, 13, 'Video 4', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:26'),
(33, 13, 'Video 5', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '3 menit', '2024-12-28 17:44:26', '2024-12-28 17:44:26'),
(34, 14, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:48:18', '2024-12-28 17:48:18'),
(35, 14, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:48:18', '2024-12-28 17:48:18'),
(36, 15, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:48:59', '2024-12-28 17:48:59'),
(37, 15, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:48:59', '2024-12-28 17:48:59'),
(38, 15, 'Video 3', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:48:59', '2024-12-28 17:48:59'),
(39, 16, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:49:30', '2024-12-28 17:49:30'),
(40, 17, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=3XqqkrJENB4&list=RD4LZgEZ2zOaY&index=4\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/3XqqkrJENB4?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:55:58', '2024-12-28 17:55:58'),
(41, 17, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:55:58', '2024-12-28 17:55:58'),
(42, 18, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=sElE_BfQ67s&list=RD4LZgEZ2zOaY&index=3\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/sElE_BfQ67s?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:57:01', '2024-12-28 17:57:01'),
(43, 18, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=pZ31pyTZdh0&list=RD4LZgEZ2zOaY&index=2\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/pZ31pyTZdh0?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:57:01', '2024-12-28 17:57:01'),
(44, 18, 'Video 3', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=3XqqkrJENB4&list=RD4LZgEZ2zOaY&index=4\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/3XqqkrJENB4?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:57:01', '2024-12-28 17:57:01'),
(45, 19, 'Video 1', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=3XqqkrJENB4&list=RD4LZgEZ2zOaY&index=4\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/3XqqkrJENB4?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:57:39', '2024-12-28 17:57:39'),
(46, 19, 'Video 2', '{\"url\":\"https:\\/\\/www.youtube.com\\/watch?v=k4V3Mo61fJM&list=RD4LZgEZ2zOaY&index=5\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/k4V3Mo61fJM?controls=1&start=0\",\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '5 menit', '2024-12-28 17:57:39', '2024-12-28 17:57:39');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `category_news`
--
ALTER TABLE `category_news`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `jadwals`
--
ALTER TABLE `jadwals`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kelas_slug_unique` (`slug`),
  ADD KEY `kelas_category_id_foreign` (`category_id`),
  ADD KEY `kelas_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sections_kelas_id_foreign` (`kelas_id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `testimonis`
--
ALTER TABLE `testimonis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `testimonis_kelas_id_foreign` (`kelas_id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_section_id_foreign` (`section_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `category_news`
--
ALTER TABLE `category_news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `jadwals`
--
ALTER TABLE `jadwals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `levels`
--
ALTER TABLE `levels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `testimonis`
--
ALTER TABLE `testimonis`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT untuk tabel `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD CONSTRAINT `kelas_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `kelas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_kelas_id_foreign` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `testimonis`
--
ALTER TABLE `testimonis`
  ADD CONSTRAINT `testimonis_kelas_id_foreign` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`);

--
-- Ketidakleluasaan untuk tabel `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
