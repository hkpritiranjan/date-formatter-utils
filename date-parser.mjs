const months = { jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
                 jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12" };

export function parseDate(input, includeYear = false) {
    const parts = input.toLowerCase().split(" ");
    if (parts.length < 2) throw new Error("Invalid date format. Use 'Jan six' or 'Jan 6'.");

    const month = months[parts[0].substring(0, 3)];
    if (!month) throw new Error("Invalid month provided.");

    let day = parts[1].replace(/\D/g, "").padStart(2, "0");
    const year = new Date().getFullYear();

    return includeYear ? `${day}-${month}-${year}` : `${day}-${month}`;
}
