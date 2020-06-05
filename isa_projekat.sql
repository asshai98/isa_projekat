/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : isa_projekat

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 05/06/2020 16:04:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for campaigns
-- ----------------------------
DROP TABLE IF EXISTS `campaigns`;
CREATE TABLE `campaigns`  (
  `campaign_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `starts_at` datetime(0) NOT NULL,
  `ends_at` datetime(0) NOT NULL,
  PRIMARY KEY (`campaign_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of campaigns
-- ----------------------------

-- ----------------------------
-- Table structure for campaigns_history
-- ----------------------------
DROP TABLE IF EXISTS `campaigns_history`;
CREATE TABLE `campaigns_history`  (
  `campaign_history_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `campaign_id` int(0) UNSIGNED NOT NULL,
  `history_id` int(0) UNSIGNED NOT NULL,
  PRIMARY KEY (`campaign_history_id`) USING BTREE,
  INDEX `fk_campaigns_history_campaign_id`(`campaign_id`) USING BTREE,
  INDEX `fk_campaigns_history_history_id`(`history_id`) USING BTREE,
  CONSTRAINT `fk_campaigns_history_campaign_id` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`campaign_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_campaigns_history_history_id` FOREIGN KEY (`history_id`) REFERENCES `history` (`history_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of campaigns_history
-- ----------------------------

-- ----------------------------
-- Table structure for characters
-- ----------------------------
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters`  (
  `character_id` int(0) NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `clas` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `race` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`character_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of characters
-- ----------------------------

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence`  (
  `next_val` bigint(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES (2);
INSERT INTO `hibernate_sequence` VALUES (2);

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history`  (
  `history_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`history_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of history
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `forename` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `universe` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Andjela', 'Jovanovic', 'andjela.jo998@gmail.com', 'andj98', '12345', 'Avernus');
INSERT INTO `users` VALUES (2, 'Marko', 'Zjalic', 'zija@gmail.com', 'zija97', '12345', 'Avernus');
INSERT INTO `users` VALUES (4, 'Test', 'Testic', 'test@gmail.com', 'test123', '1234', 'Astroneer');
INSERT INTO `users` VALUES (5, 'Test1', 'Test12', 'test123@gmail.com', 'test1234', 'test123456', 'Astroneer');

-- ----------------------------
-- Table structure for users_campaigns
-- ----------------------------
DROP TABLE IF EXISTS `users_campaigns`;
CREATE TABLE `users_campaigns`  (
  `user_campaign_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(0) UNSIGNED NOT NULL,
  `campaign_id` int(0) UNSIGNED NOT NULL,
  PRIMARY KEY (`user_campaign_id`) USING BTREE,
  INDEX `fk_users_campaigns_user_id`(`user_id`) USING BTREE,
  INDEX `fk_users_campaigns_campaign_id`(`campaign_id`) USING BTREE,
  CONSTRAINT `fk_users_campaigns_campaign_id` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`campaign_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_users_campaigns_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users_campaigns
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
