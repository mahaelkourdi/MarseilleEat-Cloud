-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 16, 2021 at 01:07 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `marseilleEat`
--

-- --------------------------------------------------------

--
-- Table structure for table `Administrateur`
--

CREATE TABLE `Administrateur` (
  `id` int(12) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Administrateur`
--

INSERT INTO `Administrateur` (`id`, `username`, `password`) VALUES
(1, 'root', 'root');

-- --------------------------------------------------------

--
-- Table structure for table `Avis`
--

CREATE TABLE `Avis` (
  `idAvis` int(11) NOT NULL,
  `user` varchar(60) NOT NULL,
  `avis` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Avis`
--

INSERT INTO `Avis` (`idAvis`, `user`, `avis`) VALUES
(1, 'Chris', 'Satisfait de ma commande, il y avait suffisamment de viande, en revanche la part de gratin dauphinois était plutôt légère à mon gout. Le sucre sur la crème brûlé n’était pas brûlé. Livraison trop longue par rapport à ce qui était annoncé.'),
(2, 'Anonyme', 'Trop long plus de 90 min d\'attente. haricot vert en conserve, viande brûlée . Je ne recommanderai plus'),
(3, 'Élisabeth', 'Scandaleux\r\nCommande a 11h38 reçu à 13h05\r\nTout ça pour une viande semelle\r\nJe ne commanderai plus'),
(4, 'Anonyme', 'Le Hamburger était bon par contre la portion de frites maison est très petite car mélangée au hamburger. Le tiramisu très bon. La sauce gorgonzola aucun goût car très peu de fromage. Le positif : on sent que c\'est fait maison. Livraison très rapide'),
(5, 'bourbon', 'Super Bon! Des produits de qualités, tarifs raisonnables'),
(6, 'Alice', 'Bonne qualité de nourriture et le vrai goût du fait maison ca fait du bien\r\n'),
(7, 'ANGELIQUE', 'Super pour une première j’ai étais ravis le repas étais délicieux\r\n'),
(8, 'Frederic', 'Vraiment très bien\r\n'),
(9, 'Andres', 'Super!!\r\n'),
(10, 'Djama', 'Nikel rien à dire je le recommande\r\n'),
(11, 'Anonyme', 'Parfait'),
(12, 'Anonyme', 'Vraiment rien à dire parfait\r\n'),
(13, 'Noura', 'Au top comme d habitude rien a dire les menues trop bon et les livreurs super\r\n'),
(14, 'juillet', 'Je commande régulièrement à the best, jamais déçue , je recommande\r\n'),
(15, 'Anonyme', 'Commande arrivée plus rapide que prévue les hamburgers super bon les frites tièdes pas troc chaude mais excellente au goût'),
(16, 'Hasbia', 'Livreur très agréable, poli et serviable. En ce qui concerne le repas, c\'est pas la première fois que je commande dans ce restaurant et je ne suis jamais déçu.'),
(17, 'Fabienne', 'Frites froides et pas assez cuites Temps de livraison trop long Dommage car le goût des burgers est excellent'),
(18, 'sophien', 'Très bon et service rapide. Cependant la boisson commandée n\'était pas celle qui a été livrée\r\n'),
(19, 'Anonyme', 'Hamburger tres bon , cependant il manque des sauces , peu de frites par portion\r\n'),
(20, 'Anonyme', 'Hamburger dans la norme ni plus ni moins Aucune sauce pour les frites Livraison rapide Boissons remplacée par une autre sans en référer au client. Erreur? Oubli ? Produit manquant ? Desserts et boisson avec le chaud Moyen'),
(21, 'Brigitte', 'Livraison pile à l\'heure... Parfait...\r\n'),
(22, 'Nicolas', 'Temps dépassé .On a eu quune glace au lieu de 2\r\n'),
(23, 'Angelique', 'Je recommande vivement excellent, rapide et pas cher\r\n'),
(24, 'Anonyme', 'Au top comme toujours. Plusieur mois que l\'on commande ici. Il ne livré plus un certain moment par chez nous cetais super dommage et comme par magie ils sont revenu pour le plus grand plaisir des petits et des grands'),
(25, 'harry', 'Rien à dire tout était vraiment excellent\r\n'),
(41, 'Anonyme', 'Trop bon'),
(42, 'Anonyme', 'Trop bon'),
(43, 'Erwan', 'Super'),
(44, 'brguy', 'hgruyh'),
(45, 'jrtgij', 'hruighui'),
(46, 'rghuir', 'hgiuerth'),
(47, 'gniuh', 'huigrh'),
(48, 'Salut', 'Salut');

-- --------------------------------------------------------

--
-- Table structure for table `Evolution`
--

CREATE TABLE `Evolution` (
  `idEvolution` int(11) NOT NULL,
  `idRestaurant` int(11) NOT NULL,
  `nbAvis` int(11) NOT NULL,
  `moyenne` double NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Evolution`
--

INSERT INTO `Evolution` (`idEvolution`, `idRestaurant`, `nbAvis`, `moyenne`, `date`) VALUES
(1, 12, 3, 4.444, '2021-03-17 20:08:43'),
(2, 11, 2, 4, '2021-03-17 20:08:43'),
(3, 10, 2, 4, '2021-03-17 20:08:43'),
(4, 9, 2, 3.833, '2021-03-17 20:08:43'),
(5, 8, 2, 3.166, '2021-03-17 20:08:43'),
(6, 7, 2, 3.5, '2021-03-17 20:08:43'),
(7, 6, 2, 3.166, '2021-03-17 20:08:43'),
(8, 5, 2, 3.166, '2021-03-17 20:08:43'),
(9, 4, 2, 3.166, '2021-03-17 20:08:43'),
(10, 3, 2, 1.833, '2021-03-17 20:08:43'),
(11, 2, 2, 2.833, '2021-03-17 20:08:43'),
(12, 1, 2, 4, '2021-03-17 20:08:43'),
(25, 1, 1, 3, '2021-04-18 10:19:27'),
(26, 3, 1, 3, '2021-04-23 13:16:37'),
(27, 10, 1, 4.666666666666667, '2021-04-25 18:30:06'),
(28, 9, 1, 0, '2021-04-25 18:35:12'),
(29, 4, 1, 3.3333333333333335, '2021-04-25 18:38:07');

-- --------------------------------------------------------

--
-- Table structure for table `Note`
--

CREATE TABLE `Note` (
  `idNote` int(11) NOT NULL,
  `idRestaurant` int(11) NOT NULL,
  `idAvis` int(11) NOT NULL,
  `cuisine` int(11) NOT NULL,
  `rapport` int(11) NOT NULL,
  `service` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Note`
--

INSERT INTO `Note` (`idNote`, `idRestaurant`, `idAvis`, `cuisine`, `rapport`, `service`, `date`) VALUES
(1, 1, 1, 3, 4, 4, '2021-03-17 20:08:43'),
(2, 2, 2, 1, 1, 1, '2021-03-17 20:08:43'),
(3, 3, 3, 2, 1, 3, '2021-03-17 20:08:43'),
(4, 4, 4, 2, 2, 3, '2021-03-17 20:08:43'),
(5, 5, 5, 4, 3, 4, '2021-03-17 20:08:43'),
(6, 6, 6, 4, 4, 4, '2021-03-17 20:08:43'),
(7, 7, 7, 5, 4, 4, '2021-03-17 20:08:43'),
(8, 8, 8, 4, 4, 4, '2021-03-17 20:08:43'),
(9, 9, 9, 4, 3, 5, '2021-03-17 20:08:43'),
(10, 10, 10, 4, 3, 5, '2021-03-17 20:08:43'),
(11, 11, 11, 4, 4, 4, '2021-03-17 20:08:43'),
(12, 12, 12, 4, 3, 4, '2021-03-17 20:08:43'),
(13, 11, 13, 4, 3, 5, '2021-03-17 20:08:43'),
(14, 12, 14, 5, 5, 5, '2021-03-17 20:08:43'),
(15, 10, 15, 4, 3, 5, '2021-03-17 20:08:43'),
(16, 9, 16, 4, 3, 4, '2021-03-17 20:08:43'),
(17, 8, 17, 3, 2, 2, '2021-03-17 20:08:43'),
(18, 7, 18, 3, 2, 3, '2021-03-17 20:08:43'),
(19, 6, 19, 2, 2, 3, '2021-03-17 20:08:43'),
(20, 5, 20, 3, 2, 3, '2021-03-17 20:08:43'),
(21, 4, 21, 4, 3, 5, '2021-03-17 20:08:43'),
(22, 3, 22, 2, 1, 2, '2021-03-17 20:08:43'),
(23, 2, 23, 4, 5, 5, '2021-03-17 20:08:43'),
(24, 1, 24, 4, 4, 5, '2021-03-17 20:08:43'),
(25, 12, 25, 4, 5, 5, '2021-03-17 20:08:43'),
(39, 1, 41, 3, 3, 3, '2021-04-18 10:19:27'),
(40, 3, 42, 3, 3, 3, '2021-04-23 13:16:37'),
(41, 10, 43, 5, 5, 5, '2021-04-25 18:30:06'),
(42, 10, 44, 0, 0, 0, '2021-04-25 18:30:15'),
(43, 10, 45, 1, 1, 2, '2021-04-25 18:30:36'),
(44, 10, 46, 0, 0, 0, '2021-04-25 18:30:48'),
(45, 9, 47, 0, 0, 0, '2021-04-25 18:35:12'),
(46, 4, 48, 3, 4, 4, '2021-04-25 18:38:07');

-- --------------------------------------------------------

--
-- Table structure for table `Restaurant`
--

CREATE TABLE `Restaurant` (
  `idRestaurant` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `adresse` varchar(80) NOT NULL,
  `codePostal` int(11) NOT NULL,
  `specialite` varchar(60) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Restaurant`
--

INSERT INTO `Restaurant` (`idRestaurant`, `nom`, `adresse`, `codePostal`, `specialite`, `latitude`, `longitude`) VALUES
(1, 'CHEZ ETIENNE', '43, rue Lorette', 13002, 'Italien & Pizzas', 43.29695, 5.38107),
(2, 'AM', '9, rue François-Rocca', 13008, 'Cuisine d\'auteur', 43.270044, 5.3862604),
(3, 'OTTO', '150, rue Jean-Mermoz', 13008, 'Italien', 43.2711315, 5.3871808),
(4, 'L\'AUBERGE DU CORSAIRE - CHEZ PAUL', '35, rue Désiré-Pelaprat', 13008, 'Pizzas & Poissons et fruits de mer', 43.2155391, 5.3445538),
(5, 'HAKO+', '218, chemin du Roucas Blanc', 13007, 'Japonais', 43.282401, 5.3679832),
(6, 'La Baguette Impériale', '29 Avenue de Saint-Julien', 13012, 'Chinois, Thaïlandais, Wok', 43.3075361, 5.4253692),
(7, 'Sushi Luxe', '3 Rue de Roubaix', 13013, 'Sushi, Japonais', 43.3224395, 5.4128387),
(8, 'Le King du Tacos', '3 Rue de Roubaix', 13013, 'Sandwiches, Halal, Tacos', 43.3224395, 5.4128387),
(9, 'Asian Time Marseille', '73 Avenue de Toulon', 13006, 'Sushi, Thaïlandais, Halal', 43.2850508, 5.3897868),
(10, 'Le 400', '99 Boulevard de Sainte-Marguerite', 13009, 'Burgers, Tacos', 43.2631489, 5.4113271),
(11, 'La Cantine', '66 Rue Longue des Capucins', 13001, 'Français, Burgers, Pâtes', 43.3004925, 5.3784929),
(12, 'The Best', '169 Rue Saint-Pierre', 13005, 'Burgers, Sandwiches, Tacos', 43.2922294, 5.3952503);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Administrateur`
--
ALTER TABLE `Administrateur`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Avis`
--
ALTER TABLE `Avis`
  ADD PRIMARY KEY (`idAvis`);

--
-- Indexes for table `Evolution`
--
ALTER TABLE `Evolution`
  ADD PRIMARY KEY (`idEvolution`);

--
-- Indexes for table `Note`
--
ALTER TABLE `Note`
  ADD PRIMARY KEY (`idNote`),
  ADD KEY `fk_avis` (`idAvis`),
  ADD KEY `fk_resto` (`idRestaurant`);

--
-- Indexes for table `Restaurant`
--
ALTER TABLE `Restaurant`
  ADD PRIMARY KEY (`idRestaurant`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Administrateur`
--
ALTER TABLE `Administrateur`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Avis`
--
ALTER TABLE `Avis`
  MODIFY `idAvis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `Evolution`
--
ALTER TABLE `Evolution`
  MODIFY `idEvolution` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `Note`
--
ALTER TABLE `Note`
  MODIFY `idNote` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `Restaurant`
--
ALTER TABLE `Restaurant`
  MODIFY `idRestaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Note`
--
ALTER TABLE `Note`
  ADD CONSTRAINT `fk_avis` FOREIGN KEY (`idAvis`) REFERENCES `Avis` (`idAvis`),
  ADD CONSTRAINT `fk_resto` FOREIGN KEY (`idRestaurant`) REFERENCES `Restaurant` (`idRestaurant`);
