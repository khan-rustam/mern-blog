import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className=' flex-1 justify-center flex  flex-col gap-2'>
        <h2 className='text-2xl'>Want to master MERN stack?</h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources # 10 MERN Stack Projects to Master Your MERN
          Jedi Mind Tricks ✨
        </p>
        <Button
          gradientDuoTone={'purpleToPink'}
          className='rounded-tl-xl rounded-bl-none'
        >
          <a
            href='https://github.com/khan-rustam?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get Started
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img
          src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221114110410/Top-10-JavaScript-Project-Ideas-For-Beginners-2023.png'
          alt='Call to action img'
        />
      </div>
    </div>
  );
}
