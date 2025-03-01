const months = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
  };
  
  // Function to calculate similarity between two words
  function getLevenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
    );
  
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
  
    return matrix[a.length][b.length];
  }
  
  // Function to find the closest match for a given input
  function findClosestMatch(input, dictionary) {
    let closestMatch = "";
    let smallestDistance = Infinity;
  
    for (const word of dictionary) {
      const distance = getLevenshteinDistance(input.toLowerCase(), word);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestMatch = word;
      }
    }
  
    return smallestDistance <= 2 ? closestMatch : null; // Acceptable typo range
  }
  
  export function parseDate(input, includeYear = false) {
    const parts = input.toLowerCase().split(" ");
    if (parts.length < 2) {
      throw new Error("Invalid date format. Use 'Jan six' or 'Jan 6'.");
    }
  
    let monthInput = parts[0].substring(0, 3);
    let dayInput = parts[1];
  
    // Correct typos in the month name
    monthInput = findClosestMatch(monthInput, Object.keys(months)) || monthInput;
    const month = months[monthInput];
    if (!month) {
      throw new Error(`Invalid month provided: ${parts[0]}`);
    }
  
    // Convert text numbers to numeric values
    const numberWords = {
      one: "1", two: "2", three: "3", four: "4", five: "5", six: "6",
      seven: "7", eight: "8", nine: "9", ten: "10", eleven: "11",
      twelve: "12", thirteen: "13", fourteen: "14", fifteen: "15",
      sixteen: "16", seventeen: "17", eighteen: "18", nineteen: "19",
      twenty: "20", twentyone: "21", twentytwo: "22", twentythree: "23",
      twentyfour: "24", twentyfive: "25", twentysix: "26", twentyseven: "27",
      twentyeight: "28", twentynine: "29", thirty: "30", thirtyone: "31"
    };
  
    dayInput = findClosestMatch(dayInput, Object.keys(numberWords)) || dayInput;
    let day = numberWords[dayInput] || dayInput.replace(/\D/g, "");
  
    if (!day || isNaN(day) || day < 1 || day > 31) {
      throw new Error(`Invalid day provided: ${parts[1]}`);
    }
  
    day = day.padStart(2, "0"); // Ensure two-digit format
    const currentYear = new Date().getFullYear();
  
    return includeYear ? `${day}-${month}-${currentYear}` : `${day}-${month}`;
  }
  