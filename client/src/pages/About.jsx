/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Vista's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <h2 className='text-xl font font-semibold text-center text-gray-300'>
              Vista's Blog: Your Gateway to the Web Development Universe
            </h2>
            <p>
              Welcome to Vista's Blog, your one-stop shop for diving deep into the exciting world of web development! Whether you're a seasoned coder or just starting your coding journey, we've got something for everyone. Our passionate team of tech enthusiasts is dedicated to crafting engaging and informative content that empowers you to build, create, and innovate on the web.
            </p>

            <h2 className='text-xl font font-semibold text-center text-gray-300'>
              Explore the MERN Stack and Beyond
            </h2>
            <p>
              At Vista's Blog, we leverage the power of the MERN stack – a potent combination of MongoDB, Express.js, React, and Node.js – to bring you insightful articles, tutorials, and project breakdowns. But our horizons extend far beyond! We delve into a diverse range
              of web development technologies, from the fundamentals of HTML,  CSS, and JavaScript to cutting-edge frameworks like React, Next.js, and beyond.
            </p>

            <h2 className='text-xl font font-semibold text-center text-gray-300'>
              Unleash Your Inner Web Dev
            </h2>
            <p>
              Ready to transform your ideas into stunning web experiences?
              Vista's Blog is your launchpad. We equip you with the knowledge
              and skills you need to navigate the ever-evolving landscape of web
              development. So, join our vibrant community, explore our content,
              and embark on your web development adventure with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
