import { useCallback, useState } from "react";
import { query } from "./opmet";
import { MessageTypeState } from "../messageTypeSelector/messageTypeSelector";
import { TableSource } from "../resultTable/resultTable";

export const useOpmet = () => {
  const [loading, setLoading] = useState(false);
  const [tableContent, setTableContent] = useState<TableSource>({});
  const [error, setError] = useState<Error | undefined>();

  const loadOpmet = useCallback((airports: string, countries: string, messageTypes: MessageTypeState) => {
    setLoading(true);
    setError(undefined);
    query(airports, countries, messageTypes)
      .then(result => setTableContent(result))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return [loadOpmet, tableContent, loading, error] as const;
};
