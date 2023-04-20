export default function Policy() {
  return (
    <div className="flow-root m-6 inline">
      <div className="flex-1">
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500 ">
            Terms of Service
          </span>{" "}
        </a>
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500">
            Privacy Policy
          </span>{" "}
        </a>
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500">
            Cookie Policy
            <br />
          </span>
        </a>
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500">
            Accessibility{" "}
          </span>
        </a>
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500">
            Ads Info{" "}
          </span>
        </a>
        <a href="/how" className="hover:underline">
          <span className="text-sm leading-6 font-medium text-gray-500">
            More...
          </span>
        </a>
      </div>
      <div className="flex-2">
        <p className="text-sm leading-6 font-medium text-gray-500">
          {" "}
          © 2023 Twitter, Inc.
        </p>
      </div>
    </div>
  );
}
