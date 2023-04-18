import Tweet from "../common/tweets/Tweet";
import Aside from "../common/sidebar/Aside";
import ProfileRightAside from "../common/ProfileRightAside";

function Avatar() {
  return (
    <div>
      <div class="relative">
        <img
          class="h-30 relative z-10"
          src="https://pbs.twimg.com/profile_banners/2369246263/1634731654/1500x500"
          alt="Jay Rowah"
        />
        <img
          class="absolute z-20 bottom-3/5 left-4/5 transform -translate-y-1/2 rounded-full border-4 ml-5"
          src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
          alt="Jay Rowah"
          width={110}
          height={110}
        />
      </div>
      <div class="flex justify-end">
        <button class="bg-gray-200 hover:bg-grey-400 font-semibold py-2 px-4 border border-black-500 hover:border-transparent text-black font-bold rounded-full mt-4 mr-3">
          Edit Profile
        </button>
      </div>

      <div class="mt-5 flex">
        <div>
          <span class="mx-2 text-lg font-bold flex flex-column">
            Jay Rowah
            <span>
              <a href="verified.co">
                <svg
                  viewBox="0 0 22 22"
                  aria-label="Verified account"
                  role="img"
                  class="fill-blue-500 h-6 w-6"
                  data-testid="icon-verified"
                >
                  <g>
                    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                  </g>
                </svg>
              </a>
            </span>
          </span>
          <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
            @JRowah
          </span>
        </div>
      </div>
      <section class="ml-3 mt-2">
        <span>Biochemist, </span>
        <span>Software Developer, </span>
        <span>Educator(PGDE)</span>
        <br />
        <span>#100Devs </span>
        <span>Elixir || JavaScript || NodeJS || ReactJS || AI.</span>
        <br />
        <span>Tech Writer</span>
      </section>
      <div class="ml-3 mt-2 flex flex-wrap">
        <div class="flex mr-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"></path>
            </g>
          </svg>

          <span class="text-gray-500">Science &amp; Technology </span>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
            </g>
          </svg>
        </div>

        <div class="flex mr-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
            </g>
          </svg>
          <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
            <span class="text-gray-500">Nairobi, Kenya</span>
          </span>
        </div>

        <div class="flex mr-2">
          <a
            dir="ltr"
            href="https://t.co/nN4GIKTG78"
            rel="noopener noreferrer nofollow"
            target="_blank"
            role="none"
            data-testid="UserUrl"
            class="flex"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
              <g>
                <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
              </g>
            </svg>
            <span class="text-blue-500">jrowah.com</span>
          </a>
        </div>

        <span class="flex text-gray-500 mr-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z"></path>
            </g>
          </svg>
          Born November 2
        </span>
        <span
          dir="ltr"
          role="presentation"
          class="flex"
          data-testid="UserJoinDate"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5">
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <span class="text-gray-500">Joined March 2009</span>
        </span>
      </div>
      <section class="flex ml-3 mt-2">
        <a href="ho.co" class="no-underline hover:underline">
          <span class="font-bold">10</span>
          <span> Following</span>
        </a>
        <a href="ho.co" class="ml-7 no-underline hover:underline">
          <span class="font-bold">1M</span>
          <span> Followers</span>
        </a>
      </section>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <section>
        <div class="mt-3 ml-10 flex text-lg">
          <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-b-4 border-blue-500">
            <a href="twts.com">Tweets</a>
          </span>
          <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-b-indigo-500">
            <a href="twts.com">Replies</a>
          </span>
          <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <a href="twts.com">Media</a>
          </span>
          <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <a href="twts.com">Likes</a>
          </span>
        </div>
        <hr />
      </section>
    </div>
  );
}

export default function ProfileComponent() {
  return (
    <div class="mx-20 mt-4 flex">
      <Aside />
      <div className="w-1/2">
        <Avatar />
        <Timeline />
        <Tweet />
      </div>
      <ProfileRightAside />
    </div>
  );
}
