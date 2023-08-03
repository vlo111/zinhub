import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';
import { GET_COMPANIES } from '@/api/company/use-get-all-company';

const url = 'api/company/:id/accept';

type Param = {
  id: string;
};

export const useApproveCompany = (offset: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Param, unknown, Param>({
    mutationKey: [url],
    mutationFn: ({ id }: Param) => client.patch(url.replace(':id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMPANIES + offset]);
    },
  });
  return mutation;
};
