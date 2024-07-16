// 8. Implement a simple HashMap class with put, get, and remove methods.

// Solve-1
//  JavaScript's built-in Map class doesn't have put or remove methods; it uses set and delete instead

const hashMap = new Map();
hashMap.set("name", "kuntal");
console.log(hashMap.get("name"));
console.log(hashMap.delete("name"));

// Solve-2
// However, if the task is to implement a custom HashMap class, we can still use the names put and remove for our methods.

class HashMap2 {
  constructor(size = 100) {
    this.size = size;
    this.buckets = Array(size)
      .fill(null)
      .map(() => []);
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  put(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.find(([k, v]) => k === key);

    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find(([k, v]) => k === key);

    return found ? found[1] : undefined;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex(([k, v]) => k === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
    }
  }
}

const hashMap2 = new HashMap2();
hashMap2.put("name", "kuntal");
hashMap2.put("age", "20");
console.log(hashMap2.get("name"));
console.log(hashMap2.remove("name"));
