"use client";

import { clsx } from 'clsx';

import CloseIcon from '/public/close.svg';
import Logo from "@/components/ui/Logo";
import Button from '@/components/ui/Button';
import NavMenu from '../NavMenu/NavMenu';

export const BurgerMenu = ({ handleMenuToggled, isOpened, handleClick, className }) => {
  return (
    <div
      className={clsx(
        `fixed left-0 top-0 z-50 flex h-full w-full flex-col overflow-hidden overflow-y-auto transition lg:hidden bg-darkBrown bg-opacity-95`,
        {
          'translate-x-full': !isOpened,
        },
      )}
    >
      <div className='container'>
        <div className='flex items-center justify-between py-6'>
          <Logo />
          <Button
            type='button'
            aria-label="close"
            onClick={handleMenuToggled}
            className='h-12 w-12 p-3'
          >
            <CloseIcon width={24} height={24} className='fill-primary' />
          </Button>
        </div>

        <div className='mb-[152px] mt-[96px] flex flex-col items-center gap-[73px] md:mb-[96px]'>
          <NavMenu onClick={handleClick} onMenuToggled={handleMenuToggled} /> 
        </div>
      </div>
    </div>
  );
};