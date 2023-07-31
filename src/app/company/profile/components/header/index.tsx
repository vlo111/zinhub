import { BackgroundImage } from './background-image';
import { ProfileImage } from './profile-image';

export default () => {
  return (
    <div className="w-full relative mb-32">
      <BackgroundImage />
      <ProfileImage />
    </div>
  );
};
