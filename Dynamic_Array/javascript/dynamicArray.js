export default class DynamicArray {
  size = 0;
  capacity = 10;
  array;
  constructor() {
    this.array = new Array(this.capacity);
  }

  add(data) {
    if (this.size >= this.capacity) {
      this.grow();
    }
    this.array[this.size] = data;
    this.size++;
    if (this.size >= this.capacity) {
      this.grow();
    }
  }

  insert(index, data) {
    if (this.size >= this.capacity) {
      this.grow();
    }

    for (let i = this.size; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[index] = data;
    this.size++;
  }

  delete(data) {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] == data) {
        for (let n = i; n < this.size; n++) {
          this.array[n] = this.array[n + 1];
        }
        this.size--;
        if (this.size < parseInt(this.capacity / 3)) {
          this.shrink();
        }
        break;
      }
    }
  }

  search(data) {
    let index;
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] == data) {
        index = i;
        break;
      }
    }
    return index;
  }

  grow() {
    let nCapacity = 10 * 2;
    let nArray = new Array(nCapacity);
    for (let i = 0; i < this.size; i++) {
      nArray[i] = this.array[i];
    }
    this.array = nArray;
    this.capacity = nCapacity;
  }

  shrink() {
    let nCapacity = this.capacity / 2;
    let nArray = new Array(nCapacity);
    for (let i = 0; i < this.size; i++) {
      nArray[i] = this.array[i];
    }
    this.array = nArray;
    this.capacity = nCapacity;
  }

  isEmpty() {
    return this.size == 0;
  }
}
