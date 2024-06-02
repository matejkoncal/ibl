declare module "airport-data-js" {
  export function getAirportByIcao(icaoCode: string): Promise<Airport[]>;

  interface Airport {
    airport: string;
  }
}
