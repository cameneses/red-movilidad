const puppeteer = require('puppeteer');

async function getBusStopInfo(code) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(
    `https://www.red.cl/planifica-tu-viaje/cuando-llega/?codsimt=${code}`,
    { waitUntil: 'networkidle2' }
  );

  await page.waitForSelector('table.tabla-liquida.tabla-paradero');

  const results = await page.$$eval(
    'table.tabla-liquida.tabla-paradero tr',
    (rows) => {
      return rows
        .map((row) => {
          const columns = Array.from(row.querySelectorAll('td')).map(
            (column) => column.innerText
          );
          const [bus, direction, status, arrival] = columns;

          const index = arrival?.indexOf(' ');
          const distance = arrival?.slice(0, index).trim();
          const time = arrival?.slice(index + 1, arrival.length).trim();

          return {
            bus,
            direction,
            status,
            distance,
            time,
          };
        })
        .filter((row) => Object.keys(row).length !== 0);
    }
  );

  console.log(results);

  await browser.close();

  return results;
}

module.exports = { getBusStopInfo };
