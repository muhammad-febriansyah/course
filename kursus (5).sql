-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 28, 2024 at 09:40 AM
-- Server version: 5.7.39
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kursus`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'NOI - Ngaji Online Indonesia', '<p><strong>NOI (Ngaji Online Indonesia)</strong> adalah lembaga yang berfokus pada pembelajaran Al-Qur\'an secara online dengan pendekatan bertahap dan menyeluruh. Kami menawarkan berbagai program pembelajaran yang meliputi ilmu tajwid (tahsin), irama (qira’at), hadis, tafsir, serta ilmu-ilmu Al-Qur\'an lainnya. Dengan metode pembelajaran yang terstruktur dan fleksibel, NOI bertujuan untuk mempermudah setiap individu dalam memahami, menghafal, dan mengamalkan isi Al-Qur\'an, baik dari aspek bacaan yang benar, pemahaman tafsir, maupun aplikasi hadis. Kami menghadirkan pengalaman belajar yang interaktif dan mudah diakses, memfasilitasi para pelajar di seluruh Indonesia untuk mendalami ajaran Islam melalui Al-Qur\'an dengan cara yang lebih efisien dan mendalam.</p><p><strong>Bergabunglah bersama NOI (Ngaji Online Indonesia) dan mulailah perjalanan spiritual Anda hari ini!</strong> Belajar Al-Qur\'an dengan cara yang mudah, fleksibel, dan efektif di mana saja dan kapan saja. Dengan pengajaran yang bertahap dan sistematis, kami membantu Anda memahami dan mengamalkan Al-Qur\'an secara mendalam—mulai dari tajwid, irama, hingga tafsir dan hadis. Semua pembelajaran dipandu oleh mentor Ustadz dan Ustadzah yang sudah menempuh kualifikasi dan berpengalaman, sehingga Anda dapat belajar dengan percaya diri dan mendapatkan pemahaman yang akurat.</p><p>Tidak ada batasan usia atau waktu, cukup siapkan niat dan kami akan menemani setiap langkah Anda. <strong>Daftar sekarang dan rasakan pengalaman belajar Al-Qur\'an yang menyenangkan, bermanfaat, dan terarah!</strong> <strong>Gabung bersama kami, raih kedekatan dengan Al-Qur\'an, dan tumbuhkan pemahaman yang lebih dalam dalam hidup Anda!</strong></p>', 'image-upload-server/01JFMXD2E7QYVX2BBCGRB19M1R.jpg', '2024-12-02 05:22:24', '2024-12-21 15:48:45');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
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
-- Table structure for table `category_news`
--

CREATE TABLE `category_news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_news`
--

INSERT INTO `category_news` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(2, 'Pendidikan', 'pendidikan', '2024-12-01 18:24:01', '2024-12-01 18:24:01'),
(3, 'Kegiatan Akademik', 'kegiatan-akademik', '2024-12-01 18:24:41', '2024-12-01 18:24:41'),
(4, 'Fitur Platform', 'fitur-platform', '2024-12-01 18:24:48', '2024-12-11 18:20:33');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `created_at`, `updated_at`) VALUES
(1, 'Apa yang saya butuhkan untuk mengikuti kursus online ini?', 'Untuk mengikuti kursus online ini, Anda hanya perlu perangkat seperti komputer, laptop, atau smartphone dengan koneksi internet yang stabil. Pastikan Anda memiliki akses ke platform tempat kursus ini diselenggarakan, seperti melalui email, aplikasi, atau website kami. Beberapa kursus mungkin memerlukan perangkat lunak tambahan atau alat tertentu, yang akan kami informasikan sebelum kursus dimulai.', '2024-12-02 05:08:52', '2024-12-09 07:29:00'),
(2, 'Apakah saya akan mendapatkan sertifikat setelah menyelesaikan kursus ini?', 'Ya, setelah menyelesaikan kursus ini dan menyelesaikan semua tugas atau ujian yang diperlukan, Anda akan mendapatkan sertifikat yang dapat diunduh atau dikirimkan secara digital. Sertifikat ini dapat digunakan untuk memperkaya portofolio atau resume Anda.', '2024-12-09 07:29:16', '2024-12-09 07:29:16'),
(3, 'Apakah saya bisa mengakses materi kursus setelah kursus selesai?', 'Tergantung pada jenis kursus, sebagian besar kursus online memungkinkan Anda untuk mengakses materi kapan saja selama Anda terdaftar dalam kursus tersebut. Namun, beberapa kursus mungkin membatasi akses ke materi setelah tanggal tertentu. Pastikan untuk memeriksa ketentuan akses materi yang diberikan oleh instruktur.', '2024-12-09 07:29:27', '2024-12-09 07:29:27'),
(4, ' Berapa lama waktu yang diperlukan untuk menyelesaikan kursus ini?', 'Waktu yang diperlukan untuk menyelesaikan kursus ini tergantung pada tingkat kesulitan dan waktu yang Anda luangkan setiap hari. Kursus ini dirancang untuk dapat diselesaikan dalam beberapa minggu, dengan rata-rata waktu yang diperlukan sekitar 4-6 jam per minggu. Namun, Anda bisa menyelesaikannya sesuai dengan kecepatan belajar Anda sendiri.', '2024-12-09 07:29:38', '2024-12-09 07:29:38'),
(5, 'Bagaimana cara mendapatkan bantuan jika saya kesulitan selama mengikuti kursus?', 'Kami menyediakan berbagai cara untuk mendapatkan dukungan selama kursus. Anda dapat mengajukan pertanyaan kepada instruktur melalui forum diskusi, email, atau sesi tanya jawab langsung. Selain itu, kami juga memiliki grup komunitas tempat peserta dapat saling berbagi pengalaman dan saling membantu. Pastikan untuk memanfaatkan semua sumber daya ini jika Anda mengalami kesulitan.', '2024-12-09 07:29:51', '2024-12-09 07:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `jadwals`
--

CREATE TABLE `jadwals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `murid` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `section_id` bigint(20) DEFAULT NULL,
  `tgl_jadwal` date NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zoom_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zoom_passcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kelas`
--

CREATE TABLE `kelas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `link_overview` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Beginner', 'beginner', '2024-11-29 16:28:05', '2024-11-29 16:28:05'),
(2, 'Intermediate', 'intermediate', '2024-11-29 16:28:41', '2024-11-29 16:28:41'),
(3, 'Expert', 'expert', '2024-11-29 16:28:51', '2024-11-29 16:28:51');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
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
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_news_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `tags` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_video` int(11) DEFAULT NULL,
  `total_duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('8dVkd3SEej64meUeTpNhp5WrcWDbxAnH9gfH4KO5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidHdVS1NlYm0xOXl3THlUNHNwSnJTbTF2dW1ua3Q2dUROdlBDS1VQNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1735378550),
('o3onbmk4Hk8TjOPh060wg7UVaxjUqCL0pZcHZEYr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiODRpY0hBcUIwVGJDOTJybElLb2ZHR0EwNnQ4b2FOb1lHOWtJS2lwWCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNjoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL21haW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1735378579),
('Q3fLGQiRBQ2Krm3sVLNdeLIzcaE45m4D1zVPoKNM', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiZEdRY2oyS2JrdnlDanRYd3pJNkY4ejVzY1BsbG83dHNvVmxydjg3MyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tZW50b3IvamFkd2FsLW1lZXRpbmdzIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJDluWFRlaVJ1UGV0cFFnTy5NTmZzOU83ZlhreTU1RDVnV0hhWkhMYW9NWXYuZmRUbUVXbVVLIjtzOjE3OiJEYXNoYm9hcmRfZmlsdGVycyI7YToyOntzOjk6InN0YXJ0RGF0ZSI7TjtzOjc6ImVuZERhdGUiO047fX0=', 1734966779),
('RhNtRCHxrnbYFRwjwANibHxS5TktzJ4DWa7QvHPx', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo4OntzOjY6Il90b2tlbiI7czo0MDoiV2tDVGpldTl5cHJselVzUGNxem1xdGV5NGFkeTJ5RjBSY1dsQW9KQiI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjM0OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbWVudG9yL2tlbGFzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJDluWFRlaVJ1UGV0cFFnTy5NTmZzOU83ZlhreTU1RDVnV0hhWkhMYW9NWXYuZmRUbUVXbVVLIjtzOjE3OiJEYXNoYm9hcmRfZmlsdGVycyI7YToyOntzOjk6InN0YXJ0RGF0ZSI7TjtzOjc6ImVuZERhdGUiO047fXM6ODoiZmlsYW1lbnQiO2E6MDp7fX0=', 1735378789),
('vYifE2vnBLaedqopyjqkPXvfvC6y9oW1BBLEQjf7', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZUpuM1N4aFczY0o4M2ZyaHUzd2ZUcmNZNGdkTXE2TFNBVGt4WmZZRCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Nzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ob21lL2RldGFpbGtlbGFzL2JlbGFqYXItaXJhbWEtamloYXJrYWgtc3VyYWgtYWxmYXRpaGFoIjt9fQ==', 1734967222);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `yt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ig` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `site_name`, `keyword`, `email`, `address`, `phone`, `description`, `yt`, `ig`, `fb`, `logo`, `long_logo`, `thumbnail`, `heading`, `badge`, `video`, `created_at`, `updated_at`) VALUES
(1, 'NOI', 'Ngaji Online Indonesia', 'info@noi.com', 'BHUMI JIMBARAN ASRI, Jl.Arsitek jimbqra, Kuta Selatan, Badung, Bali', '082235313577', 'Ngaji Bersama: \nMeningkatkan iman dan ilmu melalui pembelajaran online yang interaktif.\n\nProgram Ngaji Online kami menawarkan pembelajaran Al-Qur\'an yang komprehensif dan interaktif. \n\nDengan ustaz/ustadzah berpengalaman, Anda dapat belajar dengan mudah dan fleksibel. Fasilitas:\n\n- Pembelajaran langsung dengan ustaz/ustadzah\n\n- Materi yang terstruktur dan mudah dipahami\n\n- Diskusi dan tanya-jawab interaktif\n\n- Sertifikat kelulusan\n\nNgaji Bersama adalah program belajar Al-Qur\'an online yang dirancang untuk membangun iman dan ilmu. Kami menawarkan:\n\n- Pembelajaran Al-Qur\'an dasar dan lanjutan\n\n- Tafsir Al-Qur\'an dan hadits\n\n- Pembelajaran bahasa Arab\n\n- Komunitas belajar yang aktif', 'https://chatgpt.com/', 'https://chatgpt.com/', 'https://zen-browser.app/', 'image-upload-server/01JFMWVEGGHV4RK65K7JSM1P0Z.png', 'image-upload-server/01JFMWVEGJYR8NSTZJW0EY5EKR.png', 'image-upload-server/01JFMW9PY3BNHC6Z80T3GCNEB8.jpg', 'Belajar, Berbagi & Berkembang', 'Koneksi langsung dengan Ustadz Ustadzah terpercaya!', '{\"width\":\"16\",\"height\":\"9\",\"responsive\":true,\"url\":\"https:\\/\\/youtu.be\\/PMYDXDOC_As?si=FTTqp5a9ccJceyHP\",\"embed_url\":\"https:\\/\\/www.youtube.com\\/embed\\/PMYDXDOC_As?si=FTTqp5a9ccJceyHP?controls=1&start=0\",\"options\":{\"controls\":\"1\",\"nocookie\":\"0\",\"start\":\"00:00:00\"}}', '2024-11-29 12:45:19', '2024-12-21 15:19:54');

-- --------------------------------------------------------

--
-- Table structure for table `testimonis`
--

CREATE TABLE `testimonis` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `kelas_id` bigint(20) UNSIGNED NOT NULL,
  `nota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `amount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'GRATIS', 'gratis', '2024-11-29 16:23:02', '2024-12-22 02:06:41'),
(2, 'BERBAYAR', 'berbayar', '2024-11-29 16:23:14', '2024-12-22 02:06:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `status` int(11) NOT NULL DEFAULT '0',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `tempat_lahir`, `tanggal_lahir`, `umur`, `phone`, `alamat`, `jk`, `role`, `bio`, `status`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrator ', 'admin@admin.com', '$2y$12$9nXTeiRuPetpQgO.MNfs9O7fXky55D5gWHaZHLaoMYv.fdTmEWmUK', 'Indonesia', '2002-02-27', 22, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'admin', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sint porro dolor, distinctio temporibus ipsum, quos veritatis cumque labore, consectetur atque? Reprehenderit tenetur commodi necessitatibus deserunt adipisci praesentium, sint accusantium sequi nemo beatae possimus. Consequuntur eos qui quas possimus sint veritatis, harum aut atque quam, ullam, cum quos ut magni!</p>', 1, 'image-upload-server/01JFP752VVY8ASW8S7F1667QJK.jpg', '6L4WOORDmZxwqwa65CCfJbBKr96KytW8CiTWmbc6ADLzKKlUuOrYX0lkfRcc', '2024-11-29 05:41:06', '2024-12-22 03:39:10'),
(2, 'Mentor', 'mentor@mentor.com', '$2y$12$9nXTeiRuPetpQgO.MNfs9O7fXky55D5gWHaZHLaoMYv.fdTmEWmUK', 'Indonesia', '2002-12-03', 22, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'mentor', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum veritatis, incidunt, saepe error nam rerum, voluptatibus enim facilis quibusdam vitae minus sequi fuga laudantium!</p>', 1, 'image-upload-server/01JE5GQWYAM4ATWX4HKWGNNVVD.svg', NULL, '2024-12-03 05:43:57', '2024-12-17 09:37:01'),
(3, 'Muhammad Febriansyah', 'muhammadfebrian121@gmail.com', '$2y$12$ZlJiMKuw/j.jy3Ra3qoym.OnT.zFjRMTgUH.MGZWK3/QHIWV/sd.u', 'Indonesia', '2007-06-20', 17, '081295916567', 'NUSA TENGGARA BARAT', 'Laki-laki', 'student', NULL, 1, 'profile/Bz98VY2QCIJBKVAppYRVShPZ9el72f295wQ6hVk5.png', NULL, '2024-12-14 12:45:17', '2024-12-18 00:14:14'),
(4, 'Albab', 'atpeelun@gmail.com', '$2y$12$CwVV0J4qlfXmP1Ar9vjGAeGXINUmUYkJIF1F5B3yNzNySNm/mmCES', '441albab', NULL, 32, '087790100077', NULL, 'Laki-Laki', 'student', NULL, 1, NULL, NULL, '2024-12-21 12:26:18', '2024-12-21 12:26:18');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `section_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_news`
--
ALTER TABLE `category_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jadwals`
--
ALTER TABLE `jadwals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kelas_slug_unique` (`slug`),
  ADD KEY `kelas_category_id_foreign` (`category_id`),
  ADD KEY `kelas_user_id_foreign` (`user_id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sections_kelas_id_foreign` (`kelas_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonis`
--
ALTER TABLE `testimonis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `testimonis_kelas_id_foreign` (`kelas_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_section_id_foreign` (`section_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `category_news`
--
ALTER TABLE `category_news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `jadwals`
--
ALTER TABLE `jadwals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `testimonis`
--
ALTER TABLE `testimonis`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kelas`
--
ALTER TABLE `kelas`
  ADD CONSTRAINT `kelas_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `kelas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_kelas_id_foreign` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `testimonis`
--
ALTER TABLE `testimonis`
  ADD CONSTRAINT `testimonis_kelas_id_foreign` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`);

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
