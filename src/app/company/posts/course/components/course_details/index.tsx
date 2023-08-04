import { ICourseDetails } from '../../types';
import Details from './details';
import Program from './program';
import Skills from './skills';

const CourseDetails:React.FC<ICourseDetails> = ({ formData, company }) => {

  return (
    <div className="flex flex-col gap-14 w-full p-4">
      <Details formData={formData} company={company}/>
      <Program formData={formData}/>
      <Skills formData={formData}/>
    </div>
  );
};

export default CourseDetails;
