import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { GET_COMPANIES } from '@/api/company/use-get-all-company';

const url = 'api/company/:id/reject';

type Param = {
  id: string;
  text: string;
};

export const useRejectCompany = (offset: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Param, unknown, Param>({
    mutationKey: [url],
    mutationFn: ({ id, text }: Param) =>
      client.patch(url.replace(':id', id), {
        rejectionText: text,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMPANIES + offset]);
    },
  });
  return mutation;
};
