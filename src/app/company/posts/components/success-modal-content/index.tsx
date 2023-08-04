import Button from '@/components/button';
import { default as SuccessIcon } from '@/components/icons/success.svg';

interface ISuccessModalContent {
    onGoBack: () => void;
    onAddNewPost: () => void;
}

const SuccessModalContent: React.FC<ISuccessModalContent> = ({ onGoBack, onAddNewPost }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <SuccessIcon />
      </div>
      <div className="mb-14 mt-4 w-[50%] text-center text-lg">
        Շնորհավորում ենք Ձեր հայտարարություն հրապարակվել է <span className="text-primary-blue">ZINHUB.am </span>{' '}
        հարթակում
      </div>
      <div className="flex flex-row gap-4">
        <Button value={'Վերադառնալ գլխավոր էջ'} type="secondary" submit={false} onClick={onGoBack} />
        <Button value={'Տեղադրել այլ հայտարարություն'} submit={false} onClick={onAddNewPost} />
      </div>
    </div>
  );
};

export default SuccessModalContent;
