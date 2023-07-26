'use client';
import GradientLine from '@/app/posts/components/gradientLines';
import InfoItem from '@/app/posts/components/items';
import TextContent from '@/app/posts/components/text_content';
import { IFormData } from '../../types';
import dayjs from 'dayjs';

const EventPreview: React.FC<{ formData: IFormData }> = ({ formData }) => {
  return (
    <div className="w-full">
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="w-52 h-52 rounded-md"
            />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">{formData?.title}</p>
              <p className="text-xs font-normal first-letter text-primary-blue">
                Հոգեսոցիալական կարգավորման կենտրոն Psychosocial Recovery Center
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem label={'Գտնվելու վայրը  (Մարզ)'} value={formData?.regionId?.label ?? ''} />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem label={'Դիմելու վերջնաժամկետ'} value={dayjs(formData?.applicationDeadline).format('MM.DD.YYYY') ?? ''} />
            <InfoItem label={'Անցկացման օր'} value={dayjs(formData?.applicationDeadline).format('MM.DD.YYYY') ?? ''} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-[60%] gap-14">
        <TextContent
          title="Ծրագիր"
          description={formData?.program}
        />
        <TextContent
          title="Ի՞նչ ենք մենք առաջարկում (Ընկերության մասին)"
          description={formData?.whatWeOffer}
        />
      </div>
    </div>
  );
};

export default EventPreview;
