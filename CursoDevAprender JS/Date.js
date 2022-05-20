// Date
const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,02,06,9,30);

data3.setFullYear(2030) // <- Todos os anos em 2030.



console.log (data3.toDateString()) // <- Converter em formato string.

console.log (data2.toTimeString()) // <- Converter em zona temporal.

console.log (data2.toISOString()) // <- Formato para Banco de dados em servidor.