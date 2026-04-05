function GridContainer () {
    return (
        <div className="h-screen w-full grid grid-cols-4 grid-rows-6 gap-4 px-16 py-12">
            <div className="col-span-1 row-span-3 col-end-2
                        bg-[hsl(31,66%,93%)] rounded-md px-4 flex flex-col justify-center"
            >
                <h3 className="text-2xl font-semibold">
                    Create and schedule content quicker.
                </h3>
                <img 
                    className="h-auto"
                    src="/assets/images/illustration-create-post.webp" alt="create a post picture" 
                />
            </div>

            <div className="row-span-2 col-span-2 col-end-4
                            px-8 bg-[hsl(256,67%,59%)]"
            >
                <h1>
                    Social Media 10x faster With AI
                </h1>
                <img src="/assets/images/illustration-five-stars.webp" alt="five stars illustration" />
            </div>

            <div className="row-span-4 col-span-1 col-end-5
                            bg-[hsl(254,88%,90%)]"
            >
                <h4>
                    Schedule to social media
                </h4>
                <img src="/assets/images/illustration-schedule-posts.webp" alt="bschedule posts illustration" />
                <p>
                    Optimize post timings to publish content at the perfect time for your audience
                </p>
            </div>

            <div className="col-span-1 row-span-3 col-end-2
                        bg-[hsl(39,100%,71%)]"
            >
                <h3>
                    Write your code using AI
                </h3>
                <img src="/assets/images/illustration-ai-content.webp" alt="AI content illustration" />
            </div>

            <div className="col-span-1 row-span-2 col-end-3 row-start-3 bg-[]">
                <img src="/assets/images/illustration-multiple-platforms.webp" alt="illustration of multi platforms" />
                <h4>
                    Manage multiple accounts and platforms
                </h4>
            </div>

            <div className="col-span-1 row-span-2 col-end-4 row-start-3 bg-[hsl(39,100%,71%)]">
                <h4>
                    Maintain a consistent posting schedule
                </h4>
                <img src="/assets/images/illustration-consistent-schedule.webp" alt="illustration of maintaining schedules consistently" />
            </div>

            <div className="col-span-1 row-span-2 col-end-3 row-start-5 bg-[]">
                <h1>
                    56%
                </h1>
                <p>
                    faster audience growth
                </p>
                <img src="/assets/images/illustration-audience-growth.webp" alt="illustration of audience growth" />
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-5 bg-[hsl(256,67%,59%)]">
                <img src="/assets/images/illustration-grow-followers.webp" alt="illustration of growing followers" />
            </div>
        </div>
    );
}

export default GridContainer