export default function Tweet() {
  return (
    <section>
      <div class="hover:bg-gray-100">
        <div class="flex ml-4">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path>
            </g>
          </svg>

          <div class="ml-3">
            <div>
              <span class="">Pinned Tweet</span>
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
        <a href="twee.co">
          <p class="ml-20">
            Hi, I'm James Rowa, a software developer (MERN Stack) from Nairobi,
            Kenya. I'm currently open to offers and I'm targeting Javascript,
            MongoDB, React, & Node opportunities. I'd appreciate a retweet.
            Thanks. This is a Twitter UI clone that I built using React and
            TailwindCSS to keep my front-end dev skills on fleek.
          </p>
        </a>
        <button class="bg-transparent border border-black-800 ml-6 h-10 w-5/6 text-black font-bold py-2 px-4 rounded-full w-40 mt-3 ">
          Promote
        </button>
        <div class="flex ml-20">
          <div class="w-full">
            <div class="flex items-center">
              <div class="flex-1 text-center">
                <a
                  href="ho.co"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="ho.co"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-2" />
      </div>
      <div class="hover:bg-gray-100">
        <div class="space-y-3 ">
          <a href="home.com" class="flex items-center px-4 -mx-2">
            <img
              class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
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
        <a href="twee.co">
          <p class="ml-20">
            Day 07 of the challenge{" "}
            <span class="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with <span class="text-blue-400">#tailwindcss</span>,
            so just started building Twitter UI using Tailwind and so far it
            looks so promising. I will post my code after completion. [07/100]
            <span class="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div class="md:flex-shrink pr-6 pt-3">
            <img
              class="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div class="flex ml-20">
          <div class="w-full">
            <div class="flex items-center">
              <div class="flex-1 text-center">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-2" />
      </div>
      <div class="hover:bg-gray-100">
        <div class="space-y-3 ">
          <a href="home.com" class="flex items-center px-4 -mx-2">
            <img
              class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
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
        <a href="twee.co">
          <p class="ml-20">
            Hi, I'm James Rowa, a software developer (MERN Stack) from Nairobi,
            Kenya. I'm currently open to offers and I'm targeting Javascript,
            MongoDB, React, & Node opportunities. I'd appreciate a retweet.
            Thanks. This is a Twitter UI clone that I built using React and
            TailwindCSS to keep my front-end dev skills on fleek.
          </p>
        </a>
        <div class="flex ml-20">
          <div class="w-full">
            <div class="flex items-center">
              <div class="flex-1 text-center">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-2" />
      </div>
      <div class="hover:bg-gray-100">
        <div class="space-y-3 ">
          <a href="home.com" class="flex items-center px-4 -mx-2">
            <img
              class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
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
        <a href="twee.co">
          <p class="ml-20">
            The last few weeks I have dived deep into backend with Elixir I was
            afraid I'd forget front-end basics. I am here reminding myself that
            while building a twitter UI clone with React and Tailwind.
          </p>
          <div class="md:flex-shrink pr-6 pt-3">
            <img
              class="rounded-lg w-4/5 h-64 ml-20"
              src="https://pbs.twimg.com/media/FsyVikWWYAMHCMa?format=jpg&name=large"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div class="flex ml-20">
          <div class="w-full">
            <div class="flex items-center">
              <div class="flex-1 text-center">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    class="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-2" />
      </div>
    </section>
  );
}
