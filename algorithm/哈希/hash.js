/**
 *
 * hash，一般翻译散列，是把任意长度的输入通过散列算法变换称固定长度的输出，
 * 该输出的值就是散列值。这种转换是一种压缩映射，。映射表达是一一对应的关系，
 * 即散列值的空间通常会小于输入空间
 *
 * 哈希算法不可逆
 *
 * 例 md5 转换
 */
/**
 *
 *
 * hash表 也叫散列表，是根据关键码值（key value）而直接访问的数据结构
 *
 * 它通过关键码值映射到表中一个位置来访问记录，以加快查找的速度
 *
 * 这个祈祷映射作用的叫做散列函数（Hash Function），村饭记录的数组叫做哈希表
 */
/**
 * 重点： 又一个哈希函数，通过哈希函数就会把要存醋的值能够映射到一个位置，这个位置就是她的下表或者
 *       是索引。传一个字符串进来，就会把它映射成数字
 */
/**
 *
 * 最简单的哈希函数： 把一个字符它的ascii码加在一起，然后再去模一个数字，最后模出来的是多少就是多少（取余数）
 */

class HashTable {
  constructor() {
    this.table = []; //hash表
  }
  //hash函数
  loselHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt(); //计算key unicode码
    }
    // 取模
    return hash % 37;
  }
  // 新增元素
  put(key, value) {
    const position = this.loselHashCode(key);
    this.table[position] = value;
  }
  // 移除元素
  remove(key) {
    this.table[this.loselHashCode(key)] = undefined;
  }
  // 获取元素
  get(key) {
    return this.table[this.loselHashCode(key)];
  }
}

const hashTable = new HashTable();

hashTable.put("111", "aaa.com");
hashTable.put("222", "bbb.com");

console.log(hashTable.get("111"));

//需了解的点 碰撞  索引相同 后边的会覆盖前面的

// 解决冲突的方法
/**
 * 1.链地址法：
 * 2.开放地址法： 寻找空白位置来放置冲突数据项（线性探测法）、二次探测法、再哈希法
 */
