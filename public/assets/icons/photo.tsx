import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

export const PhotoIcon: FC<Props> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11" cy="11" r="11" fill="#0066FF" />
    <g clip-path="url(#clip0_121_1536)">
      <path
        d="M11 11C11.6799 11 12.3445 10.7984 12.9098 10.4207C13.4751 10.043 13.9157 9.5061 14.1758 8.87798C14.436 8.24985 14.5041 7.55869 14.3714 6.89188C14.2388 6.22507 13.9114 5.61256 13.4307 5.13182C12.9499 4.65108 12.3374 4.32369 11.6706 4.19105C11.0038 4.05842 10.3126 4.12649 9.68453 4.38667C9.0564 4.64684 8.51954 5.08743 8.14182 5.65273C7.76411 6.21802 7.5625 6.88263 7.5625 7.5625C7.56341 8.4739 7.92587 9.34772 8.57033 9.99218C9.21478 10.6366 10.0886 10.9991 11 11ZM11 5.27083C11.4532 5.27083 11.8963 5.40524 12.2732 5.65705C12.65 5.90886 12.9438 6.26677 13.1172 6.68552C13.2907 7.10427 13.3361 7.56504 13.2476 8.00958C13.1592 8.45412 12.9409 8.86246 12.6205 9.18295C12.3 9.50345 11.8916 9.72171 11.4471 9.81013C11.0025 9.89856 10.5418 9.85318 10.123 9.67973C9.70427 9.50627 9.34636 9.21255 9.09455 8.83568C8.84274 8.45882 8.70833 8.01575 8.70833 7.5625C8.70833 6.95471 8.94978 6.37182 9.37955 5.94205C9.80932 5.51228 10.3922 5.27083 11 5.27083Z"
        fill="white"
      />
      <path
        d="M11 12.146C9.63294 12.1475 8.32231 12.6912 7.35566 13.6579C6.389 14.6246 5.84527 15.9352 5.84375 17.3022C5.84375 17.4542 5.90411 17.5999 6.01155 17.7074C6.119 17.8148 6.26472 17.8752 6.41667 17.8752C6.56861 17.8752 6.71434 17.8148 6.82178 17.7074C6.92922 17.5999 6.98958 17.4542 6.98958 17.3022C6.98958 16.2386 7.41211 15.2186 8.16421 14.4665C8.91631 13.7144 9.93637 13.2918 11 13.2918C12.0636 13.2918 13.0837 13.7144 13.8358 14.4665C14.5879 15.2186 15.0104 16.2386 15.0104 17.3022C15.0104 17.4542 15.0708 17.5999 15.1782 17.7074C15.2857 17.8148 15.4314 17.8752 15.5833 17.8752C15.7353 17.8752 15.881 17.8148 15.9884 17.7074C16.0959 17.5999 16.1562 17.4542 16.1562 17.3022C16.1547 15.9352 15.611 14.6246 14.6443 13.6579C13.6777 12.6912 12.3671 12.1475 11 12.146Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_121_1536">
        <rect
          width="13.75"
          height="13.75"
          fill="white"
          transform="translate(4.125 4.125)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const StyledPhotoIcon = styled(PhotoIcon)`
  width: 32px;
  height: 32px;

  cursor: pointer;
`;
