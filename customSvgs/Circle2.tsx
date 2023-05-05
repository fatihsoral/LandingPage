import React from "react";
type Props = {
  className?: string;
};
const Circle2 = ({ className }: Props) => {
  return (
    <svg
      width="270"
      height="271"
      viewBox="0 0 270 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M269.737 137.019L268.737 137.008C268.742 136.506 268.745 136.003 268.745 135.5C268.745 134.997 268.742 134.494 268.737 133.992L269.737 133.981C269.742 134.487 269.745 134.993 269.745 135.5C269.745 136.007 269.742 136.513 269.737 137.019ZM269.67 130.956L268.671 130.989C268.637 129.988 268.593 128.991 268.538 127.996L269.537 127.941C269.592 128.943 269.637 129.948 269.67 130.956ZM269.336 124.918L268.339 124.995C268.261 123.998 268.173 123.004 268.074 122.013L269.069 121.913C269.169 122.911 269.258 123.913 269.336 124.918ZM268.733 118.901L267.74 119.023C267.618 118.029 267.485 117.039 267.342 116.052L268.331 115.908C268.476 116.902 268.61 117.9 268.733 118.901ZM267.861 112.918L266.875 113.085C266.709 112.097 266.531 111.112 266.343 110.132L267.325 109.943C267.514 110.931 267.693 111.923 267.861 112.918ZM266.721 106.981L265.744 107.192C265.533 106.212 265.311 105.236 265.078 104.264L266.051 104.031C266.285 105.01 266.509 105.994 266.721 106.981ZM265.315 101.101L264.348 101.356C264.092 100.386 263.826 99.4203 263.55 98.4592L264.511 98.1828C264.789 99.1512 265.057 100.124 265.315 101.101ZM263.644 95.2906L262.689 95.5887C262.39 94.6312 262.081 93.6784 261.761 92.7303L262.708 92.4107C263.031 93.3659 263.342 94.3259 263.644 95.2906ZM261.711 89.5595L260.771 89.9004C260.429 88.958 260.077 88.0206 259.715 87.0882L260.647 86.7261C261.012 87.6655 261.366 88.61 261.711 89.5595ZM259.521 83.9215L258.597 84.3045C258.213 83.3792 257.82 82.4591 257.416 81.5443L258.331 81.1405C258.737 82.0621 259.134 82.9892 259.521 83.9215ZM257.079 78.3885L256.173 78.8129C255.748 77.9062 255.313 77.0051 254.869 76.1097L255.765 75.6651C256.212 76.5672 256.65 77.4751 257.079 78.3885ZM254.389 72.9716C253.921 72.0787 253.443 71.1917 252.955 70.3107L252.08 70.7952C252.564 71.6696 253.039 72.5501 253.504 73.4363L254.389 72.9716ZM251.459 67.6814C250.951 66.8106 250.434 65.9461 249.907 65.088L249.055 65.6113C249.578 66.4631 250.091 67.3212 250.596 68.1854L251.459 67.6814ZM248.295 62.5281L247.455 63.0704C246.912 62.2298 246.36 61.3956 245.8 60.5681L246.627 60.0071C247.192 60.8409 247.748 61.6812 248.295 62.5281ZM244.903 57.522L244.088 58.1013C243.508 57.2858 242.919 56.4771 242.322 55.6753L243.124 55.0778C243.726 55.8856 244.319 56.7004 244.903 57.522ZM241.29 52.6726L240.501 53.2878C239.886 52.499 239.261 51.7172 238.629 50.9426L239.403 50.31C240.041 51.0903 240.669 51.8779 241.29 52.6726ZM237.464 47.9895L236.704 48.6393C236.053 47.8787 235.395 47.1255 234.728 46.3798L235.473 45.7132C236.145 46.4644 236.809 47.2232 237.464 47.9895ZM233.433 43.4817L232.702 44.1648C232.019 43.434 231.327 42.7108 230.628 41.9955L231.343 41.2963C232.047 42.017 232.744 42.7455 233.433 43.4817ZM229.204 39.1582L228.505 39.8731C227.79 39.1736 227.067 38.482 226.336 37.7985L227.019 37.0681C227.755 37.7567 228.484 38.4534 229.204 39.1582ZM224.788 35.0274L224.121 35.7728C223.375 35.106 222.622 34.4473 221.862 33.7971L222.511 33.037C223.278 33.6921 224.036 34.3556 224.788 35.0274ZM220.191 31.0977L219.558 31.8721C218.784 31.2393 218.002 30.6151 217.213 29.9995L217.828 29.2111C218.623 29.8313 219.41 30.4602 220.191 31.0977ZM215.423 27.377L214.826 28.1789C214.024 27.5816 213.215 26.993 212.399 26.4133L212.979 25.5982C213.8 26.1822 214.615 26.7752 215.423 27.377ZM210.494 23.8733L209.933 24.7012C209.105 24.1404 208.271 23.5887 207.43 23.0461L207.973 22.2059C208.82 22.7525 209.66 23.3084 210.494 23.8733ZM205.413 20.5941L204.89 21.4463C204.038 20.9232 203.18 20.4094 202.315 19.905L202.819 19.0413C203.69 19.5495 204.555 20.0671 205.413 20.5941ZM200.19 17.5462L199.706 18.421C198.831 17.9367 197.951 17.4619 197.065 16.9968L197.529 16.1113C198.422 16.58 199.309 17.0583 200.19 17.5462ZM194.836 14.7362L194.391 15.6319C193.496 15.1874 192.595 14.7527 191.688 14.3278L192.112 13.4223C193.026 13.8503 193.934 14.2884 194.836 14.7362ZM189.36 12.1703L188.957 13.0851C188.042 12.6813 187.122 12.2875 186.196 11.9038L186.579 10.98C187.512 11.3667 188.439 11.7634 189.36 12.1703ZM183.775 9.85396L183.413 10.7861C182.48 10.4239 181.543 10.0719 180.6 9.73012L180.941 8.79003C181.891 9.13435 182.835 9.48904 183.775 9.85396ZM178.09 7.79237L177.771 8.73992C176.823 8.42015 175.87 8.11072 174.912 7.81176L175.21 6.85721C176.175 7.15842 177.135 7.47018 178.09 7.79237ZM172.318 5.98986L172.042 6.9509C171.081 6.67447 170.115 6.40853 169.145 6.15321L169.4 5.18616C170.377 5.44341 171.35 5.71135 172.318 5.98986ZM166.47 4.45012L166.237 5.42267C165.265 5.19013 164.289 4.96821 163.309 4.75702L163.52 3.77946C164.507 3.99223 165.491 4.21583 166.47 4.45012ZM160.558 3.17602L160.369 4.15809C159.389 3.96983 158.404 3.79228 157.416 3.62556L157.583 2.6395C158.578 2.80747 159.57 2.98635 160.558 3.17602ZM154.593 2.16962L154.449 3.15918C153.462 3.01542 152.472 2.88243 151.478 2.76035L151.6 1.76781C152.601 1.89081 153.599 2.02479 154.593 2.16962ZM148.588 1.43208L148.488 2.4271C147.497 2.32788 146.503 2.23947 145.506 2.162L145.583 1.165C146.588 1.24305 147.589 1.33212 148.588 1.43208ZM142.56 0.964031L142.505 1.9625C141.51 1.90749 140.512 1.86335 139.512 1.83019L139.545 0.830739C140.553 0.864139 141.558 0.908609 142.56 0.964031ZM136.52 0.763938L136.509 1.76388C136.007 1.75833 135.504 1.75555 135.001 1.75555C134.498 1.75555 133.995 1.75833 133.493 1.76388L133.482 0.763937C133.988 0.758353 134.494 0.755554 135.001 0.755554C135.508 0.755554 136.014 0.758354 136.52 0.763938ZM130.457 0.830735L130.49 1.83019C129.489 1.86334 128.492 1.90749 127.497 1.9625L127.441 0.964025C128.444 0.908604 129.449 0.864135 130.457 0.830735ZM124.418 1.16499L124.496 2.16199C123.499 2.23946 122.505 2.32787 121.514 2.42709L121.414 1.43207C122.412 1.33211 123.414 1.24304 124.418 1.16499ZM118.402 1.7678L118.524 2.76034C117.53 2.88242 116.54 3.01541 115.553 3.15917L115.409 2.16961C116.403 2.02477 117.401 1.8908 118.402 1.7678ZM112.419 2.63949L112.586 3.62555C111.597 3.79227 110.613 3.96982 109.633 4.15808L109.444 3.17601C110.432 2.98634 111.424 2.80745 112.419 2.63949ZM106.482 3.77944L106.692 4.75701C105.712 4.96819 104.736 5.19012 103.764 5.42266L103.532 4.45011C104.511 4.21582 105.494 3.99222 106.482 3.77944ZM100.602 5.18615L100.856 6.1532C99.8867 6.40852 98.9211 6.67446 97.9601 6.95088L97.6836 5.98984C98.652 5.71134 99.6248 5.44339 100.602 5.18615ZM94.7914 6.85719L95.0895 7.81174C94.132 8.1107 93.1792 8.42013 92.2311 8.7399L91.9115 7.79235C92.8667 7.47016 93.8267 7.1584 94.7914 6.85719ZM89.0603 8.79001L89.4012 9.7301C88.4588 10.0718 87.5214 10.4239 86.589 10.7861L86.2269 9.85394C87.1663 9.48902 88.1108 9.13433 89.0603 8.79001ZM83.4223 10.98L83.8053 11.9038C82.88 12.2875 81.9599 12.6813 81.0451 13.0851L80.6413 12.1702C81.5629 11.7634 82.49 11.3666 83.4223 10.98ZM77.8893 13.4223L78.3137 14.3278C77.4071 14.7526 76.506 15.1874 75.6105 15.6319L75.1659 14.7362C76.068 14.2884 76.9759 13.8503 77.8893 13.4223ZM72.4724 16.1113L72.9371 16.9968C72.0509 17.4619 71.1705 17.9367 70.296 18.421L69.8115 17.5462C70.6925 17.0583 71.5795 16.5799 72.4724 16.1113ZM67.1822 19.0413L67.6862 19.905C66.822 20.4094 65.9639 20.9232 65.1121 21.4463L64.5888 20.5941C65.447 20.0671 66.3115 19.5495 67.1822 19.0413ZM62.0289 22.2059L62.5712 23.0461C61.7306 23.5887 60.8964 24.1404 60.0689 24.7012L59.5079 23.8733C60.3417 23.3084 61.182 22.7525 62.0289 22.2059ZM57.0228 25.5982C56.2012 26.1822 55.3864 26.7752 54.5786 27.377L55.1761 28.1789C55.9779 27.5816 56.7866 26.993 57.6021 26.4133L57.0228 25.5982ZM52.1734 29.2111L52.7886 29.9995C51.9998 30.6151 51.218 31.2393 50.4435 31.8721L49.8108 31.0977C50.5911 30.4602 51.3787 29.8313 52.1734 29.2111ZM47.4903 33.037L48.1401 33.7971C47.3795 34.4474 46.6263 35.106 45.8806 35.7728L45.214 35.0274C45.9652 34.3556 46.724 33.6921 47.4903 33.037ZM42.9825 37.0681L43.6656 37.7985C42.9348 38.482 42.2116 39.1736 41.4963 39.8731L40.7971 39.1582C41.5178 38.4534 42.2463 37.7567 42.9825 37.0681ZM38.659 41.2963L39.3739 41.9955C38.6744 42.7108 37.9828 43.434 37.2993 44.1648L36.5689 43.4817C37.2575 42.7455 37.9542 42.017 38.659 41.2963ZM34.5282 45.7132L35.2736 46.3798C34.6068 47.1255 33.9482 47.8787 33.2979 48.6393L32.5378 47.9895C33.1929 47.2232 33.8564 46.4644 34.5282 45.7132ZM30.5985 50.31L31.3729 50.9427C30.7401 51.7172 30.1159 52.499 29.5003 53.2879L28.7119 52.6726C29.3321 51.8779 29.961 51.0903 30.5985 50.31ZM26.8778 55.0778L27.6797 55.6753C27.0824 56.4771 26.4938 57.2858 25.9141 58.1014L25.099 57.522C25.683 56.7004 26.276 55.8856 26.8778 55.0778ZM23.3741 60.0071L24.202 60.5681C23.6412 61.3956 23.0895 62.2298 22.5469 63.0704L21.7067 62.5281C22.2533 61.6812 22.8092 60.8409 23.3741 60.0071ZM20.0949 65.088L20.9471 65.6113C20.424 66.4631 19.9102 67.3212 19.4058 68.1854L18.5422 67.6814C19.0503 66.8106 19.5679 65.9461 20.0949 65.088ZM17.047 70.3107L17.9218 70.7952C17.4375 71.6696 16.9627 72.55 16.4976 73.4363L15.6122 72.9716C16.0808 72.0787 16.5591 71.1917 17.047 70.3107ZM14.237 75.6651L15.1327 76.1097C14.6882 77.0051 14.2535 77.9062 13.8286 78.8129L12.9231 78.3885C13.3512 77.4751 13.7892 76.5672 14.237 75.6651ZM11.6711 81.1405L12.5859 81.5443C12.1821 82.459 11.7883 83.3791 11.4046 84.3045L10.4809 83.9214C10.8675 82.9891 11.2643 82.0621 11.6711 81.1405ZM9.35476 86.726L10.2869 87.0881C9.92471 88.0205 9.57267 88.958 9.23093 89.9004L8.29083 89.5594C8.63515 88.61 8.98984 87.6654 9.35476 86.726ZM7.29317 92.4106L8.24073 92.7302C7.92096 93.6783 7.61152 94.6311 7.31256 95.5886L6.35801 95.2906C6.65923 94.3259 6.97099 93.3658 7.29317 92.4106ZM5.49067 98.1828C5.21216 99.1511 4.94422 100.124 4.68697 101.101L5.65402 101.356C5.90934 100.386 6.17528 99.4203 6.45171 98.4592L5.49067 98.1828ZM3.95093 104.031L4.92348 104.264C4.69094 105.235 4.46902 106.212 4.25783 107.192L3.28027 106.981C3.49304 105.994 3.71664 105.01 3.95093 104.031ZM2.67683 109.943L3.6589 110.132C3.47064 111.112 3.29309 112.097 3.12637 113.085L2.14031 112.918C2.30828 111.923 2.48716 110.931 2.67683 109.943ZM1.67043 115.908L2.65999 116.052C2.51623 117.039 2.38324 118.029 2.26116 119.023L1.26862 118.901C1.39162 117.9 1.5256 116.902 1.67043 115.908ZM0.932889 121.913L1.92791 122.013C1.82869 123.004 1.74028 123.998 1.66281 124.995L0.665811 124.918C0.743859 123.913 0.832925 122.911 0.932889 121.913ZM0.464839 127.941L1.46331 127.996C1.4083 128.991 1.36415 129.988 1.331 130.989L0.331547 130.956C0.364948 129.948 0.409417 128.943 0.464839 127.941ZM0.264747 133.981C0.259162 134.487 0.256363 134.993 0.256363 135.5C0.256363 136.007 0.259162 136.513 0.264746 137.019L1.26468 137.008C1.25914 136.506 1.25636 136.003 1.25636 135.5C1.25636 134.997 1.25914 134.494 1.26469 133.992L0.264747 133.981ZM0.331544 140.044L1.331 140.011C1.36415 141.012 1.40829 142.009 1.46331 143.004L0.464834 143.059C0.409412 142.057 0.364943 141.052 0.331544 140.044ZM0.665803 146.082L1.6628 146.005C1.74027 147.002 1.82868 147.996 1.9279 148.987L0.932879 149.087C0.832916 148.089 0.743851 147.087 0.665803 146.082ZM1.26861 152.099L2.26115 151.977C2.38323 152.971 2.51622 153.961 2.65998 154.948L1.67042 155.092C1.52558 154.098 1.39161 153.1 1.26861 152.099ZM2.1403 158.082L3.12636 157.915C3.29307 158.903 3.47063 159.888 3.65888 160.868L2.67682 161.057C2.48715 160.069 2.30826 159.077 2.1403 158.082ZM3.28025 164.019L4.25781 163.808C4.469 164.788 4.69093 165.764 4.92347 166.736L3.95091 166.969C3.71663 165.99 3.49303 165.006 3.28025 164.019ZM4.68696 169.899L5.65401 169.644C5.90933 170.614 6.17527 171.58 6.45169 172.541L5.49066 172.817C5.21215 171.849 4.9442 170.876 4.68696 169.899ZM6.358 175.709L7.31255 175.411C7.61151 176.369 7.92094 177.322 8.24071 178.27L7.29316 178.589C6.97097 177.634 6.65921 176.674 6.358 175.709ZM8.29082 181.441L9.23091 181.1C9.57266 182.042 9.92469 182.979 10.2869 183.912L9.35475 184.274C8.98983 183.335 8.63514 182.39 8.29082 181.441ZM10.4808 187.079L11.4046 186.695C11.7883 187.621 12.1821 188.541 12.5859 189.456L11.671 189.859C11.2642 188.938 10.8675 188.011 10.4808 187.079ZM12.9231 192.611C13.3511 193.525 13.7892 194.433 14.237 195.335L15.1327 194.89C14.6882 193.995 14.2535 193.094 13.8286 192.187L12.9231 192.611ZM15.6121 198.028L16.4976 197.564C16.9627 198.45 17.4375 199.33 17.9218 200.205L17.047 200.689C16.5591 199.808 16.0808 198.921 15.6121 198.028ZM18.5422 203.319L19.4058 202.815C19.9102 203.679 20.424 204.537 20.9471 205.389L20.0949 205.912C19.5679 205.054 19.0503 204.189 18.5422 203.319ZM21.7067 208.472L22.5469 207.93C23.0895 208.77 23.6412 209.604 24.202 210.432L23.3741 210.993C22.8092 210.159 22.2533 209.319 21.7067 208.472ZM25.099 213.478L25.9141 212.899C26.4938 213.714 27.0824 214.523 27.6798 215.325L26.8778 215.922C26.276 215.114 25.683 214.3 25.099 213.478ZM28.7119 218.327L29.5003 217.712C30.1159 218.501 30.7401 219.283 31.3729 220.057L30.5985 220.69C29.961 219.91 29.3321 219.122 28.7119 218.327ZM32.5378 223.011L33.2979 222.361C33.9482 223.121 34.6068 223.875 35.2736 224.62L34.5282 225.287C33.8564 224.536 33.1929 223.777 32.5378 223.011ZM36.569 227.518L37.2993 226.835C37.9828 227.566 38.6744 228.289 39.3739 229.005L38.659 229.704C37.9542 228.983 37.2575 228.255 36.569 227.518ZM40.7971 231.842L41.4963 231.127C42.2116 231.826 42.9348 232.518 43.6656 233.202L42.9825 233.932C42.2463 233.243 41.5178 232.547 40.7971 231.842ZM45.214 235.973L45.8806 235.227C46.6263 235.894 47.3795 236.553 48.1401 237.203L47.4903 237.963C46.7241 237.308 45.9652 236.644 45.214 235.973ZM49.8108 239.902L50.4435 239.128C51.218 239.761 51.9998 240.385 52.7887 241.001L52.1734 241.789C51.3787 241.169 50.5911 240.54 49.8108 239.902ZM54.5786 243.623L55.1761 242.821C55.9779 243.418 56.7866 244.007 57.6022 244.587L57.0228 245.402C56.2012 244.818 55.3864 244.225 54.5786 243.623ZM59.5079 247.127L60.0689 246.299C60.8965 246.86 61.7306 247.411 62.5712 247.954L62.029 248.794C61.182 248.247 60.3417 247.692 59.5079 247.127ZM64.5888 250.406L65.1121 249.554C65.9639 250.077 66.822 250.591 67.6862 251.095L67.1822 251.959C66.3115 251.451 65.4469 250.933 64.5888 250.406ZM69.8115 253.454L70.296 252.579C71.1704 253.063 72.0508 253.538 72.9371 254.003L72.4724 254.889C71.5795 254.42 70.6925 253.942 69.8115 253.454ZM75.1659 256.264L75.6105 255.368C76.5059 255.813 77.407 256.247 78.3137 256.672L77.8893 257.578C76.9759 257.15 76.068 256.712 75.1659 256.264ZM80.6413 258.83L81.0451 257.915C81.9598 258.319 82.8799 258.712 83.8053 259.096L83.4222 260.02C82.4899 259.633 81.5629 259.237 80.6413 258.83ZM86.2269 261.146L86.589 260.214C87.5213 260.576 88.4588 260.928 89.4012 261.27L89.0602 262.21C88.1108 261.866 87.1663 261.511 86.2269 261.146ZM91.9114 263.208L92.231 262.26C93.1791 262.58 94.1319 262.889 95.0894 263.188L94.7914 264.143C93.8267 263.842 92.8667 263.53 91.9114 263.208ZM97.6836 265.01L97.96 264.049C98.9211 264.326 99.8866 264.591 100.856 264.847L100.602 265.814C99.6247 265.557 98.6519 265.289 97.6836 265.01ZM103.532 266.55L103.764 265.577C104.736 265.81 105.712 266.032 106.692 266.243L106.482 267.221C105.494 267.008 104.511 266.784 103.532 266.55ZM109.444 267.824L109.633 266.842C110.613 267.03 111.597 267.208 112.585 267.374L112.419 268.361C111.424 268.193 110.432 268.014 109.444 267.824ZM115.409 268.83L115.553 267.841C116.54 267.985 117.53 268.118 118.524 268.24L118.402 269.232C117.401 269.109 116.403 268.975 115.409 268.83ZM121.414 269.568L121.513 268.573C122.504 268.672 123.499 268.761 124.496 268.838L124.418 269.835C123.414 269.757 122.412 269.668 121.414 269.568ZM127.441 270.036L127.497 269.038C128.491 269.092 129.489 269.137 130.49 269.17L130.457 270.169C129.449 270.136 128.444 270.091 127.441 270.036ZM133.482 270.236L133.493 269.236C133.995 269.242 134.498 269.244 135.001 269.244C135.504 269.244 136.007 269.242 136.508 269.236L136.52 270.236C136.014 270.242 135.508 270.244 135.001 270.244C134.494 270.244 133.988 270.242 133.482 270.236ZM139.545 270.169L139.512 269.17C140.512 269.137 141.51 269.093 142.505 269.038L142.56 270.036C141.558 270.091 140.553 270.136 139.545 270.169ZM145.583 269.835L145.506 268.838C146.503 268.761 147.497 268.672 148.488 268.573L148.588 269.568C147.589 269.668 146.588 269.757 145.583 269.835ZM151.6 269.232L151.478 268.24C152.471 268.118 153.462 267.985 154.449 267.841L154.593 268.83C153.599 268.975 152.601 269.109 151.6 269.232ZM157.582 268.361L157.416 267.374C158.404 267.208 159.388 267.03 160.369 266.842L160.558 267.824C159.57 268.014 158.578 268.193 157.582 268.361ZM163.52 267.221L163.309 266.243C164.289 266.032 165.265 265.81 166.237 265.577L166.47 266.55C165.491 266.784 164.507 267.008 163.52 267.221ZM169.4 265.814L169.145 264.847C170.115 264.591 171.08 264.326 172.042 264.049L172.318 265.01C171.35 265.289 170.377 265.557 169.4 265.814ZM175.21 264.143L174.912 263.188C175.87 262.889 176.822 262.58 177.771 262.26L178.09 263.208C177.135 263.53 176.175 263.842 175.21 264.143ZM180.941 262.21L180.6 261.27C181.543 260.928 182.48 260.576 183.413 260.214L183.775 261.146C182.835 261.511 181.891 261.866 180.941 262.21ZM186.579 260.02L186.196 259.096C187.122 258.713 188.042 258.319 188.956 257.915L189.36 258.83C188.439 259.237 187.512 259.633 186.579 260.02ZM192.112 257.578L191.688 256.672C192.595 256.247 193.496 255.813 194.391 255.368L194.836 256.264C193.934 256.712 193.026 257.15 192.112 257.578ZM197.529 254.889L197.064 254.003C197.951 253.538 198.831 253.063 199.706 252.579L200.19 253.454C199.309 253.942 198.422 254.42 197.529 254.889ZM202.819 251.959L202.315 251.095C203.18 250.591 204.038 250.077 204.89 249.554L205.413 250.406C204.555 250.933 203.69 251.451 202.819 251.959ZM207.973 248.794L207.43 247.954C208.271 247.411 209.105 246.86 209.933 246.299L210.494 247.127C209.66 247.692 208.82 248.247 207.973 248.794ZM212.979 245.402L212.399 244.587C213.215 244.007 214.024 243.418 214.826 242.821L215.423 243.623C214.615 244.225 213.8 244.818 212.979 245.402ZM217.828 241.789L217.213 241.001C218.002 240.385 218.784 239.761 219.558 239.128L220.191 239.902C219.411 240.54 218.623 241.169 217.828 241.789ZM222.511 237.963L221.862 237.203C222.622 236.553 223.375 235.894 224.121 235.227L224.788 235.973C224.036 236.644 223.278 237.308 222.511 237.963ZM227.019 233.932L226.336 233.201C227.067 232.518 227.79 231.826 228.505 231.127L229.204 231.842C228.484 232.547 227.755 233.243 227.019 233.932ZM231.343 229.704L230.628 229.004C231.327 228.289 232.019 227.566 232.702 226.835L233.433 227.518C232.744 228.255 232.047 228.983 231.343 229.704ZM235.473 225.287C236.145 224.536 236.809 223.777 237.464 223.01L236.704 222.361C236.053 223.121 235.395 223.875 234.728 224.62L235.473 225.287ZM239.403 220.69L238.629 220.057C239.261 219.283 239.886 218.501 240.501 217.712L241.29 218.327C240.67 219.122 240.041 219.91 239.403 220.69ZM243.124 215.922L242.322 215.325C242.919 214.523 243.508 213.714 244.088 212.899L244.903 213.478C244.319 214.3 243.726 215.114 243.124 215.922ZM246.627 210.993L245.8 210.432C246.36 209.604 246.912 208.77 247.455 207.93L248.295 208.472C247.748 209.319 247.192 210.159 246.627 210.993ZM249.907 205.912L249.055 205.389C249.578 204.537 250.091 203.679 250.596 202.815L251.459 203.319C250.951 204.189 250.434 205.054 249.907 205.912ZM252.955 200.689L252.08 200.205C252.564 199.33 253.039 198.45 253.504 197.564L254.389 198.028C253.921 198.921 253.443 199.808 252.955 200.689ZM255.765 195.335L254.869 194.89C255.313 193.995 255.748 193.094 256.173 192.187L257.079 192.611C256.65 193.525 256.212 194.433 255.765 195.335ZM258.331 189.86L257.416 189.456C257.819 188.541 258.213 187.621 258.597 186.696L259.521 187.079C259.134 188.011 258.737 188.938 258.331 189.86ZM260.647 184.274L259.715 183.912C260.077 182.979 260.429 182.042 260.771 181.1L261.711 181.441C261.366 182.39 261.012 183.335 260.647 184.274ZM262.708 178.589L261.761 178.27C262.081 177.322 262.39 176.369 262.689 175.411L263.644 175.709C263.342 176.674 263.031 177.634 262.708 178.589ZM264.511 172.817L263.55 172.541C263.826 171.58 264.092 170.614 264.348 169.644L265.315 169.899C265.057 170.876 264.789 171.849 264.511 172.817ZM266.051 166.969L265.078 166.736C265.311 165.765 265.533 164.788 265.744 163.808L266.721 164.019C266.509 165.006 266.285 165.99 266.051 166.969ZM267.325 161.057L266.343 160.868C266.531 159.888 266.709 158.903 266.875 157.915L267.861 158.082C267.693 159.077 267.514 160.069 267.325 161.057ZM268.331 155.092L267.342 154.948C267.485 153.961 267.618 152.971 267.74 151.977L268.733 152.099C268.61 153.1 268.476 154.098 268.331 155.092ZM269.069 149.087L268.074 148.987C268.173 147.996 268.261 147.002 268.339 146.005L269.336 146.082C269.258 147.087 269.169 148.089 269.069 149.087ZM269.537 143.059L268.538 143.004C268.593 142.009 268.637 141.012 268.671 140.011L269.67 140.044C269.637 141.052 269.592 142.057 269.537 143.059Z"
        fill="#EAECF0"
      />
      <path
        d="M19 75.5C19 77.9853 16.9853 80 14.5 80C12.0147 80 10 77.9853 10 75.5C10 73.0147 12.0147 71 14.5 71C16.9853 71 19 73.0147 19 75.5Z"
        fill="#F9FAFB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 78.5C16.1569 78.5 17.5 77.1569 17.5 75.5C17.5 73.8431 16.1569 72.5 14.5 72.5C12.8431 72.5 11.5 73.8431 11.5 75.5C11.5 77.1569 12.8431 78.5 14.5 78.5ZM14.5 80C16.9853 80 19 77.9853 19 75.5C19 73.0147 16.9853 71 14.5 71C12.0147 71 10 73.0147 10 75.5C10 77.9853 12.0147 80 14.5 80Z"
        fill="#D0D5DD"
      />
    </svg>
  );
};

export default Circle2;