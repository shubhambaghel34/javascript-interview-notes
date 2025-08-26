# 📚 JavaScript — Event Loop & Concurrency

## 🔹 Description
The **event loop** is how JavaScript handles asynchronous operations.  
JavaScript is **single-threaded**, but it uses an event loop with:
- **Call Stack** → executes synchronous code line by line  
- **Web APIs / Node APIs** → handles async tasks (`setTimeout`, network requests, etc.)  
- **Callback Queue (Macrotasks)** → stores `setTimeout`, `setInterval`, etc.  
- **Microtask Queue** → stores `Promise` callbacks, `process.nextTick`  

The event loop checks:
1. If the call stack is empty  
2. Executes **all microtasks** first  
3. Then executes one macrotask  
4. Repeats  

---

## 🔹 Microtasks vs Macrotasks
- **Microtasks**: Promises, `queueMicrotask()`, `process.nextTick` (Node.js)  
- **Macrotasks**: `setTimeout`, `setInterval`, `setImmediate` (Node.js), I/O  

Order of execution:
1. Run all synchronous code  
2. Run all queued **microtasks**  
3. Run one **macrotask** from the queue  
4. Repeat  

---

## 🔹 Examples

### 1) Basic Event Loop
```javascript
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
```
**Output:**
```
start
end
promise
timeout
```

---

### 2) Multiple Promises
```javascript
Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));

setTimeout(() => console.log("T1"), 0);

console.log("Sync");
```
**Output:**
```
Sync
P1
P2
T1
```

---

### 3) Nested Promises
```javascript
setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  Promise.resolve().then(() => console.log("P2"));
});

console.log("Sync");
```
**Output:**
```
Sync
P1
P2
T1
```

---

### 4) Node.js Special Case (`process.nextTick`)
```javascript
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

console.log("end");
```
**Output (Node.js):**
```
end
nextTick
promise
timeout
```

---

## 🔹 Interview Tricks
1. **Promise callbacks always run before `setTimeout`** (even with 0 ms).  
2. **`process.nextTick` runs before Promises** in Node.js.  
3. **Nested Promises** queue more microtasks before macrotasks run.  
4. Event loop ensures **non-blocking async behavior** in JavaScript.  

---

## 🔹 Tricky Questions

### Q1: What’s the output?
```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```
**Answer:**
```
A
D
C
B
```

---

### Q2: What’s the output?
```javascript
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Timeout 3"), 0);
});
```
**Answer:**
```
Promise 1
Promise 2
Timeout 1
Timeout 2
Timeout 3
```

---

### Q3: What’s the output in Node.js?
```javascript
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));
```
**Answer (Node.js):**
```
nextTick
promise
timeout
```

---

## ✅ Summary
- JavaScript is **single-threaded** but asynchronous via the **event loop**.  
- Order: **Sync → Microtasks → Macrotasks**.  
- Promises > setTimeout.  
- In Node.js: `process.nextTick` > Promises > setTimeout.  
