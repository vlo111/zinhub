import { BackgroundImage } from './background-image';
import { ProfileImage } from './profile-image';
import { useFormContext } from 'react-hook-form';

export default () => {
  const { watch } = useFormContext();
  return (
    <div className="w-full relative mb-32">
      <BackgroundImage defaultImage={watch('backgroundPhoto')} />
      <ProfileImage defaultImage={watch('photo')} />
    </div>
  );
};
