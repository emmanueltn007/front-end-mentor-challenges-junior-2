function GridContainer () {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-span-1 row-span-2 bg-[hsl(31,66%,93%)]">
                <h3>
                    Create and schedule content quicker.
                </h3>
                <img src="/assets/images/illustration-create-post.webp" alt="create a post picture" />
            </div>

            <div className="row-span-2 col-span-2 bg-[hsl(256,67%,59%)]">
                <h1>
                    Social Media 10x faster With AI
                </h1>
                <img src="/assets/images/illustration-five-stars.webp" alt="five stars illustration" />
            </div>

            <div className="row-span-1 col-span-2 bg-[hsl(254,88%,90%)]">
                <h4>
                    Schedule to social media
                </h4>
                <img src="/assets/images/illustration-schedule-posts.webp" alt="bschedule posts illustration" />
                <p>
                    Optimize post timings to publish content at the perfect time for your audience
                </p>
            </div>

            <div className="col-span-1 row-span-2 bg-[hsl(39,100%,71%)]">
                <h3>
                    Write your code using AI
                </h3>
                <img src="/assets/images/illustration-ai-content.webp" alt="AI content illustration" />
            </div>

            <div className="col-span-1 row-span-1 bg-[]">
                <img src="/assets/images/illustration-multiple-platforms.webp" alt="illustration of multi platforms" />
                <h4>
                    Manage multiple accounts and platforms
                </h4>
            </div>

            <div className="col-span-1 row-span-1 bg-[hsl(39,100%,71%)]">
                <h4>
                    Maintain a consistent posting schedule
                </h4>
                <img src="/assets/images/illustration-consistent-schedule.webp" alt="illustration of maintaining schedules consistently" />
            </div>

            <div className="col-span-1 row-span-1 bg-[]">
                <h1>
                    56%
                </h1>
                <p>
                    faster audience growth
                </p>
                <img src="/assets/images/illustration-audience-growth.webp" alt="illustration of audience growth" />
            </div>

            <div className="col-span-2 row-span-1 bg-[hsl(256,67%,59%)]">
                <img src="/assets/images/illustration-grow-followers.webp" alt="illustration of growing followers" />
            </div>
        </div>
    );
}

export default GridContainer