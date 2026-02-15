import { getWeekReport } from "../utils/dateUtils";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white w-full p-4 shadow-sm">
      <div className="relative max-w-md m-auto flex justify-center items-center px-4">
        <img
          src="/logo.png"
          alt="app logo"
          className="absolute left-0 size-14"
        />
        <div>
          <h1 className="text-2xl font-semibold">Weekly Report</h1>
          <p className="text-sm text-gray-500 text-center">{`${getWeekReport()}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
