import { useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/static/all/info';

const GetSelectData: any = (statementType: string, options = { enabled: true }) => {
  const result = useQuery([url, statementType], async () => await client.post(url, { statementType }), {
    select: (data) => data,
    ...options,
  });
  const { data, isSuccess, isLoading } = result;
  return {
    ...result,
    isLoading,
    data: isSuccess ? data : [],
  };
};
export default GetSelectData;