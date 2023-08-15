import Button from '@/components/button';
import { default as SuccessIcon } from '@/components/icons/success.svg';

interface ISuccessModalContent {
  onGoBack: () => void;
}

const SuccessModalFinish: React.FC<ISuccessModalContent> = ({ onGoBack }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <SuccessIcon />
      </div>
      <div className="mb-14 mt-4 w-[50%] text-center text-lg">Ձեր հայտարարությունը հաջողությամբ Ավարտվել է</div>
      <div className="flex flex-row gap-4">
        <Button value={'Վերադառնալ իմ էջ'} type="secondary" submit={false} onClick={onGoBack} />
      </div>
    </div>
  );
};

export default SuccessModalFinish;
