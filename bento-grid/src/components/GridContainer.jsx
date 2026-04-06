function GridContainer() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-10 gap-4 px-36 py-8">
      <div
        className="col-span-1 md:row-span-5 col-end-2
                        bg-[hsl(31,66%,93%)] rounded-md px-4 flex flex-col justify-center gap-4 shadow-md shadow-gray-500"
      >
        <h3 className="text-2xl font-semibold leading-5">
          Create and schedule content{" "}
          <span className="italic text-[hsl(256,67%,59%)]">quicker.</span>
        </h3>
        <img
          className="h-auto"
          src="/assets/images/illustration-create-post.webp"
          alt="create a post picture"
        />
      </div>

      <div
        className="md:row-span-4 md:col-span-2 md:col-end-4
                            px-8 bg-[hsl(256,67%,59%)] flex flex-col items-center justify-center text-center rounded-md shadow-md shadow-gray-500"
      >
        <h1 className="text-4xl text-[hsl(0,100%,100%)] font-semibold mb-4">
          Social Media <span className="text-[hsl(39,100%,71%)]">10x</span>{" "}
          faster With AI
        </h1>
        <img
          className="h-6"
          src="/assets/images/illustration-five-stars.webp"
          alt="five stars illustration"
        />
        <p className="text-[hsl(0,0%,87%)] mt-2">Over 4,000 5-star reviews</p>
      </div>

      <div
        className="md:row-span-7 col-span-1 md:col-end-5
                            bg-[hsl(254,88%,90%)] flex flex-col justify-center px-4 rounded-md shadow-md shadow-gray-500"
      >
        <h4 className="text-xl font-semibold leading-5">
          Schedule to social media
        </h4>
        <img
        className=""
          src="/assets/images/illustration-schedule-posts.webp"
          alt="bschedule posts illustration"
        />
        <p className="leading-5">
          Optimize post timings to publish content at the perfect time for your
          audience
        </p>
      </div>

      <div
        className="col-span-1 md:row-span-5 col-end-2
                        bg-[hsl(39,100%,71%)] px-4 rounded-md shadow-md shadow-gray-500"
      >
        <h3 className="text-2xl leading-5">Write your code using AI</h3>
        <img
          src="/assets/images/illustration-ai-content.webp"
          alt="AI content illustration"
        />
      </div>

      <div className="col-span-1 md:row-span-3 md:col-end-3 md:row-start-5 bg-[hsl(0,0%,100%)] p-4 rounded-md shadow-md shadow-gray-500">
        <img
          src="/assets/images/illustration-multiple-platforms.webp"
          alt="illustration of multi platforms"
        />
        <h4 className="text-xl font-semibold leading-5">
          Manage multiple accounts and platforms
        </h4>
      </div>

      <div className="col-span-1 md:row-span-3 md:col-end-4 md:row-start-5 bg-[hsl(39,100%,71%)] p-4 overflow-hidden rounded-md shadow-md shadow-gray-500">
        <h4 className="text-xl font-semibold leading-5">
          Maintain a consistent posting schedule
        </h4>
        <img
          src="/assets/images/illustration-consistent-schedule.webp"
          alt="illustration of maintaining schedules consistently"
        />
      </div>

      <div className="col-span-1 md:row-span-3 md:col-end-3 md:row-start-8 bg-[hsl(0,0%,100%)] rounded-md p-4 shadow-md shadow-gray-500">
        <h1 className="text-4xl font-semibold">&gt; 56%</h1>
        <p>faster audience growth</p>
        <img
          className="h-12"
          src="/assets/images/illustration-audience-growth.webp"
          alt="illustration of audience growth"
        />
      </div>

      <div className="md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-8 bg-[hsl(256,67%,59%)] rounded-md flex shadow-md shadow-gray-500">
        <img
          className="h-32"
          src="/assets/images/illustration-grow-followers.webp"
          alt="illustration of growing followers"
        />
        <h3 className="text-2xl">Grow followers with non-stop followers</h3>
      </div>
    </div>
  );
}

export default GridContainer;
