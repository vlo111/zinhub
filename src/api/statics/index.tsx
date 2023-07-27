
import { useMutation } from "@tanstack/react-query";
import client from "../client";

export const url = 'api/static/all/info';

const getSelectData: any = (options = {}) =>
  useMutation(
    async (params: any) => {
      if (params.id !== undefined) {
        return await client.post(`${url}`, params.data);
      }
    },
    options
  );
export default getSelectData;

// const { mutate: getSelectDataPosts } = getSelectData({
//     onSuccess: (options: IApplicationsOption) => {
//       const { data } = options;
//       setFormUrlModal(true);
//       setCreatedItemResponse(data);
//     },
//     onError: (e: {
//       response: {
//         data: { message: string }
//       }
//     }) => {
//       void message.error(e?.response?.data?.message);
//     }
//   });

// getSelectDataPosts({
//     id: courseId,
//     data: {
//       ...applicationData
//     }
//   });