import clsx from 'clsx';

export const IconArrowFolder = () => {
  return (
    <svg width="10" height="18" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1V10C1 12.2091 2.79086 14 5 14V14" stroke="#D7E7FF" strokeLinecap="round" />
    </svg>
  );
};

export const IconCar = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      className={clsx(
        isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
        'transition-colors',
      )}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7871 13.621H17.5844"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.90625 13.621H8.70355"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.25391 9.43396C9.2151 10.2792 15.2657 10.2792 21.2269 9.43396"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.25684 18.5743C3.25511 19.1278 3.70333 19.5775 4.25684 19.5775H6.23814C6.79043 19.5775 7.23814 19.1297 7.23814 18.5775V18.1676C7.23814 17.6154 7.68586 17.1676 8.23814 17.1676H16.2512C16.8035 17.1676 17.2512 17.6154 17.2512 18.1676V18.5775C17.2512 19.1297 17.6989 19.5775 18.2512 19.5775H20.2462C20.7984 19.5775 21.2462 19.1297 21.2462 18.5775V13.3499C21.2456 12.5393 20.9869 11.7496 20.5078 11.0957L19.342 9.53121C19.2487 9.3994 19.1735 9.25615 19.1186 9.10427L18.0693 6.18973C17.8067 5.44058 17.1236 4.86861 16.34 4.74195C13.6332 4.31518 10.8764 4.31518 8.16962 4.74195C7.38945 4.87184 6.71104 5.44314 6.45002 6.18973L5.40071 9.10427C5.34561 9.25004 5.27042 9.3873 5.17728 9.51223L3.99206 11.1441C3.52328 11.791 3.2716 12.5699 3.27315 13.3689L3.25684 18.5743Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const IconDashboard = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Iconly/Light/Category"
      stroke="none"
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Category"
        transform="translate(2.999141, 3.000000)"
        className={clsx(
          isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
          'transition-colors',
        )}
        strokeWidth="1.5"
      >
        <path
          d="M0.000858865205,3.5 C0.000858865205,0.874787053 0.0289681101,0 3.50085887,0 C6.9727494,0 7.00085887,0.874787053 7.00085887,3.5 C7.00085887,6.12521295 7.01193168,7 3.50085887,7 C-0.010214169,7 0.000858865205,6.12521295 0.000858865205,3.5 Z"
          id="Stroke-1"
        ></path>
        <path
          d="M11.0008589,3.5 C11.0008589,0.874787053 11.0289681,0 14.5008589,0 C17.9727494,0 18.0008589,0.874787053 18.0008589,3.5 C18.0008589,6.12521295 18.0119317,7 14.5008589,7 C10.9897858,7 11.0008589,6.12521295 11.0008589,3.5 Z"
          id="Stroke-3"
        ></path>
        <path
          d="M0.000858865205,14.5 C0.000858865205,11.8747871 0.0289681101,11 3.50085887,11 C6.9727494,11 7.00085887,11.8747871 7.00085887,14.5 C7.00085887,17.1252129 7.01193168,18 3.50085887,18 C-0.010214169,18 0.000858865205,17.1252129 0.000858865205,14.5 Z"
          id="Stroke-5"
        ></path>
        <path
          d="M11.0008589,14.5 C11.0008589,11.8747871 11.0289681,11 14.5008589,11 C17.9727494,11 18.0008589,11.8747871 18.0008589,14.5 C18.0008589,17.1252129 18.0119317,18 14.5008589,18 C10.9897858,18 11.0008589,17.1252129 11.0008589,14.5 Z"
          id="Stroke-7"
        ></path>
      </g>
    </g>
  </svg>
);

