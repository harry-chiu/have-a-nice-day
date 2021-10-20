const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04']; // 未使用到

const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
];
const userData = {
  U01: 'Tom',
  U02: 'Sam',
  U03: 'John',
};
const orderData = {
  T01: { name: 'A', price: 499 },
  T02: { name: 'B', price: 599 },
  T03: { name: 'C', price: 699 },
  T04: { name: 'D', price: 799 },
};

function dataTransformer({
  userIds = [],
  userOrders = [],
  userData = {},
  orderData = {},
}) {
  return userIds.map(userId => {
    const userName = userData[userId] || null;

    // 這邊將判斷式抽出另外宣告一個語義化的變數是過往的開發習慣
    // 若團隊有公版的 Guideline 則會遵循團隊讓整體 code style 統一
    const isCurrentUser = userOrder => userOrder.userId === userId;
    const currentUserOrders = userOrders.find(isCurrentUser) || {};
    const orderIds = currentUserOrders.orderIds || [];

    return {
      user: {
        id: userId,
        name: userName,
      },
      orders: orderIds.map(orderId => ({
        id: orderId,
        ...orderData[orderId],
      })),
    };
  });
}

const transformedData = dataTransformer({
  userIds,
  userOrders,
  userData,
  orderData,
});

console.log(transformedData);

// Output:
// [
//   {
//     user: { id: 'U01', name: 'Tom' },
//     orders: [
//       { id: 'T01', name: 'A', price: 499 },
//       { id: 'T02', name: 'B', price: 599 },
//     ],
//   },
//   { user: { id: 'U02', name: 'Sam' }, orders: [] },
//   {
//     user: { id: 'U03', name: 'John' },
//     orders: [{ id: 'T03', name: 'C', price: 699 }],
//   },
// ];
