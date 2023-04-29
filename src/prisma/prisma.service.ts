import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

// Any class use DI needs to be Injecatble
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get<string>('DATABASE_URL'),
        },
      },
    });
  }

  // This is what need to be done before e2e test. And this delete all bookmarks and users every time the test run
  cleanDb() {
    // We have to delete the bookmark before user, because bookmark belong to user, and if we delete user before bookmark, then a error will happen, OR we can go to prisma schema and add (onDelete: Cascade), and if we do this, then the deleting order is not important

    // In order to delete the booamrk and then delete user
    // to make sure that the things are done in the specific order.
    return this.$transaction([
      this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
