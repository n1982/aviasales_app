export default class GetTicketFromServer {
  getSearchId = async () => {
    try {
      const res = await fetch('https://front-test.beta.aviasales.ru/search');
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return await res.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Возникла проблема с fetch запросом: ', err.message);
      return err.message;
    }
  };

  getTickets = async (searchId) => {
    try {
      const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return await res.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Возникла проблема с fetch запросом: ', err.message);
      return err.message;
    }
  };
}
