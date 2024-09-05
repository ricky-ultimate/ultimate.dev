import { BlogPosts } from 'app/components/posts';
import { AiOutlineMail } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My universe!
      </h1>
      <p className="mb-4">
        {`Hi there! I’m Ricky, a 3rd-year Computer Science student and a
        passionate developer with a love for creating innovative web and
        desktop applications. Whether you’re here to check out my projects, learn
        more about my journey, or just share a love for tech, you’re in the right
        place.`}
      </p>
      <p>Dive in, explore my work, and let’s connect!</p>

      <div className="my-8">
        <BlogPosts />
      </div>

      {/* Contact Section */}
      <section className="mt-12 p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Want to contact me?</h2>
        <p className="text-lg mb-4 flex items-center">
          <AiOutlineMail className="mr-2" />
          Just email me at{' '}
          <span className="text-blue-400 dark:text-blue-300 font-medium ml-1">rickyultimate.dev@gmail.com</span>
        </p>
        <p className="text-lg flex items-center">
          <FaDiscord className="mr-2" />
          Or reach out on Discord at{' '}
          <span className="text-blue-400 dark:text-blue-300 font-medium ml-1">@rickyultimate</span>
        </p>
      </section>
    </section>
  );
}
