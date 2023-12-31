let menu: Array<{
  name: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
}> = [
  {
    name: 'Margherita Pizza',
    description:
      'Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.',
    price: 12.99,
    img: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Chicken Alfredo Pasta',
    description:
      'Creamy Alfredo sauce served with grilled chicken breast and fettuccine pasta.',
    price: 14.99,
    img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMEFsZnJlZG8lMjBQYXN0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Vegetable Stir Fry',
    description:
      'Assorted fresh vegetables stir-fried in a savory sauce, served with steamed rice.',
    price: 10.99,
    img: 'https://cdn.pixabay.com/photo/2017/02/23/15/29/oriental-2092468_1280.jpg',
    quantity: 1,
  },
  {
    name: 'Grilled Salmon',
    description:
      'Grilled salmon fillet served with roasted vegetables and lemon dill sauce.',
    price: 16.99,
    img: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMFNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Caesar Salad',
    description:
      'Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
    price: 8.99,
    img: 'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Beef Burger',
    description:
      'Juicy beef patty with lettuce, tomato, cheese, and pickles, served in a bun.',
    price: 9.99,
    img: 'https://images.unsplash.com/photo-1560130803-aaadb4bc913e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVlZiUyMEJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Mango Smoothie',
    description:
      'Refreshing smoothie made with fresh mangoes, yogurt, and a hint of honey.',
    price: 5.99,
    img: 'https://cdn.pixabay.com/photo/2022/10/30/05/22/juice-7556620_1280.jpg',
    quantity: 1,
  },
  {
    name: 'Chocolate Brownie Sundae',
    description:
      'Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.',
    price: 7.99,
    img: 'https://images.unsplash.com/photo-1648857529887-28d03f6774ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hvY29sYXRlJTIwQnJvd25pZSUyMFN1bmRhZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Vegetarian Pizza',
    description:
      'Delicious pizza loaded with assorted vegetables and melted cheese.',
    price: 11.99,
    img: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmVnZXRhcmlhbiUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Shrimp Scampi',
    description:
      'Tender shrimp sautéed in garlic butter sauce, served over linguine pasta.',
    price: 15.99,
    img: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hyaW1wJTIwU2NhbXBpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Caprese Salad',
    description:
      'Fresh mozzarella cheese, tomatoes, basil, and balsamic glaze.',
    price: 9.49,
    img: 'https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'BBQ Pulled Pork Sandwich',
    description:
      'Slow-cooked pulled pork smothered in BBQ sauce, served in a bun with coleslaw.',
    price: 13.49,
    img: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJCUSUyMFB1bGxlZCUyMFBvcmslMjBTYW5kd2ljaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Fried Rice',
    description:
      'Flavorful fried rice with mixed vegetables, egg, and your choice of chicken, beef, or tofu.',
    price: 12.99,
    img: 'https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081_1280.jpg',
    quantity: 1,
  },
  {
    name: 'Cheese Quesadilla',
    description:
      'Tortilla filled with melted cheese, served with salsa and sour cream.',
    price: 6.99,
    img: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVlc2FkaWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
  {
    name: 'Vanilla Milkshake',
    description:
      'Creamy vanilla milkshake topped with whipped cream and a maraschino cherry.',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1643094263180-9ca517fe03b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFuaWxsYSUyME1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    quantity: 1,
  },
];
