import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'svg'> {}

export const RecentlyAddedIcon: FC<Props> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_125_8)">
      <circle cx="10" cy="10" r="10" fill="#F2F2F2" />
      <path
        d="M6 10.8502C5.72386 10.8502 5.5 10.6264 5.5 10.3502V9.62903C5.5 9.35289 5.72386 9.12903 6 9.12903H8.58756C8.8637 9.12903 9.08756 8.90517 9.08756 8.62903V6C9.08756 5.72386 9.31142 5.5 9.58756 5.5H10.4332C10.7093 5.5 10.9332 5.72386 10.9332 6V8.62903C10.9332 8.90518 11.157 9.12903 11.4332 9.12903H14C14.2761 9.12903 14.5 9.35289 14.5 9.62903V10.3502C14.5 10.6264 14.2761 10.8502 14 10.8502H11.4332C11.157 10.8502 10.9332 11.0741 10.9332 11.3502V14C10.9332 14.2761 10.7093 14.5 10.4332 14.5H9.58756C9.31142 14.5 9.08756 14.2761 9.08756 14V11.3502C9.08756 11.0741 8.8637 10.8502 8.58756 10.8502H6Z"
        fill="#1D1E24"
      />
    </g>
    <defs>
      <rect width="20" height="20" fill="white" />
    </defs>
  </svg>
);
