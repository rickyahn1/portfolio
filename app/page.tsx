import { ResearchPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`Hi, I am Ricky. I am a Software Engineer working in the Bay Area. I graduated from UC Berkeley
        with a degree in Computer Science in 2023, and I have been working in the industry since.
        I will be populating this page with research and projects that I work on in my
        spare time.`}
      </p>
      <div className="my-8">
        <ResearchPosts />
      </div>
    </section>
  )
}
