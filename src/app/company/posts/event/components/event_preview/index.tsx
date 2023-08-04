'use client';
import GradientLine from '../../../components/gradientLines';
import InfoItem from '../../../components/items';
import TextContent from '../../../components/text-content';
import { ICompany, IFormData } from '../../types';

const EventPreview: React.FC<{ formData: IFormData; company?: ICompany }> = ({ formData, company }) => {

  return (
    <div className="w-full">
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">{formData?.courseName !== undefined ? formData?.courseName : formData?.title}</p>
              <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md min-w-[400px]">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem label={'Գտնվելու վայրը  (Մարզ)'} value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''} />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem
              label={'Դիմելու վերջնաժամկետ'}
              value={new Date(formData?.applicationDeadline ?? '').toLocaleDateString() ?? ''}
            />
            <InfoItem label={'Անցկացման օր'} value={new Date(formData?.startDate ?? '').toLocaleDateString() ?? ''} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-[60%] gap-14">
        <TextContent title="Ծրագիր" description={formData?.program} />
        <TextContent title="Ի՞նչ ենք մենք առաջարկում (Ընկերության մասին)" description={formData?.whatWeOffer} />
      </div>
    </div>
  );
};

export default EventPreview;
