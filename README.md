# JavaScript Interview Prep

This repository is a **complete JavaScript interview preparation kit**. It includes:  
- Core JavaScript concepts with **definitions, code snippets, and tricky output-based questions**  
- **Real-world examples** to connect theory with practice  
- **Coding patterns** (Two Pointers, Sliding Window, DP, Backtracking, etc.)  
- **Data structures & algorithms in JavaScript**  
- **Common design patterns** with e-commerce-inspired examples  
- **SOLID principles** with explanations and code  
- **Coding standards and best practices**  

---

## 📂 Contents


### 🔹 Core JavaScript Concepts
- [Closures](./javascript_core/closures.md)  
  - Basic closures, loop behavior (`var` vs `let`)  
  - Closures with `setTimeout`  
  - Private data with closures  

- [Hoisting](./javascript_core/hoisting.md)  
  - Variable vs function hoisting  
  - Function expressions vs declarations  
  - Block scope & shadowing  

- [Object References & Copying](./javascript_core/object_references.md)  
  - Shallow vs deep copy  
  - Spread, `Object.assign`, `structuredClone`  
  - `Object.freeze()` vs `Object.seal()`  

- [JS Polyfills](./javascript_core/js_polyfills.md)  
  - Custom implementations for `map`, `filter`, `reduce`, `call`, `apply`, `bind`  

- [Inheritance](./javascript_core/inheritance.md)  
  - Prototypal inheritance (`Object.create`)  
  - Constructor vs ES6 `class`/`extends`  
  - Method overriding, `super`  
  - Example: `Product` → `DiscountedProduct`  

- [this Keyword](./javascript_core/this_keyword.md)  
  - Global vs strict mode  
  - Object methods, arrow functions  
  - Constructor functions & classes  
  - call, apply, bind  

- [Spread & Rest Operators](./javascript_core/spread_rest.md)  
  - Spread in arrays/objects  
  - Rest in functions & destructuring  
  - Mixing spread & rest  

- [Promises & Async](./javascript_core/promises.md)  
  - `Promise.all`, `allSettled`, `any`, `race`  
  - Async/await examples  
  - Custom promise utilities  

- [Memoization](./javascript_core/memoization.md)  
  - Memoize expensive functions  
  - Example with addition + Fibonacci optimization  

- [Event Loop & Concurrency](./javascript_core/event_loop.md)  
  - Microtasks vs macrotasks (`Promise`, `setTimeout`)  
  - Output-based tricky questions  
---

### 🔹 Data Structures in JavaScript
- **Set** → unique values, deduplication tricks  
- **WeakSet** → object-only, garbage-collectable  
- **Map** → flexible key-value storage (objects/functions as keys)  
- **WeakMap** → private data storage for objects  

---

### 🔹 Coding Patterns

📂 Organized by difficulty:  

#### **Basic**
- Two Pointers → pair with sum, palindrome checks  
- Sliding Window → max sum subarray, longest substring  
- Prefix Sum → fast range queries  

#### **Moderate**
- Fast & Slow Pointers → cycle detection in linked list  
- Binary Search → classic & variations (rotated arrays, first/last index)  
- Divide & Conquer → merge sort, quick sort  

#### **Advanced**
- Kadane’s Algorithm → max subarray sum  
- Dynamic Programming → Fibonacci, climbing stairs  
- Greedy Algorithms → interval scheduling, coin change  
- Backtracking → permutations, N-Queens  

---

### 🔹 Design Patterns
- **Creational**: Singleton, Factory, Builder  
- **Structural**: Decorator, Proxy (coming soon), Facade (coming soon)  
- **Behavioral**: Observer, Strategy, Chain of Responsibility (coming soon)  
- Real-world **e-commerce/payment system examples** for each  

---

### 🔹 SOLID Principles
- **S** → Single Responsibility  
- **O** → Open/Closed  
- **L** → Liskov Substitution  
- **I** → Interface Segregation  
- **D** → Dependency Inversion  
- Each with **problem statement + example + solution**  

---

### 🔹 Coding Standards
- Consistent naming conventions  
- ES6+ best practices  
- Avoiding anti-patterns  
- Writing clean, maintainable code  
- Documentation style with comments  

---

## 🚀 How to Use
1. Open the `.md` file for each concept.  
2. Run code snippets in Node.js or browser console.  
3. Observe outputs + read theory in comments.  
4. For LeetCode problems:  
   - Try solving first  
   - Compare with provided solution  
5. Use **coding patterns** as templates in interviews.  
6. Review **design patterns & SOLID** for system design questions.

---

## 💡 Interview Tips
- Don’t memorize outputs → **understand why**.  
- Be able to **explain in one line** (e.g., “Sliding window reduces O(n*k) → O(n)”).  
- Always relate to **real-world examples** (cart, payments, caching).  
- Be prepared to compare **different solutions (brute force vs optimized)**.  
