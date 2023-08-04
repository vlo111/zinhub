'use client'
import useGetPostById from "@/api/get-post";
import JobPreview from "../components/job_details";

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data }: { data: any } = useGetPostById(id);

  return <div>
    <JobPreview formData={data?.workStatement} company={data?.company}/>
  </div>;
};
