export default function Tweet() {
  return (
    <section>
      <div class="flex ml-4">
        <div class="">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path>
            </g>
          </svg>
        </div>
        <div class="ml-3">
          <div class="">
            <div>
              <div>
                <span class="">Pinned Tweet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11 mt-0"
            src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Jay Rowah
            </span>
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @JRowah
            </span>
            <span>Oct 25, 2022</span>
          </div>
        </a>
      </div>
      <p class="ml-20">
        Hi, I'm James Rowa, a software developer (MERN Stack) from Nairobi,
        Kenya. I'm currently open to offers and I'm targeting Javascript,
        MongoDB, React, & Node opportunities. I'd appreciate a retweet. Thanks.
        This is a Twitter UI clone that I built using React and TailwindCSS to
        keep my front-end dev skills on fleek.
      </p>
      <button class="bg-transparent border border-black-800 ml-6 h-10 w-5/6 text-black font-bold py-2 px-4 rounded-full w-40 mt-3 ">
        Promote
      </button>
    </section>
  );
}
