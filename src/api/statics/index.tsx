import { useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/static/all/info';

// interface IResult {
//   company?: { id: string; name: string; photo: string };
//   courseFormat?: IOptions[];
//   courseLanguage?: IOptions[];
//   courseLevel?: IOptions[];
//   filedOfStudy?: IOptions[];
//   regions?: IOptions[];
//   teachers?: Array<{
//     id: string;
//     fullName: string;
//     profession: string;
//     photo?: string;
//     websites?: {
//       link: Array<{
//         url: string;
//       }>;
//     };
//   }>;
// }

// interface IData {
//   result: IResult;
// }

// type ReturnData = {
//   data: IData;
//   isLoading: boolean
// };

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