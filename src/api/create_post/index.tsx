
import { useMutation } from "@tanstack/react-query";
import client from "../client";

export const url = 'api/statements';

const createPosts: any = (options = {}) =>
  useMutation(
    async (params: any) => {
      if (params.id !== undefined) {
        return await client.post(`${url}`, params.data);
      }
    },
    options
  );
export default createPosts;

// const { mutate: createPostsFn } = createPosts({
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

// createPostsFn({
//     id: courseId,
//     data: {
//       ...applicationData
//     }
//   });