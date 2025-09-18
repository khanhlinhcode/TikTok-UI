export const UploadIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >``
    {/* Mũi tên lên */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3L6 9H10V16H14V9H18L12 3Z"
    />
    {/* Thanh ngang dưới */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 20C5 19.4477 5.44772 19 6 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20Z"
    />
  </svg>
);
