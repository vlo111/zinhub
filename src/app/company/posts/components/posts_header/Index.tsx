import Button from '@/components/button';
import { default as EditedIcon } from '../../../../../components/icons/edite.svg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { PATHS, navigationItemsPosts } from '@/helpers/constants';

const PostsHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 gap-4 w-full mb-10">
      <div className="flex">
        <div className="flex gap-8 border-b-[0.5px] border-[#D2E6FF] items-center">
          {navigationItemsPosts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? 'text-primary-blue border-b-2 border-primary-blue pb-3'
                  : 'pb-3 text-davy-gray text-sm'
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center justify-end">
        <Button value={'Ավելացնել հայտարարություն'} onClick={() => router.push(PATHS.POST_CREATE)} />
        <button className="px-5 py-[10px] border border-primary-blue rounded-md">
          <EditedIcon />
        </button>
      </div>
    </div>
  );
};

export default PostsHeader;
