import { IJobPreview } from '../../types';
import AboutCompany from './about_company';
import JobContent from './job_content';

const JobPreview: React.FC<IJobPreview> = ({ formData, company }) => {
  return (
    <>
      <AboutCompany formData={formData} company={company}/>
      <JobContent formData={formData}/>
    </>
  );
};

export default JobPreview;
