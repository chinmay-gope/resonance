import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { env } from "./env";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as { prisma?: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };
