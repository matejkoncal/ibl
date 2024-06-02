import { MessageTypeState } from "../messageTypeSelector/messageTypeSelector";
import { TableSource } from "../resultTable/resultTable";

export type WeatherReport = {
  queryType: string;
  reportTime: string;
  stationId: string;
  text: string;
};

export async function query(airports: string, countries: string, messageTypes: MessageTypeState): Promise<TableSource> {
  const response = await fetch("https://ogcie.iblsoft.com/ria/opmetquery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "123",
      method: "query",
      params: [
        {
          id: "briefing01",
          reportTypes: [messageTypes.metar ? "METAR" : "", messageTypes.sigmet ? "SIGMET" : "", messageTypes.taf ? "TAF" : ""].filter(Boolean),
          stations: airports.split(" ").filter(Boolean),
          countries: countries.split(" ").filter(Boolean),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const parsedResponse = await response.json();

  if (parsedResponse.error) {
    throw new Error(parsedResponse.error.message);
  }

  return Object.groupBy(parsedResponse.result as WeatherReport[], ({ stationId }) => stationId) as TableSource;
}
