import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My universe!
      </h1>
      <p className="mb-4">
        {`Hi there! I’m Ricky, a 3rd-year Computer Science student and a passionate developer with a love for creating innovative web and desktop applications. Whether you’re here to check out my projects, learn more about my journey, or just share a love for tech, cryptography, psychology, and manga, you’re in the right place.`}
      </p>
      <p>
        {`Dive in, explore my work, and let’s connect!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
