import './index.css';
import InfoItem from './item';
import { IDetails } from '../../../types';
import GradientLine from '@/app/company/posts/components/gradientLines';

const Details: React.FC<IDetails> = ({ formData, company }) => {
  return (
    <>
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-6 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">
                {formData?.courseName !== undefined ? formData?.courseName : formData?.title}
              </p>
              <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-davy-gray">
            {formData?.courseDescription !== undefined ? formData?.courseDescription : formData?.description}
          </p>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue rounded-md gap-4">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem
              label={'Ձևաչափը'}
              value={formData?.formatId !== undefined ? formData?.formatId?.label : formData?.format?.title ?? ''}
            />
            <InfoItem
              label={'Գտնվելու մարզը'}
              value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''}
            />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem
              label={'Դասընթացի մեկնարկը'}
              value={new Date(formData?.startDate ?? '').toLocaleDateString() ?? ''}
            />
            <InfoItem
              label={'Տևողությունը'}
              value={formData?.courseDuration !== undefined ? formData?.courseDuration : formData?.duration ?? ''}
            />
            <InfoItem label={'Դասաժամեր'} value={formData?.classHours ?? ''} />
            <InfoItem
              label={'Դասընթացի Մակարդակ'}
              value={formData?.levelId !== undefined ? formData?.levelId?.label : formData?.level?.title ?? ''}
            />
            <InfoItem
              label={'Դասընթացի Լեզու'}
              value={formData?.languageId !== undefined ? formData?.languageId?.label : formData?.language?.title ?? ''}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
