export const  formatRupiah = (value) => {
  const result = value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
  return result
}

export const formatDateApp=(date)=>{
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const monthName = months[Number(month) - 1];

  return `${day} ${monthName} ${year}`;
}
