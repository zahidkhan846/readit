import {MigrationInterface, QueryRunner} from "typeorm";

export class createVotesTable1622049291604 implements MigrationInterface {
    name = 'createVotesTable1622049291604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `votes` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `value` int NOT NULL, `username` varchar(255) NOT NULL, `postId` int NULL, `commentId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_42377e3f89a203ca74d117e5961`");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `username` `username` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_79326ff26ef790424d820d54a72` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_b5b05adc89dda0614276a13a599` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_554879cbc33538bf15d6991f400` FOREIGN KEY (`commentId`) REFERENCES `comments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_42377e3f89a203ca74d117e5961` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_42377e3f89a203ca74d117e5961`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_554879cbc33538bf15d6991f400`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_b5b05adc89dda0614276a13a599`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_79326ff26ef790424d820d54a72`");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `username` `username` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_42377e3f89a203ca74d117e5961` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("DROP TABLE `votes`");
    }

}
