-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `salt` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `freezed` INTEGER NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NOT NULL DEFAULT '',
    `desc` VARCHAR(191) NOT NULL DEFAULT '',
    `create_time` DATETIME NOT NULL DEFAULT NOW(),
    `update_time` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE NOW() ,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
