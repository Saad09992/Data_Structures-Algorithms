import DynamicArray from "./dynamicArray.js";

let dynamicArray = new DynamicArray();

dynamicArray.add("hello");
dynamicArray.add("hi");
dynamicArray.add("jlo");
dynamicArray.add("bye");

dynamicArray.add("hello");
dynamicArray.add("hi");
dynamicArray.add("jlo");
dynamicArray.add("bye");
dynamicArray.add("hello");
dynamicArray.add("hi");
dynamicArray.add("jlo");
dynamicArray.add("bye");
dynamicArray.add("hello");
dynamicArray.add("hi");
dynamicArray.add("jlo");
dynamicArray.add("bye");
dynamicArray.delete("hello");
dynamicArray.delete("hello");
dynamicArray.delete("bye");
dynamicArray.delete("hello");
dynamicArray.delete("hi");
dynamicArray.delete("jlo");
dynamicArray.delete("ye");
dynamicArray.delete("hello");
dynamicArray.delete("hi");
dynamicArray.delete("jlo");
dynamicArray.delete("bye");
dynamicArray.delete("hi");

dynamicArray.delete("bye");

dynamicArray.insert(2, "teesting");
console.log(dynamicArray.search("jlo"));
console.log(dynamicArray.array);
console.log("Length", dynamicArray.size);
console.log("Capacity", dynamicArray.capacity);
console.log(dynamicArray.isEmpty());