export const IconLogout = ({ isActive }: { isActive?: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-red-500',
      'transition-colors',
    )}
  >
    <path
      d="M21.791 12.1207H9.75"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.8643 9.20471L21.7923 12.1207L18.8643 15.0367"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.3599 7.62988C16.0299 4.04988 14.6899 2.74988 9.35986 2.74988C2.25886 2.74988 2.25886 5.05988 2.25886 11.9999C2.25886 18.9399 2.25886 21.2499 9.35986 21.2499C14.6899 21.2499 16.0299 19.9499 16.3599 16.3699"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const IconBike = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
      'transition-colors',
    )}
  >
    <path
      d="M6.6651 18.6491C8.41044 18.6491 9.82532 17.2342 9.82532 15.4889C9.82532 13.7436 8.41044 12.3287 6.6651 12.3287C4.91976 12.3287 3.50488 13.7436 3.50488 15.4889C3.50488 17.2342 4.91976 18.6491 6.6651 18.6491Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.9369 10.5176L5.59251 7.25087C5.13091 7.09108 4.61604 7.17985 4.23433 7.48167L3.52417 8.05868C3.15133 8.35162 3.16021 8.91975 3.54192 9.20381L8.58407 12.9677"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.03857 15.4887H14.6639C14.6639 15.4887 16.2973 12.1865 20.4429 10.9348C22.3603 10.3578 20.6737 6.32765 17.3714 5.38668C16.7056 5.20027 16.0665 5.76839 16.1908 6.45192C16.3594 7.33963 16.5104 8.47589 16.3594 9.23043"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.4826 9.22153C10.2607 8.54687 11.4591 5.7151 16.0663 7.53489"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.8334 15.6487L16.271 13.6247"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.5663 12.3376C17.655 12.3198 17.7438 12.3198 17.8326 12.3198C19.5814 12.3198 21.0017 13.7401 21.0017 15.48C21.0017 17.2288 19.5814 18.6491 17.8326 18.6491C16.0838 18.6491 14.6724 17.2288 14.6724 15.48"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const IconProfil = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Iconly/Light/Profile"
      stroke="none"
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Profile"
        transform="translate(4.814286, 2.814476)"
        className={clsx(
          isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
          'transition-colors',
        )}
      >
        <path
          d="M7.17047619,12.531714 C3.30285714,12.531714 -4.08562073e-14,13.1164759 -4.08562073e-14,15.4583807 C-4.08562073e-14,17.8002854 3.28190476,18.4059997 7.17047619,18.4059997 C11.0380952,18.4059997 14.34,17.8202854 14.34,15.479333 C14.34,13.1383807 11.0590476,12.531714 7.17047619,12.531714 Z"
          id="Stroke-1"
          strokeWidth="1.5"
        ></path>
        <path
          d="M7.17047634,9.19142857 C9.70857158,9.19142857 11.7657144,7.13333333 11.7657144,4.5952381 C11.7657144,2.05714286 9.70857158,-5.32907052e-15 7.17047634,-5.32907052e-15 C4.6323811,-5.32907052e-15 2.574259,2.05714286 2.574259,4.5952381 C2.56571443,7.1247619 4.60952396,9.18285714 7.13809539,9.19142857 L7.17047634,9.19142857 Z"
          id="Stroke-3"
          strokeWidth="1.5"
        ></path>
      </g>
    </g>
  </svg>
);

export const IconSearch = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
      'transition-colors',
    )}
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M11.6324 3C16.2814 3 20.0499 6.76847 20.0499 11.4175C20.0499 16.0666 16.2814 19.836 11.6324 19.836C6.98331 19.836 3.21484 16.0666 3.21484 11.4175C3.21484 6.76847 6.98331 3 11.6324 3Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.3613 17.584L20.7863 21.0002"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const IconSettings = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Iconly/Light/Setting"
      stroke="none"
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Setting"
        transform="translate(2.500000, 1.500000)"
        strokeWidth="1.5"
        className={clsx(
          isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
          'transition-colors',
        )}
      >
        <path
          d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z"
          id="Path_33946"
        ></path>
        <circle id="Ellipse_737" cx="9.67505726" cy="10.3890161" r="2.63615562"></circle>
      </g>
    </g>
  </svg>
);

export const IconSteeringWheel = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      isActive ? 'stroke-white' : 'stroke-black group-hover:stroke-blue-500',
      'transition-colors',
    )}
  >
    <path
      d="M3.76855 10.2462H8.29149L9.19624 9.23755C9.57559 8.81463 10.1169 8.573 10.6851 8.573H13.8166C14.3848 8.573 14.9261 8.81464 15.3055 9.2376L16.2101 10.2462H20.7332"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <circle
      cx="12.25"
      cy="12.8848"
      r="9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></circle>
    <circle
      cx="12.25"
      cy="13.5687"
      r="1.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></circle>
    <path
      d="M3.47251 14.4775C8.25525 14.4775 10.2422 16.9942 10.2422 21.6433"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.027 14.4775C16.2443 14.4775 14.2573 16.9942 14.2573 21.6433"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
