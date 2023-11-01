import { AppBarProps } from "@interface/type";

export default function MyIcon({ isCurrentPage }: AppBarProps) {
  return (
    <>
      {isCurrentPage ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.166 12C14.9274 12 17.166 9.76142 17.166 7C17.166 4.23858 14.9274 2 12.166 2C9.40459 2 7.16602 4.23858 7.16602 7C7.16602 9.76142 9.40459 12 12.166 12Z"
            fill="#1D3D2E"
          />
          <path
            d="M12.1662 14.5C7.15617 14.5 3.07617 17.86 3.07617 22C3.07617 22.28 3.29617 22.5 3.57617 22.5H20.7562C21.0362 22.5 21.2562 22.28 21.2562 22C21.2562 17.86 17.1762 14.5 12.1662 14.5Z"
            fill="#1D3D2E"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.166 12C14.9274 12 17.166 9.76142 17.166 7C17.166 4.23858 14.9274 2 12.166 2C9.40459 2 7.16602 4.23858 7.16602 7C7.16602 9.76142 9.40459 12 12.166 12Z"
            stroke="#9A9DA3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7562 22C20.7562 18.13 16.9062 15 12.1662 15C7.42617 15 3.57617 18.13 3.57617 22"
            stroke="#9A9DA3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
}
