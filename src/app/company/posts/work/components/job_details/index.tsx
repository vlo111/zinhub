import { IJobPreview } from '../../types';
import AboutCompany from './about_company';
import JobContent from './job_content';

const JobPreview: React.FC<IJobPreview> = ({ formData }) => {
  return (
    <>
      <AboutCompany formData={formData}/>
      <JobContent formData={formData}/>
    </>
  );
};

export default JobPreview;
