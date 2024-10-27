import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Find all data from table
  const getAllDataFromDB = await prisma.user.findMany();

  //   Find the first data
  const findFirst = await prisma.user.findFirstOrThrow({
    where: {
      email: "rahul@example.com",
    },
  });


  // Find the unique data
  const findUnique = await prisma.user.findUniqueOrThrow({
    where: {
        id:1
    },
    select: {
      name: true
    }
  })
  console.log({ findUnique });
};

main();
