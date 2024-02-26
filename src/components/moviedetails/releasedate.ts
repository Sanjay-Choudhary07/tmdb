// export function releaseDate(date:any){
//     if(date){
//     let str_date=date.toString();
//     let year=str_date.slice(0,4)
//     console.log(year)
//     return(year)
//     }
// }
export function releaseDate(date: any) {
    if (date) {
        // Parse the date string into a Date object
        let parsedDate = new Date(date);

        // Array of month names
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Extract year, month, and day from the parsed date
        let year = parsedDate.getFullYear();
        let monthIndex = parsedDate.getMonth();
        let day = parsedDate.getDate();

        // Format the date in MMM DD, YYYY format
        let formattedDate = monthNames[monthIndex] + ' ' + day + ', ' + year;

        return formattedDate;
    }
}