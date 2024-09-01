import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My universe!
      </h1>
      <p className="mb-4">
        {`Lets keep it simple: I'm a human, this is my universe`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
