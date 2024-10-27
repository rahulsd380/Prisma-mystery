import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Delete single data
//   const deleteSingleData = await prisma.user.delete({
//     where: {
//         id :1
//     }
//   });

  // Delete multiple data
//   const deleteMultipleData = await prisma.user.deleteMany({
//     where: {
//         name:"Steve Smith"
//     }
//   });

  const deleteAllData = await prisma.user.deleteMany({})

  console.log({ deleteAllData });
};

main();
