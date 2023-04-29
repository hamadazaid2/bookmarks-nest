import { Prisma } from '@prisma/client';

export type BookmarkWhereInput = {
  id?: number;
  title?: string;
  description?: string | null;
  link?: string;
  userId?: number;
} & Prisma.BookmarkWhereInput;
