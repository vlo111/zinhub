import GradientLine from '@/app/posts/components/gradientLines';
import './index.css';
import InfoItem from './item';
import { IDetails } from '../../../types';

const Details: React.FC<IDetails> = ({ formData }) => {
  return (
    <>
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-6 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="w-52 h-52 rounded-md"
            />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">{formData?.title}</p>
              <p className="text-xs font-normal first-letter text-primary-blue">Բիզնես Դեվելոփմենթ Գրուպ</p>
            </div>
          </div>
          <p className="text-sm font-medium text-davy-gray">{formData?.description}</p>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue rounded-md gap-4">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem label={'Ձևաչափը'} value={formData?.formatId?.label ?? ''} />
            <InfoItem label={'Գտնվելու մարզը'} value={formData?.regionId?.label ?? ''} />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem label={'Դասընթացի մեկնարկը'} value={formData?.startDate ?? ''} />
            <InfoItem label={'Տևողությունը'} value={formData?.courseDuration ?? ''} />
            <InfoItem label={'Դասաժամեր'} value={formData?.classHours ?? ''} />
            <InfoItem label={'Դասընթացի Մակարդակ'} value={formData?.levelId?.label ?? ''} />
            <InfoItem label={'Դասընթացի Լեզու'} value={formData?.languageId?.label ?? ''} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
