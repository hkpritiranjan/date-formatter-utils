# date-formatter-utils 

A **powerful & intelligent** date formatter that converts **human-friendly date inputs** into **formatted dates** (`dd-mm` or `dd-mm-yyyy`). It supports **CommonJS** (`require`) and **ES Modules** (`import`). Now with **smart typo correction & natural language parsing**!

![npm](https://img.shields.io/npm/v/date-formatter-utils)
![license](https://img.shields.io/npm/l/date-formatter-utils)
![downloads](https://img.shields.io/npm/dt/date-formatter-utils)

---

## 📌 **Installation**
Install via **npm**:
```sh
npm install date-formatter-utils
```
Or Yarn:
```sh
yarn add date-formatter-utils
```

## 🚀 **Usage**

### 1️⃣ Using CommonJS (`require()`)
```js
const parseDate = require("date-formatter-utils");

console.log(parseDate("Jan six"));  // "06-01"
console.log(parseDate("Feb 14", true));  // "14-02-2025"
```

### 2️⃣ Using ES Modules (`import`)
```js
import parseDate from "date-formatter-utils";

console.log(parseDate("March 3", true)); // "03-03-2025"
console.log(parseDate("Jul 7"));  // "07-07"
```

---

## 📌 **Features**

✅ Human-friendly input (e.g., "Jan six" → "06-01")  
✅ Supports numbers & words (e.g., "twenty" → "20")  
✅ Intelligent typo correction (e.g., "Janary" → "Jan")  
✅ Handles numeric & ordinal dates (e.g., "2nd" → "02")  
✅ Works with CommonJS (`require`) & ES Modules (`import`)  
✅ Supports current year inclusion (e.g., "06-01-2025")  
✅ Levenshtein distance-based typo correction  
✅ Supports mixed numerical and textual inputs (e.g., "twentytwo" → "22")  
✅ Handles edge cases and invalid inputs gracefully  

---

## 🔹 **Function Details**
```ts
parseDate(input: string, includeYear?: boolean): string
```
| Parameter  | Type    | Description |
|------------|--------|-------------|
| `input`    | string | The date string (e.g., "Jan six" or "Jan 6") |
| `includeYear` | boolean | If `true`, includes the current year (e.g., "06-01-2025"). Default: `false` |

---

## 📌 **Examples & Edge Cases**

### ✔️ Standard Inputs
```js
parseDate("Feb twenty");       // "20-02"
parseDate("March 3", true);    // "03-03-2025"
parseDate("Jul 7");            // "07-07"
```

### ✔️ Handling Typos
```js
parseDate("Januay six");       // "06-01"
parseDate("Feburary 2");       // "02-02"
parseDate("Marrch 7");         // "07-03"
```

### ✔️ Handling Ordinal Numbers
```js
parseDate("Apr 2nd");           // "02-04"
parseDate("July thirtyone");    // "31-07"
parseDate("June twentyfirst");  // "21-06"
```

### ✔️ Handling Misspelled Numbers
```js
parseDate("Feb thirteenn"); // "13-02"
parseDate("Septmber 10");   // "10-09"
```

---

## 📌 **Common Errors & Edge Cases**
| Error | Cause |
|--------|-------|
| "Invalid date format" | Input doesn't match expected format (e.g., "Jan six" or "Jan 6") |
| "Invalid month provided" | Month isn't recognized (e.g., "xyz six") |
| "Invalid day provided" | Day isn't valid (e.g., "Jan thirtytwo") |

---

## 🚀 **Upcoming Features & Improvements**

🔹 **Time Support:** Allow parsing of human-friendly time inputs (e.g., "Jan six at 5pm")  
🔹 **Custom Date Formats:** Users can define their own output formats (e.g., "MM/DD/YYYY")  
🔹 **Localization Support:** Expand to support multiple languages  
🔹 **Improved Error Handling:** More descriptive messages for invalid inputs  
🔹 **Date Range Support:** Ability to parse date ranges like "Feb 1 to Feb 5"  
🔹 **Better Performance:** Optimize the Levenshtein algorithm for faster execution  

---

## 📌 **License**
This package is open-source under the **MIT License**.

Developed by **Pritiranjan Swain**.

