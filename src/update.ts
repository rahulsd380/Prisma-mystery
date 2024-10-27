import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Update single data
  // const updateSingleData = await prisma.user.update({
  //   where: {
  //       id :1
  //   },
  //   data : {
  //       name:"Ahad"
  //   }
  // });

  // Update multiple data
  // const updateMultipleData = await prisma.user.updateMany({
  //   where: {
  //       name:"Rahul Sutradhar"
  //   },
  //   data : {
  //       name:"Steve Smith"
  //   }
  // });


  const upsertData = await prisma.user.upsert({
    where: {
        id:1
    },
    update : {
        name:"Steve Smith"
    },
    create : {
      name:"Rahul Sutradhar",
      email : "asdsa@gmail.com",
      address : "123 Main Street"
    }
  });

  console.log({ upsertData });
};

main();
