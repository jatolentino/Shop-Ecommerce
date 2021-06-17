const theDate = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export const theMonth = monthNames[theDate.getMonth()];
export const theDay = theDate.getDate() - 1 ;
export const theYear = theDate.getFullYear();