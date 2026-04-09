function GridCard () {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
      <div className="md:col-span-2 row-span-2 md:row-span-1 md:col-start-1 row-end-3 md:row-start-1 bg-[hsl(263,55%,52%)] p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <img 
            className="h-8 rounded-full border-2 border-[hsl(0,100%,100%)]"
            src="/images/image-daniel.jpg" alt="avatar" 
          />
          <div className="">
            <h4 className="font-semibold">
              Daniel Clifford
            </h4>
            <span className="text-sm">
              Verified Graduate
            </span>
          </div>
        </div>
        <p className="font-semibold text-lg leading-5">
          I received a job offer mid-course, and the subjects I learned were, if not more so, in the company i joined.
          I honestly feel I got every penny's worth.
        </p>
        <p className="text-sm leading-5">
          I was an EMT for many years before I joined the bootcamp.
          I've looking to make a transition and have heard some people who has amazing experience here.
          I signed up for the free intro course and found it incredibly fun!
          I enrolled shortly thereafter. The next 12 weeks was the best - time of my life.
          Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.
        </p>
      </div>

      {/* Grid 2 */}
      <div className="row-span-1 md:row-span-1 col-span-1 md:col-start-3 row-end-4 md:row-start-1 bg-[hsl(217,19%,35%)] rounded-lg p-4">
        <div className="flex">
          <img 
            className="h-8 rounded-full"
            src="/images/image-jonathan.jpg" alt="avatar" 
          />
          <div>
            <h4 className="font-semibold">
              Jonathan Walters
            </h4>
            <span>
              Verified Graduate
            </span>
          </div>
        </div>
        <p>
          The team was very supportive and kept me motivated.
        </p>
        <p>
          I started a total newbie with virtually no coding skills.
          I now work as a mobile engineer for a big company.
          This was one of the best investments I've made in myself.
        </p>
      </div>

      {/* Grid 3 */}
      <div className="col-span-1 row-span-1 md:row-span-2 md:col-start-4 row-end-5 md:row-start-1 bg-[hsl(0,0%,100%)] rounded-lg p-4">
        <div className="flex">
          <img 
            className="h-8 rounded-full"
            src="/images/image-kira.jpg" alt="avatar" 
          />
          <div>
            <h4 className="font-semibold">
              Kira Whittle
            </h4>
            <span>
              Verified Graduate
            </span>
          </div>
        </div>
        <p>
          Such a life-chaning experience. Highly recommemded!
        </p>
        <p>
          Before joining the bootcamp, I've never written a single line of code.
          I needed some structure from professionals who can help me learn programming step-by-step.
          I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance.
          The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
          could ever have. In fact, I've always reffered to it during interviews as an example of my development experience.
          It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!
        </p>
      </div>

      {/* Grid 4 */}
      <div className="row-span-2 md:row-span-1 md:col-span-1 md:col-start-1 row-end-7 md:row-start-2 bg-[hsl(0,0%,100%)] rounded-lg p-4">
        <div className="flex">
          <img 
            className="h-8 rounded-full"
            src="/images/image-jeanette.jpg" alt="avatar" 
          />
          <div>
            <h4 className="font-semibold">
              Jeanette Harmon
            </h4>
            <span>
              Verified Graduate
            </span>
          </div>
        </div>
        <p>
          An overall wonderful and awarding experience
        </p>
        <p>
          Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.
        </p>
      </div>

      {/* Grid 5 */}
      <div className="md:col-span-2 md:row-span-1 md:col-start-2 row-end-9 md:row-start-2 bg-[hsl(219,29%,14%)] rounded-lg p-4">
        <div>
          <img 
            className="h-8 rounded-full"
            src="/images/image-patrick.jpg" alt="avatar" 
          />
          <div className="flex">
            <h4 className="font-semibold">
              Patrick Abrams
            </h4>
            <span>
              Verified Graduate
            </span>
          </div>
        </div>
        <p>
          Awesome teaching support from the TAs who did the boootcamp themselves.
          Getting guidance from them and learning from their experience was easy.
        </p>
        <p>
          The staff seem genuinely concerned about my progress which I find really refreshing.
          The program gave me the guidance necessary to be able to go out in the world and present myself as a
          capable junior developer. The standard is above the rest. You will get the personal attention you need 
          from an incredible community of smart and amazing people.
        </p>
      </div>
    </div>
  );
}

export default GridCard