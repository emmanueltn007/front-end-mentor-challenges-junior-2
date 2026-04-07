function GridContainer() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-10 gap-4 px-4 md:px-36 py-8">

      {/* Grid Block 1 */}
      <div
        className="row-start-7 col-span-1 md:row-span-5 col-end-2
                        bg-[hsl(31,66%,93%)] rounded-md p-8 flex flex-col justify-center gap-8 shadow-md shadow-gray-500"
      >
        <h3 className="text-4xl md:text-2xl font-semibold leading-7">
          Create and schedule content{" "}
          <span className="italic text-[hsl(256,67%,59%)]">quicker.</span>
        </h3>
        <img
          className="w-1/2 md:h-auto"
          src="/assets/images/illustration-create-post.webp"
          alt="create a post picture"
        />
      </div>

      {/* Grid Block 2 */}
      <div
        className="row-start-1 md:row-span-4 md:col-span-2 md:col-end-4
                            px-8 max-md:py-8 bg-[hsl(256,67%,59%)] flex flex-col items-center justify-center text-center rounded-md shadow-md shadow-gray-500"
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

      {/* Grid Block 3 */}
      <div
        className="row-start-4 md:row-span-7 col-span-1 md:col-end-5
                            bg-[hsl(254,88%,90%)] flex flex-col justify-center gap-4 px-4 py-8 rounded-md shadow-md shadow-gray-500 max-md:text-center"
      >
        <h4 className="text-2xl md:text-xl font-semibold leading-5">
          Schedule to social media
        </h4>
        <img
        className="h-88"
          src="/assets/images/illustration-schedule-posts.webp"
          alt="bschedule posts illustration"
        />
        <p className="leading-5 text-lg max-md:px-8">
          Optimize post timings to publish content at the perfect time for your
          audience
        </p>
      </div>

      {/* Grid Block 4 */}
      <div
        className="row-start-8 col-span-1 md:row-span-5 col-end-2
                        bg-[hsl(39,100%,71%)] p-8 rounded-md shadow-md shadow-gray-500 flex flex-col gap-8"
      >
        <h3 className="text-4xl md:text-2xl leading-5 font-semibold">Write your code using AI</h3>
        <img
          className="w-[60%]"
          src="/assets/images/illustration-ai-content.webp"
          alt="AI content illustration"
        />
      </div>

      {/* Grid Block 5 */}
      <div className="row-start-2 col-span-1 md:row-span-3 md:col-end-3 md:row-start-5 bg-[hsl(0,0%,100%)] p-4 rounded-md shadow-md shadow-gray-500 flex flex-col gap-4">
        <img
          src="/assets/images/illustration-multiple-platforms.webp"
          alt="illustration of multi platforms"
        />
        <h4 className="text-2xl md:text-xl font-semibold leading-5">
          Manage multiple accounts and platforms
        </h4>
      </div>

      {/* Grid Block 6 */}
      <div className="row-start-3 col-span-1 md:row-span-3 md:col-end-4 md:row-start-5 bg-[hsl(39,100%,71%)] max-md:pl-4 max-md:pt-4 md:p-4 md:overflow-hidden rounded-md shadow-md shadow-gray-500 flex flex-col gap-4">
        <h4 className="text-2xl md:text-xl font-semibold leading-5 max-md:pr-32">
          Maintain a consistent posting schedule
        </h4>
        <img
          className="w-[60%]"
          src="/assets/images/illustration-consistent-schedule.webp"
          alt="illustration of maintaining schedules consistently"
        />
      </div>

      {/* Grid Block 7 */}
      <div className="row-start-6 col-span-1 md:row-span-3 md:col-end-3 md:row-start-8 bg-[hsl(0,0%,100%)] rounded-md p-4 shadow-md shadow-gray-500 flex flex-col gap-4">
        <h1 className="text-5xl md:text-4xl font-semibold">&gt; 56%</h1>
        <p className="max-md:text-lg">faster audience growth</p>
        <img
          className="w-[45%] md:h-12"
          src="/assets/images/illustration-audience-growth.webp"
          alt="illustration of audience growth"
        />
      </div>

      {/* Grid Block 8 */}
      <div className="row-start-5 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-8 bg-[hsl(256,67%,59%)] rounded-md flex flex-col md:flex-row shadow-md shadow-gray-500 max-md:text-center py-4 px-8">
        <img
          className="w-[60%] md:h-full object-contain max-md:mx-auto"
          src="/assets/images/illustration-grow-followers.webp"
          alt="illustration of growing followers"
        />
        <h3 className="text-3xl md:text-2xl font-semibold text-[hsl(0,100%,100%)]">Grow followers with non-stop content</h3>
      </div>
    </div>
  );
}

export default GridContainer;
