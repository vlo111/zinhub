import GradientLine from '@/app/posts/components/gradientLines';
import InfoItem from '../../../../components/items';
import { IAboutCompany } from '../../../types';
import dayjs from 'dayjs';

const AboutCompany:React.FC<IAboutCompany> = ({ formData }) => {
  return (
    <div className="flex-col w-full grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-4 col-span-2 ">
        <div className="flex flex-row gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="w-52 h-52 rounded-md"
          />
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Հաշվապահ</p>
            <p className="text-xs font-normal first-letter text-primary-blue">ACBA բանկ</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md">
        <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
        <div className="flex flex-col gap-2">
          <InfoItem label={'Գտնվելու վայրը (Մարզ)'} value={formData?.regionId?.label ?? ''} />
          <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
          <InfoItem label={'Աշխատավարձ'} value={formData?.salary ?? ''} />
          <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
          <GradientLine />
          <InfoItem label={'Դիմելու վերջնաժամկետ'} value={dayjs(formData?.applicationDeadline).format('MM.DD.YYYY') ?? ''} />
          <InfoItem label={'Աշխ․ պայման'} value={'Մշտական'} />
          <InfoItem label={'Զբաղվածություն'} value={formData?.duration ?? ''} />
          <InfoItem label={'Մակարդակ'} value={formData?.levelId?.label ?? ''} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
