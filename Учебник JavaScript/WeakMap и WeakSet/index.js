let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const unread = new WeakSet();
unread.add(messages[0]);

/*-------------------*/
let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const unread2 = new WeakMap();

unread2.set(messages2[0], Date.now());
console.log(unread2.get(messages2[0]));
