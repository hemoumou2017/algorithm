// 节点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// 链表
class LinkedList {
  constructor() {
    // 链表头
    this.head = null;
    // 链表长度
    this.length = 0;
  }
  // 链表尾部追加元素
  append(element) {
    // 创建节点
    let node = new Node(element);

    //如果链表是空
    if (this.length === 0) {
      this.head = node;
    } else {
      // 通过head找到后面的节点
      let current = this.head;
      // 遍历，是否是最后一个节点，next为空就是最后一个节点
      while (current.next) {
        current = current.next;
      }
      // while执行完，current就已经是最后一个节点了
      current.next = node;
    }

    this.length += 1;
  }
  // 获取链表头
  getHead() {
    return this.head;
  }
  // tostring
  toString() {
    let current = this.head;
    let linkString = "";

    while (current) {
      linkString += "," + current.element;
      current = current.next;
    }
    // 返回的最终结果 【，a，】从第一个位置开始
    return linkString.slice(1);
  }

  // 插入元素
  insert(element, position) {
    // 位置非负数
    if (position < 0 || position > this.length) {
      return false;
    }
    // position 》 1
    let index = 0;
    let current = this.head;

    // 上一个节点
    let privious = null;
    // 创建元素
    let node = new Node(element);
    if (position === 0) {
      // 新节点next指向原来的head节点
      node.next = this.head;
      this.head = node;
    } else {
      while (index < position) {
        privious = current;
        current = current.next;
        index++;
      }
      node.next = current;
      privious.next = node;
    }
    this.length += 1;
    return true;
  }

  // 获取对应位置的元素
  get(position) {
    // 越界判断
    if (position < 0 || position > this.length) {
      return null;
    }
    // 获取对应节点
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.element;
  }
  // 根据值删除节点
  remove(element) {
    if (this.length < 1) return null;
    let current = this.head;
    if (current.element == element) {
      this.head = this.head.next;
      this.length--;
    } else {
      while (current.next) {
        if (current.next.element == element) {
          current.next = current.next.element;
          this.length--;
        } else {
          current = current.next;
        }
      }
      return current.element;
    }
  }
  // 根据元素位置删除节点
  removeAt(position) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return null;
    }
    // 定义变量，保存信息
    let current = this.head;
    let index = 0;
    let privious = null;
    // 判断深处的是否是第一个节点
    if (position === 0) {
      this.head = this.head.next;
    } else {
      while (index < position) {
        privious = current;
        current = current.next;
        index++;
      }
      privious.next = current.next;
    }
    //length-1
    this.length--;
    return current.element;
  }
  // 删除所有匹配的相同元素
  removeAll(element) {
    // let node = new Node(position)
    // let
  }
  // 修改元素信息
  set(position, element) {
    let node = new Node(position);
    node.element = element;
  }
  // 获取元素索引
  indexOf(element) {
    let current = this.head,
      index = -1;
    for (let i = 0; i < this.length; i++) {
      if (current.element === element) {
        index = i;
        break;
      }
      current = current.next;
    }
    return index;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.removeAt(3);
linkedList.remove(1);
console.log(linkedList);

console.log(linkedList.toString());
