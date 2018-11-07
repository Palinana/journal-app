const db = require('../server/db');
const {User, Entry} = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({username: 'sam', password: '123'}),
    User.create({username: 'cody_01', password: '456'}),
    User.create({username: 'david_90', password: '123'}),
  ])

  const entries = await Promise.all([
    Entry.create({name: "Trip to Spain", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", userId: 1 }),
    Entry.create({name: "Books", description: "Mauris vitae ultricies leo integer malesuada nunc. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Lacinia at quis risus sed vulputate odio ut enim. Massa massa ultricies mi quis. Risus nec feugiat in fermentum posuere urna. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Ut tortor pretium viverra suspendisse potenti nullam. Viverra ipsum nunc aliquet bibendum enim. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Purus in mollis nunc sed id semper risus in hendrerit. Quis viverra nibh cras pulvinar mattis nunc sed. Arcu dui vivamus arcu felis bibendum ut tristique et.", userId: 1 }),
    Entry.create({name: "My Notes", description: "Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Faucibus et molestie ac feugiat sed lectus. Vulputate ut pharetra sit amet aliquam id diam. Posuere urna nec tincidunt praesent. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Dui faucibus in ornare quam viverra. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Mauris vitae ultricies leo integer malesuada nunc vel. Id consectetur purus ut faucibus. Nulla aliquet enim tortor at auctor urna. Morbi tincidunt ornare massa eget. Sit amet consectetur adipiscing elit duis tristique. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Iaculis nunc sed augue lacus. Viverra orci sagittis eu volutpat odio facilisis. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Leo duis ut diam quam nulla porttitor massa id. Orci eu lobortis elementum nibh tellus molestie. Aenean euismod elementum nisi quis. Integer feugiat scelerisque varius morbi. Ut pharetra sit amet aliquam id diam. At quis risus sed vulputate odio. In vitae turpis massa sed elementum tempus egestas. Congue eu consequat ac felis donec et odio pellentesque diam. Volutpat ac tincidunt vitae semper. Eu scelerisque felis imperdiet proin fermentum leo vel. Feugiat in fermentum posuere urna nec tincidunt praesent. Sed enim ut sem viverra.", userId: 2 }),
    Entry.create({name: "To Do List", description: "Integer eget aliquet nibh praesent tristique magna sit amet. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Justo laoreet sit amet cursus sit amet. Commodo viverra maecenas accumsan lacus vel facilisis. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Odio euismod lacinia at quis risus sed vulputate odio. Commodo quis imperdiet massa tincidunt nunc pulvinar. Ut consequat semper viverra nam libero. Risus sed vulputate odio ut enim.", userId: 2 }),
    Entry.create({name: "Famous stories", description: "nteger eget aliquet nibh praesent.", userId: 3 })
  ])
 
  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection');
    db.close()
    console.log('db connection closed');
  })

console.log('seeding...');