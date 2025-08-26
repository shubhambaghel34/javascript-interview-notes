# 📚 JavaScript — Promise Combinators

## 1) Promise.all()
Runs multiple promises in **parallel**.  
- Resolves only if **all promises resolve**.  
- Rejects immediately if **any promise rejects**.  

✅ Use case: Fetch multiple APIs before rendering data.

```javascript
Promise.all([Promise1, Promise2, Promise3])
  .then(values => console.log("All resolved:", values))
  .catch(err => console.error("One failed:", err));
```

---

## 2) Promise.allSettled()
Waits for all promises to **settle** (resolve or reject).  
- Never short-circuits.  
- Always returns an array of `{ status, value/reason }`.  

✅ Use case: Show results for all API calls, even if some fail.

```javascript
Promise.allSettled([Promise1, Promise2, Promise3])
  .then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") {
        console.log("✅", r.value);
      } else {
        console.log("❌", r.reason);
      }
    });
  });
```

---

## 3) Promise.any()
Resolves as soon as the **first promise fulfills**.  
- Ignores rejected promises unless **all fail**.  
- If all fail → rejects with `AggregateError`.  

✅ Use case: Get first successful response from multiple servers.

```javascript
Promise.any([Promise1, Promise2, Promise3])
  .then(value => console.log("First success:", value))
  .catch(err => console.error("All failed:", err));
```

---

## 4) Promise.race()
Settles (resolve or reject) as soon as the **first promise settles**.  
- Result can be success or error depending on the first one.  

✅ Use case: Implement request timeouts (whichever finishes first wins).

```javascript
Promise.race([Promise1, Promise2, Promise3])
  .then(value => console.log("First settled:", value))
  .catch(err => console.error("First settled was error:", err));
```
