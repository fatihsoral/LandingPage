import React from "react";
type Props = {
  className?: string;
};
const Circle4 = ({ className }: Props) => {
  return (
    <svg
      width="336"
      height="335"
      viewBox="0 0 336 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M335.493 169.002L334.493 168.993C334.498 168.496 334.5 167.998 334.5 167.5C334.5 167.002 334.498 166.504 334.493 166.007L335.493 165.998C335.498 166.498 335.5 166.999 335.5 167.5C335.5 168.001 335.498 168.502 335.493 169.002ZM335.441 163.003L334.441 163.029C334.415 162.039 334.38 161.051 334.337 160.065L335.336 160.021C335.38 161.013 335.415 162.007 335.441 163.003ZM335.178 157.033L334.18 157.095C334.119 156.103 334.049 155.113 333.971 154.126L334.968 154.047C335.047 155.04 335.117 156.035 335.178 157.033ZM334.705 151.076C334.608 150.081 334.503 149.088 334.388 148.098L333.395 148.213C333.508 149.197 333.613 150.183 333.71 151.173L334.705 151.076ZM334.019 145.129C333.887 144.142 333.747 143.158 333.598 142.177L332.61 142.327C332.758 143.302 332.897 144.281 333.028 145.262L334.019 145.129ZM333.122 139.218L332.137 139.386C331.97 138.408 331.795 137.433 331.612 136.46L332.595 136.275C332.779 137.253 332.955 138.234 333.122 139.218ZM332.016 133.347L331.036 133.55C330.835 132.577 330.625 131.607 330.406 130.64L331.381 130.419C331.601 131.392 331.813 132.368 332.016 133.347ZM330.697 127.51L329.725 127.748C329.489 126.786 329.245 125.826 328.993 124.87L329.96 124.615C330.214 125.577 330.459 126.542 330.697 127.51ZM329.169 121.727C328.897 120.768 328.617 119.813 328.329 118.861L327.372 119.151C327.658 120.097 327.937 121.047 328.207 122L329.169 121.727ZM327.436 116.006L326.484 116.314C326.179 115.369 325.866 114.429 325.545 113.492L326.491 113.168C326.814 114.11 327.129 115.056 327.436 116.006ZM325.498 110.352C325.157 109.413 324.808 108.478 324.452 107.547L323.518 107.905C323.873 108.831 324.219 109.76 324.558 110.693L325.498 110.352ZM323.356 104.765L322.429 105.14C322.058 104.222 321.678 103.307 321.291 102.397L322.212 102.006C322.601 102.922 322.982 103.841 323.356 104.765ZM321.016 99.262L320.103 99.6698C319.698 98.7648 319.286 97.8642 318.867 96.9678L319.772 96.5437C320.194 97.4454 320.609 98.3516 321.016 99.262ZM318.48 93.8482L317.582 94.2884C317.146 93.3978 316.701 92.5117 316.249 91.6301L317.139 91.1738C317.594 92.0607 318.041 92.9522 318.48 93.8482ZM315.752 88.527L314.87 88.9991C314.402 88.1251 313.926 87.2557 313.443 86.3911L314.316 85.9032C314.802 86.7731 315.281 87.6477 315.752 88.527ZM312.834 83.3057L311.97 83.8091C311.471 82.9532 310.965 82.1022 310.452 81.2562L311.307 80.7375C311.823 81.5886 312.332 82.4447 312.834 83.3057ZM309.732 78.1934L308.886 78.7273C308.357 77.8893 307.821 77.0564 307.277 76.2285L308.113 75.6796C308.66 76.5124 309.199 77.3504 309.732 78.1934ZM306.45 73.1957L305.624 73.7594C305.065 72.9405 304.499 72.1268 303.926 71.3185L304.742 70.7401C305.318 71.5533 305.888 72.3719 306.45 73.1957ZM302.991 68.3168L302.186 68.9095C301.598 68.1113 301.004 67.3186 300.403 66.5313L301.198 65.9244C301.802 66.7163 302.4 67.5138 302.991 68.3168ZM299.361 63.5639L298.578 64.185C297.962 63.4084 297.34 62.6375 296.712 61.8723L297.484 61.2374C298.117 62.0072 298.742 62.7828 299.361 63.5639ZM295.565 58.9437L294.804 59.5921C294.161 58.8378 293.512 58.0892 292.856 57.3465L293.606 56.6847C294.266 57.4318 294.919 58.1848 295.565 58.9437ZM291.607 54.4611L290.87 55.1362C290.201 54.4051 289.525 53.68 288.844 52.9609L289.569 52.2729C290.255 52.9962 290.935 53.7257 291.607 54.4611ZM287.493 50.1214L286.779 50.8222C286.085 50.1154 285.384 49.4148 284.678 48.7205L285.379 48.0071C286.09 48.7056 286.794 49.4104 287.493 50.1214ZM283.227 45.9306C282.504 45.2448 281.774 44.5654 281.039 43.8925L280.364 44.6302C281.095 45.2992 281.82 45.9746 282.539 46.6563L283.227 45.9306ZM278.815 41.8938L278.153 42.6435C277.411 41.9878 276.662 41.3386 275.908 40.696L276.556 39.9347C277.315 40.5811 278.068 41.2342 278.815 41.8938ZM274.262 38.0157L273.628 38.7884C272.862 38.1597 272.091 37.5376 271.315 36.9224L271.936 36.1386C272.717 36.7575 273.493 37.3833 274.262 38.0157ZM269.576 34.3024L268.969 35.0971C268.181 34.4958 267.389 33.9014 266.59 33.314L267.183 32.5086C267.986 33.0996 268.784 33.6975 269.576 34.3024ZM264.76 30.7581L264.181 31.5739C263.373 31.0009 262.559 30.4349 261.74 29.876L262.304 29.05C263.128 29.6122 263.947 30.1816 264.76 30.7581ZM259.82 27.387L259.271 28.2229C258.444 27.6793 257.611 27.1429 256.773 26.6138L257.306 25.7682C258.15 26.3005 258.987 26.8402 259.82 27.387ZM254.762 24.1934L254.244 25.0484C253.398 24.535 252.547 24.029 251.691 23.5304L252.194 22.6664C253.055 23.168 253.911 23.677 254.762 24.1934ZM249.597 21.1841L249.109 22.057C248.244 21.5738 247.375 21.098 246.501 20.6299L246.973 19.7484C247.852 20.2193 248.727 20.6979 249.597 21.1841ZM244.326 18.361L243.87 19.2508C242.988 18.7988 242.102 18.3543 241.211 17.9176L241.652 17.0197C242.548 17.4591 243.439 17.9062 244.326 18.361ZM238.956 15.7278L238.532 16.6334C237.636 16.2136 236.735 15.8016 235.83 15.3974L236.238 14.4843C237.148 14.8909 238.054 15.3054 238.956 15.7278ZM233.494 13.2882L233.103 14.2085C232.193 13.8215 231.278 13.4424 230.36 13.0712L230.735 12.1441C231.659 12.5175 232.578 12.8989 233.494 13.2882ZM227.952 11.0484L227.594 11.9822C226.669 11.6274 225.74 11.2807 224.807 10.9421L225.148 10.0021C226.087 10.3427 227.022 10.6916 227.952 11.0484ZM222.332 9.00857L222.008 9.95455C221.071 9.63347 220.131 9.32051 219.186 9.01576L219.493 8.06409C220.443 8.37069 221.39 8.68554 222.332 9.00857ZM216.639 7.17117L216.349 8.12821C215.403 7.84154 214.453 7.56307 213.5 7.29287L213.773 6.33077C214.732 6.6026 215.687 6.88276 216.639 7.17117ZM210.885 5.54035L210.63 6.5072C209.674 6.25471 208.714 6.01051 207.751 5.77469L207.989 4.8034C208.958 5.04065 209.923 5.28633 210.885 5.54035ZM205.081 4.11852L204.86 5.09392C203.893 4.87538 202.923 4.66526 201.95 4.46364L202.153 3.48443C203.132 3.68727 204.108 3.89866 205.081 4.11852ZM199.225 2.9052L199.039 3.88789C198.067 3.7046 197.092 3.52976 196.114 3.36344L196.282 2.37759C197.266 2.54491 198.247 2.72081 199.225 2.9052ZM193.323 1.90171L193.173 2.8904C192.197 2.74247 191.219 2.60301 190.238 2.47208L190.371 1.48087C191.357 1.61258 192.342 1.75289 193.323 1.90171ZM187.402 1.11159L187.287 2.10501C186.303 1.99149 185.316 1.88656 184.327 1.79029L184.424 0.79499C185.419 0.891841 186.412 0.997401 187.402 1.11159ZM181.453 0.532368L181.373 1.52923C180.386 1.45079 179.397 1.38095 178.405 1.3198L178.467 0.321699C179.464 0.383213 180.46 0.453461 181.453 0.532368ZM175.479 0.163972L175.435 1.16301C174.449 1.11969 173.461 1.08495 172.47 1.05885L172.497 0.0591927C173.493 0.0854468 174.487 0.120398 175.479 0.163972ZM169.502 0.00659398L169.493 1.00656C168.996 1.00219 168.498 1 168 1C167.502 1 167.004 1.00219 166.507 1.00656L166.498 0.00659586C166.998 0.00220167 167.499 0 168 0C168.501 0 169.002 0.00220104 169.502 0.00659398ZM163.503 0.0591979L163.529 1.05885C162.539 1.08495 161.551 1.1197 160.565 1.16302L160.521 0.163982C161.513 0.120406 162.507 0.0854533 163.503 0.0591979ZM157.533 0.321712L157.595 1.31982C156.603 1.38097 155.613 1.4508 154.626 1.52924L154.547 0.532385C155.54 0.453477 156.535 0.383227 157.533 0.321712ZM151.576 0.795009L151.673 1.79031C150.683 1.88658 149.697 1.99152 148.713 2.10503L148.598 1.11162C149.588 0.997422 150.581 0.891861 151.576 0.795009ZM145.629 1.4809L145.762 2.47211C144.781 2.60304 143.802 2.7425 142.827 2.89043L142.677 1.90174C143.658 1.75292 144.642 1.61261 145.629 1.4809ZM139.718 2.37763L139.886 3.36348C138.908 3.52979 137.933 3.70463 136.96 3.88792L136.775 2.90524C137.753 2.72084 138.734 2.54494 139.718 2.37763ZM133.847 3.48447L134.05 4.46367C133.077 4.6653 132.107 4.87542 131.14 5.09396L130.919 4.11856C131.892 3.8987 132.868 3.68731 133.847 3.48447ZM128.01 4.80344L128.248 5.77473C127.286 6.01056 126.326 6.25476 125.37 6.50725L125.115 5.54039C126.077 5.28637 127.042 5.0407 128.01 4.80344ZM122.227 6.33082C121.268 6.60265 120.313 6.88281 119.361 7.17122L119.651 8.12826C120.597 7.84159 121.547 7.56311 122.5 7.29292L122.227 6.33082ZM116.506 8.06414L116.814 9.01581C115.869 9.32056 114.929 9.63352 113.992 9.9546L113.668 9.00862C114.61 8.68559 115.556 8.37074 116.506 8.06414ZM110.852 10.0021C109.913 10.3428 108.978 10.6916 108.047 11.0485L108.405 11.9822C109.331 11.6275 110.26 11.2807 111.193 10.9421L110.852 10.0021ZM105.265 12.1441L105.64 13.0713C104.722 13.4424 103.807 13.8215 102.897 14.2085L102.506 13.2883C103.422 12.899 104.341 12.5176 105.265 12.1441ZM99.762 14.4844L100.17 15.3975C99.2648 15.8016 98.3642 16.2136 97.4678 16.6334L97.0437 15.7278C97.9454 15.3055 98.8516 14.891 99.762 14.4844ZM94.3482 17.0198L94.7884 17.9176C93.8978 18.3544 93.0117 18.7988 92.1301 19.2509L91.6738 18.3611C92.5607 17.9063 93.4522 17.4591 94.3482 17.0198ZM89.027 19.7484C88.1477 20.2194 87.2731 20.698 86.4032 21.1841L86.8911 22.0571C87.7557 21.5738 88.6251 21.0981 89.4991 20.6299L89.027 19.7484ZM83.8057 22.6664L84.3091 23.5305C83.4532 24.0291 82.6022 24.5351 81.7562 25.0484L81.2375 24.1935C82.0886 23.6771 82.9447 23.168 83.8057 22.6664ZM78.6934 25.7683L79.2273 26.6138C78.3893 27.143 77.5564 27.6794 76.7285 28.223L76.1796 27.3871C77.0124 26.8403 77.8504 26.3006 78.6934 25.7683ZM73.6957 29.0501L74.2594 29.8761C73.4405 30.4349 72.6268 31.0009 71.8185 31.574L71.2401 30.7582C72.0533 30.1817 72.8719 29.6123 73.6957 29.0501ZM68.8168 32.5087L69.4095 33.3141C68.6113 33.9015 67.8186 34.4959 67.0313 35.0972L66.4244 34.3024C67.2163 33.6976 68.0138 33.0996 68.8168 32.5087ZM64.0639 36.1387L64.685 36.9225C63.9084 37.5377 63.1375 38.1598 62.3723 38.7885L61.7374 38.0158C62.5072 37.3833 63.2828 36.7576 64.0639 36.1387ZM59.4437 39.9348L60.0921 40.6961C59.3378 41.3386 58.5892 41.9878 57.8465 42.6435L57.1847 41.8939C57.9318 41.2343 58.6848 40.5812 59.4437 39.9348ZM54.9611 43.8925L55.6362 44.6303C54.9051 45.2993 54.18 45.9746 53.4609 46.6564L52.7729 45.9307C53.4962 45.2449 54.2256 44.5655 54.9611 43.8925ZM50.6214 48.0072L51.3222 48.7206C50.6154 49.4149 49.9148 50.1155 49.2205 50.8223L48.5071 50.1215C49.2056 49.4105 49.9104 48.7057 50.6214 48.0072ZM46.4306 52.273C45.7448 52.9963 45.0654 53.7257 44.3925 54.4612L45.1302 55.1362C45.7992 54.4052 46.4746 53.68 47.1563 52.961L46.4306 52.273ZM42.3938 56.6848L43.1435 57.3466C42.4878 58.0893 41.8386 58.8378 41.196 59.5922L40.4347 58.9438C41.0811 58.1849 41.7342 57.4319 42.3938 56.6848ZM38.5157 61.2375L39.2884 61.8724C38.6597 62.6376 38.0376 63.4085 37.4224 64.1851L36.6386 63.5641C37.2575 62.7829 37.8833 62.0073 38.5157 61.2375ZM34.8024 65.9245L35.5971 66.5314C34.9958 67.3187 34.4014 68.1114 33.814 68.9096L33.0086 68.3169C33.5996 67.5139 34.1975 66.7164 34.8024 65.9245ZM31.2581 70.7402L32.0739 71.3186C31.5009 72.1269 30.9349 72.9406 30.376 73.7595L29.55 73.1958C30.1122 72.372 30.6816 71.5534 31.2581 70.7402ZM27.887 75.6797L28.7229 76.2286C28.1793 77.0565 27.6429 77.8894 27.1138 78.7274L26.2682 78.1935C26.8005 77.3505 27.3402 76.5125 27.887 75.6797ZM24.6934 80.7376L25.5484 81.2563C25.035 82.1024 24.529 82.9534 24.0304 83.8092L23.1664 83.3058C23.668 82.4448 24.177 81.5887 24.6934 80.7376ZM21.6841 85.9033L22.557 86.3912C22.0738 87.2558 21.598 88.1252 21.1299 88.9993L20.2484 88.5271C20.7193 87.6478 21.1979 86.7732 21.6841 85.9033ZM18.861 91.1739L19.7508 91.6302C19.2988 92.5118 18.8543 93.398 18.4176 94.2886L17.5197 93.8483C17.9591 92.9523 18.4062 92.0608 18.861 91.1739ZM16.2277 96.5438L17.1334 96.968C16.7136 97.8643 16.3016 98.765 15.8974 99.6699L14.9843 99.2621C15.3909 98.3517 15.8054 97.4456 16.2277 96.5438ZM13.7882 102.006L14.7085 102.397C14.3215 103.307 13.9424 104.222 13.5712 105.14L12.6441 104.765C13.0175 103.841 13.3989 102.922 13.7882 102.006ZM11.5484 107.548L12.4822 107.906C12.1274 108.831 11.7807 109.76 11.4421 110.693L10.5021 110.352C10.8427 109.413 11.1916 108.478 11.5484 107.548ZM9.50856 113.168L10.4545 113.492C10.1335 114.429 9.82051 115.369 9.51576 116.314L8.56409 116.007C8.87069 115.057 9.18554 114.11 9.50856 113.168ZM7.67117 118.861L8.62821 119.151C8.34154 120.097 8.06307 121.047 7.79287 122L6.83077 121.727C7.1026 120.768 7.38276 119.813 7.67117 118.861ZM6.04035 124.615L7.0072 124.87C6.75471 125.826 6.51051 126.786 6.27469 127.749L5.3034 127.511C5.54066 126.542 5.78633 125.577 6.04035 124.615ZM4.61852 130.419L5.59392 130.64C5.37538 131.607 5.16526 132.577 4.96364 133.55L3.98443 133.347C4.18727 132.368 4.39866 131.392 4.61852 130.419ZM3.4052 136.275L4.38789 136.461C4.2046 137.433 4.02976 138.408 3.86344 139.386L2.87759 139.218C3.04491 138.234 3.22081 137.253 3.4052 136.275ZM2.40171 142.177L3.3904 142.327C3.24247 143.303 3.10301 144.281 2.97208 145.262L1.98087 145.129C2.11258 144.143 2.25289 143.158 2.40171 142.177ZM1.61159 148.098L2.60501 148.213C2.49149 149.197 2.38656 150.184 2.29029 151.173L1.29499 151.076C1.39184 150.081 1.4974 149.088 1.61159 148.098ZM1.03237 154.047L2.02923 154.127C1.95079 155.114 1.88095 156.103 1.8198 157.095L0.821699 157.033C0.883213 156.036 0.953461 155.04 1.03237 154.047ZM0.663972 160.021L1.66301 160.065C1.61969 161.051 1.58495 162.039 1.55885 163.03L0.559193 163.003C0.585447 162.007 0.620398 161.013 0.663972 160.021ZM0.506594 165.998C0.502201 166.498 0.5 166.999 0.5 167.5C0.5 168.001 0.502202 168.502 0.506596 169.002L1.50656 168.993C1.50219 168.496 1.5 167.998 1.5 167.5C1.5 167.002 1.50219 166.504 1.50656 166.007L0.506594 165.998ZM0.559198 171.997L1.55885 171.971C1.58495 172.961 1.6197 173.949 1.66302 174.935L0.663982 174.979C0.620406 173.987 0.585453 172.993 0.559198 171.997ZM0.821712 177.967L1.81982 177.905C1.88097 178.897 1.9508 179.887 2.02924 180.874L1.03238 180.953C0.953477 179.96 0.883227 178.965 0.821712 177.967ZM1.29501 183.924L2.29031 183.827C2.38658 184.817 2.49152 185.803 2.60503 186.787L1.61162 186.902C1.49742 185.912 1.39186 184.919 1.29501 183.924ZM1.9809 189.871L2.97211 189.738C3.10304 190.719 3.2425 191.698 3.39043 192.673L2.40174 192.823C2.25292 191.842 2.11261 190.858 1.9809 189.871ZM2.87763 195.782L3.86348 195.614C4.02979 196.592 4.20463 197.567 4.38792 198.54L3.40524 198.725C3.22084 197.747 3.04494 196.766 2.87763 195.782ZM3.98447 201.653L4.96367 201.45C5.1653 202.423 5.37542 203.393 5.59396 204.36L4.61856 204.581C4.3987 203.608 4.18731 202.632 3.98447 201.653ZM5.30344 207.49L6.27473 207.252C6.51056 208.214 6.75476 209.174 7.00725 210.13L6.04039 210.385C5.78638 209.423 5.5407 208.458 5.30344 207.49ZM6.83082 213.273C7.10265 214.232 7.38281 215.187 7.67122 216.139L8.62826 215.849C8.34159 214.903 8.06311 213.953 7.79292 213L6.83082 213.273ZM8.56415 218.994L9.51581 218.686C9.82056 219.631 10.1335 220.571 10.4546 221.508L9.50862 221.832C9.18559 220.89 8.87074 219.944 8.56415 218.994ZM10.5021 224.648L11.4421 224.307C11.7807 225.24 12.1275 226.169 12.4822 227.095L11.5485 227.453C11.1916 226.522 10.8428 225.587 10.5021 224.648ZM12.6441 230.235L13.5713 229.86C13.9424 230.778 14.3215 231.693 14.7085 232.603L13.7883 232.994C13.399 232.078 13.0176 231.159 12.6441 230.235ZM14.9844 235.738C15.391 236.648 15.8055 237.555 16.2278 238.456L17.1334 238.032C16.7136 237.136 16.3016 236.235 15.8975 235.33L14.9844 235.738ZM17.5198 241.152L18.4176 240.712C18.8544 241.602 19.2988 242.488 19.7509 243.37L18.8611 243.826C18.4063 242.939 17.9591 242.048 17.5198 241.152ZM20.2484 246.473L21.1299 246.001C21.5981 246.875 22.0738 247.744 22.5571 248.609L21.6841 249.097C21.198 248.227 20.7194 247.352 20.2484 246.473ZM23.1664 251.694L24.0305 251.191C24.5291 252.047 25.0351 252.898 25.5484 253.744L24.6935 254.263C24.1771 253.411 23.668 252.555 23.1664 251.694ZM26.2683 256.807L27.1138 256.273C27.643 257.111 28.1794 257.944 28.723 258.771L27.8871 259.32C27.3403 258.488 26.8006 257.65 26.2683 256.807ZM29.5501 261.804L30.3761 261.241C30.9349 262.06 31.5009 262.873 32.074 263.682L31.2582 264.26C30.6817 263.447 30.1123 262.628 29.5501 261.804ZM33.0087 266.683L33.8141 266.09C34.4015 266.889 34.9959 267.681 35.5972 268.469L34.8024 269.076C34.1976 268.284 33.5996 267.486 33.0087 266.683ZM36.6387 271.436L37.4225 270.815C38.0377 271.592 38.6598 272.363 39.2885 273.128L38.5158 273.763C37.8834 272.993 37.2576 272.217 36.6387 271.436ZM40.4348 276.056L41.1961 275.408C41.8386 276.162 42.4878 276.911 43.1435 277.653L42.3939 278.315C41.7343 277.568 41.0812 276.815 40.4348 276.056ZM44.3925 280.539L45.1303 279.864C45.7993 280.595 46.4746 281.32 47.1564 282.039L46.4307 282.727C45.7449 282.004 45.0655 281.274 44.3925 280.539ZM48.5072 284.879L49.2206 284.178C49.9149 284.885 50.6155 285.585 51.3223 286.28L50.6215 286.993C49.9105 286.294 49.2057 285.59 48.5072 284.879ZM52.773 289.069L53.461 288.344C54.18 289.025 54.9052 289.701 55.6362 290.37L54.9612 291.108C54.2257 290.435 53.4963 289.755 52.773 289.069ZM57.1848 293.106L57.8466 292.357C58.5893 293.012 59.3378 293.661 60.0922 294.304L59.4438 295.065C58.6849 294.419 57.9319 293.766 57.1848 293.106ZM61.7375 296.984L62.3724 296.212C63.1376 296.84 63.9085 297.462 64.6851 298.078L64.0641 298.861C63.2829 298.242 62.5073 297.617 61.7375 296.984ZM66.4245 300.698L67.0314 299.903C67.8187 300.504 68.6114 301.099 69.4096 301.686L68.8169 302.491C68.0139 301.9 67.2164 301.302 66.4245 300.698ZM71.2402 304.242C72.0534 304.818 72.872 305.388 73.6958 305.95L74.2595 305.124C73.4406 304.565 72.6269 303.999 71.8186 303.426L71.2402 304.242ZM76.1798 307.613L76.7286 306.777C77.5565 307.321 78.3894 307.857 79.2274 308.386L78.6935 309.232C77.8505 308.699 77.0126 308.16 76.1798 307.613ZM81.2376 310.807L81.7563 309.952C82.6024 310.465 83.4534 310.971 84.3092 311.47L83.8058 312.334C82.9448 311.832 82.0887 311.323 81.2376 310.807ZM86.4033 313.816L86.8912 312.943C87.7558 313.426 88.6252 313.902 89.4993 314.37L89.0271 315.252C88.1478 314.781 87.2732 314.302 86.4033 313.816ZM91.6739 316.639L92.1302 315.749C93.0118 316.201 93.898 316.646 94.7886 317.082L94.3483 317.98C93.4523 317.541 92.5608 317.094 91.6739 316.639ZM97.0438 319.272L97.468 318.367C98.3643 318.786 99.265 319.198 100.17 319.603L99.7621 320.516C98.8517 320.109 97.9456 319.695 97.0438 319.272ZM102.506 321.712L102.897 320.792C103.807 321.178 104.722 321.558 105.64 321.929L105.265 322.856C104.341 322.482 103.422 322.101 102.506 321.712ZM108.048 323.952L108.406 323.018C109.331 323.373 110.26 323.719 111.193 324.058L110.852 324.998C109.913 324.657 108.978 324.308 108.048 323.952ZM113.668 325.991L113.992 325.045C114.929 325.367 115.869 325.679 116.814 325.984L116.507 326.936C115.557 326.629 114.61 326.314 113.668 325.991ZM119.361 327.829L119.651 326.872C120.597 327.158 121.547 327.437 122.5 327.707L122.227 328.669C121.268 328.397 120.313 328.117 119.361 327.829ZM125.115 329.46L125.37 328.493C126.326 328.745 127.286 328.989 128.249 329.225L128.011 330.197C127.042 329.959 126.077 329.714 125.115 329.46ZM130.919 330.881L131.14 329.906C132.107 330.125 133.077 330.335 134.05 330.536L133.847 331.516C132.868 331.313 131.892 331.101 130.919 330.881ZM136.775 332.095L136.961 331.112C137.933 331.295 138.908 331.47 139.886 331.637L139.718 332.622C138.734 332.455 137.753 332.279 136.775 332.095ZM142.677 333.098L142.827 332.11C143.803 332.258 144.781 332.397 145.762 332.528L145.629 333.519C144.643 333.387 143.658 333.247 142.677 333.098ZM148.598 333.888L148.713 332.895C149.697 333.009 150.684 333.113 151.673 333.21L151.576 334.205C150.581 334.108 149.588 334.003 148.598 333.888ZM154.547 334.468L154.627 333.471C155.614 333.549 156.603 333.619 157.595 333.68L157.533 334.678C156.536 334.617 155.54 334.547 154.547 334.468ZM160.521 334.836L160.565 333.837C161.551 333.88 162.539 333.915 163.53 333.941L163.503 334.941C162.507 334.915 161.513 334.88 160.521 334.836ZM166.498 334.993L166.507 333.993C167.004 333.998 167.502 334 168 334C168.498 334 168.996 333.998 169.493 333.993L169.502 334.993C169.002 334.998 168.501 335 168 335C167.499 335 166.998 334.998 166.498 334.993ZM172.497 334.941L172.471 333.941C173.461 333.915 174.449 333.88 175.435 333.837L175.479 334.836C174.487 334.88 173.493 334.915 172.497 334.941ZM178.467 334.678L178.405 333.68C179.397 333.619 180.387 333.549 181.374 333.471L181.453 334.468C180.46 334.547 179.465 334.617 178.467 334.678ZM184.424 334.205C185.419 334.108 186.412 334.003 187.402 333.888L187.287 332.895C186.303 333.008 185.317 333.113 184.327 333.21L184.424 334.205ZM190.371 333.519C191.358 333.387 192.342 333.247 193.323 333.098L193.173 332.11C192.198 332.258 191.219 332.397 190.238 332.528L190.371 333.519ZM196.282 332.622L196.114 331.637C197.092 331.47 198.067 331.295 199.04 331.112L199.225 332.095C198.247 332.279 197.266 332.455 196.282 332.622ZM202.153 331.516L201.95 330.536C202.923 330.335 203.893 330.125 204.86 329.906L205.081 330.881C204.108 331.101 203.132 331.313 202.153 331.516ZM207.99 330.197L207.752 329.225C208.714 328.989 209.674 328.745 210.63 328.493L210.885 329.46C209.923 329.714 208.958 329.959 207.99 330.197ZM213.773 328.669C214.732 328.397 215.687 328.117 216.639 327.829L216.349 326.872C215.403 327.158 214.453 327.437 213.5 327.707L213.773 328.669ZM219.494 326.936C220.444 326.629 221.39 326.314 222.332 325.991L222.008 325.045C221.071 325.366 220.131 325.679 219.186 325.984L219.494 326.936ZM225.148 324.998L224.807 324.058C225.74 323.719 226.669 323.373 227.595 323.018L227.953 323.952C227.022 324.308 226.087 324.657 225.148 324.998ZM230.735 322.856L230.36 321.929C231.278 321.558 232.193 321.178 233.103 320.791L233.494 321.712C232.578 322.101 231.659 322.482 230.735 322.856ZM236.238 320.516L235.83 319.603C236.735 319.198 237.636 318.786 238.532 318.367L238.956 319.272C238.055 319.694 237.148 320.109 236.238 320.516ZM241.652 317.98L241.212 317.082C242.102 316.646 242.988 316.201 243.87 315.749L244.326 316.639C243.439 317.094 242.548 317.541 241.652 317.98ZM246.973 315.252L246.501 314.37C247.375 313.902 248.244 313.426 249.109 312.943L249.597 313.816C248.727 314.302 247.852 314.781 246.973 315.252ZM252.194 312.334L251.691 311.47C252.547 310.971 253.398 310.465 254.244 309.952L254.763 310.807C253.911 311.323 253.055 311.832 252.194 312.334ZM257.307 309.232L256.773 308.386C257.611 307.857 258.444 307.321 259.271 306.777L259.82 307.613C258.988 308.16 258.15 308.699 257.307 309.232ZM262.304 305.95L261.741 305.124C262.56 304.565 263.373 303.999 264.182 303.426L264.76 304.242C263.947 304.818 263.128 305.388 262.304 305.95ZM267.183 302.491L266.59 301.686C267.389 301.098 268.181 300.504 268.969 299.903L269.576 300.698C268.784 301.302 267.986 301.9 267.183 302.491ZM271.936 298.861L271.315 298.078C272.092 297.462 272.863 296.84 273.628 296.212L274.263 296.984C273.493 297.617 272.717 298.242 271.936 298.861ZM276.556 295.065L275.908 294.304C276.662 293.661 277.411 293.012 278.153 292.356L278.815 293.106C278.068 293.766 277.315 294.419 276.556 295.065ZM281.039 291.107L280.364 290.37C281.095 289.701 281.82 289.025 282.539 288.344L283.227 289.069C282.504 289.755 281.774 290.435 281.039 291.107ZM285.379 286.993L284.678 286.279C285.385 285.585 286.085 284.884 286.78 284.178L287.493 284.879C286.794 285.59 286.09 286.294 285.379 286.993ZM289.569 282.727L288.844 282.039C289.525 281.32 290.201 280.595 290.87 279.864L291.608 280.539C290.935 281.274 290.255 282.004 289.569 282.727ZM293.606 278.315L292.857 277.653C293.512 276.911 294.161 276.162 294.804 275.408L295.565 276.056C294.919 276.815 294.266 277.568 293.606 278.315ZM297.484 273.762L296.712 273.128C297.34 272.362 297.962 271.591 298.578 270.815L299.361 271.436C298.742 272.217 298.117 272.993 297.484 273.762ZM301.198 269.076L300.403 268.469C301.004 267.681 301.599 266.889 302.186 266.09L302.991 266.683C302.4 267.486 301.802 268.284 301.198 269.076ZM304.742 264.26L303.926 263.681C304.499 262.873 305.065 262.059 305.624 261.24L306.45 261.804C305.888 262.628 305.318 263.447 304.742 264.26ZM308.113 259.32L307.277 258.771C307.821 257.944 308.357 257.111 308.886 256.273L309.732 256.806C309.199 257.65 308.66 258.487 308.113 259.32ZM311.307 254.262L310.452 253.744C310.965 252.898 311.471 252.047 311.97 251.191L312.834 251.694C312.332 252.555 311.823 253.411 311.307 254.262ZM314.316 249.097L313.443 248.609C313.926 247.744 314.402 246.875 314.87 246.001L315.752 246.473C315.281 247.352 314.802 248.227 314.316 249.097ZM317.139 243.826L316.249 243.37C316.701 242.488 317.146 241.602 317.582 240.711L318.48 241.152C318.041 242.048 317.594 242.939 317.139 243.826ZM319.772 238.456L318.867 238.032C319.286 237.136 319.698 236.235 320.103 235.33L321.016 235.738C320.609 236.648 320.195 237.554 319.772 238.456ZM322.212 232.994L321.292 232.603C321.678 231.693 322.058 230.778 322.429 229.86L323.356 230.235C322.982 231.159 322.601 232.078 322.212 232.994ZM324.452 227.452L323.518 227.094C323.873 226.169 324.219 225.24 324.558 224.307L325.498 224.648C325.157 225.587 324.808 226.522 324.452 227.452ZM326.491 221.832C326.814 220.89 327.129 219.943 327.436 218.993L326.484 218.686C326.179 219.631 325.867 220.571 325.545 221.508L326.491 221.832ZM328.329 216.139L327.372 215.849C327.658 214.903 327.937 213.953 328.207 213L329.169 213.273C328.897 214.232 328.617 215.187 328.329 216.139ZM329.96 210.385L328.993 210.13C329.245 209.174 329.489 208.214 329.725 207.251L330.697 207.489C330.459 208.458 330.214 209.423 329.96 210.385ZM331.381 204.581L330.406 204.36C330.625 203.393 330.835 202.423 331.036 201.45L332.016 201.653C331.813 202.632 331.601 203.608 331.381 204.581ZM332.595 198.725L331.612 198.539C331.795 197.567 331.97 196.592 332.137 195.614L333.122 195.782C332.955 196.766 332.779 197.747 332.595 198.725ZM333.598 192.823L332.61 192.673C332.758 191.697 332.897 190.719 333.028 189.738L334.019 189.871C333.887 190.857 333.747 191.842 333.598 192.823ZM334.388 186.902L333.395 186.787C333.509 185.803 333.613 184.816 333.71 183.827L334.705 183.924C334.608 184.919 334.503 185.912 334.388 186.902ZM334.968 180.953L333.971 180.873C334.049 179.886 334.119 178.897 334.18 177.905L335.178 177.967C335.117 178.964 335.047 179.96 334.968 180.953ZM335.336 174.979L334.337 174.935C334.38 173.949 334.415 172.961 334.441 171.97L335.441 171.997C335.415 172.993 335.38 173.987 335.336 174.979Z"
        fill="#EAECF0"
      />
      <path
        d="M288 286.5C288 288.433 286.433 290 284.5 290C282.567 290 281 288.433 281 286.5C281 284.567 282.567 283 284.5 283C286.433 283 288 284.567 288 286.5Z"
        fill="#D0D5DD"
      />
    </svg>
  );
};

export default Circle4;