import React, { useState } from "react";

const lightPaths = [
  {
    light:
      "m401.18 100.73a17.164 9.8443 50.491 0 1 3.3249 19.506 17.164 9.8443 50.491 0 1-18.515-6.9798 17.164 9.8443 50.491 0 1-3.3249-19.506 17.164 9.8443 50.491 0 1 18.515 6.9797z",
    base: "m373.98 92.734 9.5425-7.8688 6.5841 7.9846-9.5425 7.8688z",
    fill: "#e134eb",
  },
  {
    light:
      "m448.99 103.21a9.8443 17.164 15 0 1-13.951 14.032 9.8443 17.164 15 0 1-5.0664-19.127 9.8443 17.164 15 0 1 13.951-14.032 9.8443 17.164 15 0 1 5.0664 19.127z",
    base: "m439.7 76.42 11.947 3.2012-2.6785 9.9964-11.947-3.2012z",
    fill: "#f00",
  },
  {
    light:
      "m23.077 105.15a9.8443 17.164 18.708 0 1-14.83 13.1 9.8443 17.164 18.708 0 1-3.8186-19.415 9.8443 17.164 18.708 0 1 14.83-13.1 9.8443 17.164 18.708 0 1 3.8186 19.415z",
    base: "m15.544 77.817 11.715 3.9672-3.3195 9.8023-11.715-3.9672z",
    fill: "#0e0",
  },
  {
    light:
      "m74.756 94.461a17.164 9.8443 79.831 0 1-6.6592 18.633 17.164 9.8443 79.831 0 1-12.72-15.157 17.164 9.8443 79.831 0 1 6.6592-18.633 17.164 9.8443 79.831 0 1 12.72 15.157z",
    base: "m54.959 74.163 12.174-2.1837 1.8272 10.187-12.174 2.1837z",
    fill: "#f00",
  },
  {
    light:
      "m118.62 107.05a9.8443 17.164 10.876 0 1-12.906 14.998 9.8443 17.164 10.876 0 1-6.4287-18.714 9.8443 17.164 10.876 0 1 12.906-14.998 9.8443 17.164 10.876 0 1 6.4286 18.714z",
    base: "m107.43 81.001 12.146 2.3338-1.9528 10.163-12.146-2.3338z",
    fill: "#0e0",
  },
  {
    light:
      "m168.32 92.777a17.164 9.8443 58.917 0 1 0.4309 19.782 17.164 9.8443 58.917 0 1-17.292-9.6174 17.164 9.8443 58.917 0 1-0.43091-19.782 17.164 9.8443 58.917 0 1 17.292 9.6174z",
    base: "m142.58 80.883 10.593-6.3856 5.3431 8.8631-10.593 6.3856z",
    fill: "#f00",
  },
  {
    light:
      "m209.88 108.24a9.8443 17.164 15.464 0 1-14.065 13.918 9.8443 17.164 15.464 0 1-4.9111-19.168 9.8443 17.164 15.464 0 1 14.065-13.918 9.8443 17.164 15.464 0 1 4.9112 19.168z",
    base: "m200.82 81.373 11.921 3.2979-2.7595 9.9744-11.921-3.2979z",
    fill: "#0e0",
  },
  {
    light:
      "m260.15 97.327a17.164 9.8443 81.673 0 1-7.2547 18.409 17.164 9.8443 81.673 0 1-12.226-15.558 17.164 9.8443 81.673 0 1 7.2547-18.409 17.164 9.8443 81.673 0 1 12.226 15.558z",
    base: "m241.02 76.402 12.238-1.7912 1.4988 10.24-12.238 1.7912z",
    fill: "#f00",
  },
  {
    light:
      "m302.83 113.44a9.8443 17.164 31.053 0 1-17.287 9.6267 9.8443 17.164 31.053 0 1 0.42026-19.782 9.8443 17.164 31.053 0 1 17.287-9.6267 9.8443 17.164 31.053 0 1-0.42026 19.782z",
    base: "m301.31 85.131 10.596 6.3799-5.3383 8.866-10.596-6.3799z",
    fill: "#0e0",
  },
  {
    light:
      "m355.01 99.879a17.164 9.8443 78.65 0 1-6.2739 18.766 17.164 9.8443 78.65 0 1-13.03-14.891 17.164 9.8443 78.65 0 1 6.2739-18.766 17.164 9.8443 78.65 0 1 13.03 14.891z",
    base: "m334.8 79.993 12.127-2.434 2.0366 10.147-12.127 2.434z",
    fill: "#f00",
  },
];

interface LightProps {
  light: string;
  base: string;
  fill: string;
  setActiveLight: () => void;
}

function Light(props: LightProps) {
  const handleClick = () => {
    props.setActiveLight();
  };

  return (
    <>
      <path
        d={props.light}
        fill={props.fill}
        fillRule="evenodd"
        onClick={handleClick}
      />
      <path d={props.base} />
    </>
  );
}

interface LightsProps {
  selectedColor: string;
  changeBulb: boolean;
  onBulbChange: () => void;
}

function Lights(props: LightsProps) {
  const [activeLight, setActiveLight] = useState(0);

  if (props.changeBulb) {
    lightPaths[activeLight].fill = props.selectedColor;
    props.onBulbChange();
  }

  return (
    <svg
      width="100%"
      height="64.593mm"
      version="1.1"
      viewBox="0 0 449.02 64.593"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-2.79 -59.467)" stroke="#000">
        <g strokeWidth=".26458">
          {lightPaths.map((path, i) => (
            <Light
              key={i}
              setActiveLight={() => setActiveLight(i)}
              light={path.light}
              base={path.base}
              fill={path.fill}
            />
          ))}
        </g>
        <g fill="none" strokeWidth=".26458px">
          <path d="m15.544 77.817 11.715 3.9672" />
          <path d="m21.721 79.528c0.50279-0.91467 1.3622-1.5525 1.9781-2.3737 0.16896-0.22526 0.30498-0.48576 0.47474-0.71211 0.2586-0.34479 0.69686-0.77058 1.0286-1.0286 0.12142-0.0944 0.27554-0.1413 0.39563-0.23737 0.14563-0.11651 0.25128-0.27753 0.39561-0.39562 0.74985-0.61352 1.6832-1.054 2.532-1.5034 0.49077-0.25983 0.90884-0.58508 1.4242-0.79123 0.65141-0.26057 1.3145-0.57005 1.9781-0.79123 1.1546-0.38487 2.3436-0.6701 3.4814-1.1077 0.33027-0.12703 0.61379-0.36284 0.94948-0.47474 0.27974-0.0932 0.58792-0.0735 0.87036-0.15825 0.68826-0.20648 1.3774-0.40639 2.0572-0.63299 0.40038-0.13345 0.8567-0.15551 1.266-0.23737 0.73771-0.14754 1.468-0.3813 2.2155-0.47474 0.10468-0.0131 0.21414 0.0256 0.31649 0 0.11443-0.0286 0.20206-0.12964 0.31649-0.15824 0.20629-0.0516 0.42296-0.046 0.63299-0.0791 0.9744-0.15386 1.9793-0.36206 2.9276-0.63299 0.36241-0.10355 0.59408-0.26572 0.94948-0.31649 0.72097-0.103 1.7586-0.0471 2.4528 0.0791 0.18891 0.0344 0.36514 0.12286 0.55387 0.15824 1.1524 0.21609 0.27473-0.011 1.266 0.0791 0.36237 0.0329 0.75134 0.1661 1.1077 0.23738 0.58101 0.1162 1.1791 0.20417 1.7407 0.31649 0.4689 0.0938 0.94877 0.0903 1.4242 0.15825 0.24313 0.0347 0.47106 0.18915 0.71211 0.23737 0.75822 0.15164 1.5456 0.38934 2.2155 0.79123 0.064 0.0384 0.0915 0.12489 0.15824 0.15825 0.0973 0.0486 0.21924 0.0305 0.3165 0.0791 0.25037 0.12518 0.71008 0.67884 0.94948 0.87035 0.0921 0.0737 0.23309 0.0748 0.31649 0.15825 0.0417 0.0417 0.0374 0.11655 0.0791 0.15825 0.0509 0.0509 0.26562 0.1865 0.31649 0.23737 0.17104 0.17104 0.4336 0.43255 0.55386 0.63298 0.0271 0.0452-0.0236 0.11107 0 0.15825 0.0264 0.0528 0.13188 0.0264 0.15825 0.0791 0.0859 0.17174 0.0869 0.37559 0.15825 0.55386 0.031 0.0774 0.1381 0.1784 0.0791 0.23738-0.21403 0.21403-0.14822-0.65305-0.0791-0.79124 0.17689-0.35378 0.59987-0.59988 0.87035-0.87036 0.0933-0.0933 0.13725-0.23067 0.23738-0.31649 0.17505-0.15005 0.44786-0.24752 0.63298-0.39562 0.14563-0.1165 0.2357-0.29966 0.39562-0.39561 0.26201-0.15721 0.59838-0.24021 0.87036-0.39562 0.66661-0.38092 1.3332-0.75016 2.0572-1.0286 0.55457-0.2133 1.2292-0.45543 1.8198-0.55387 0.27475-0.0458 0.54984-0.0778 0.79124-0.15824 0.1251-0.0417 0.26455 0.0145 0.39561 0 0.79392-0.0882 1.5765-0.14358 2.3737-0.23738 1.0143-0.11932 1.999-0.40271 3.0067-0.55386 1.9423-0.29135 3.8927-0.23737 5.8551-0.23737 1.2728 0 2.5303 5e-3 3.7979 0.0791 0.17808 0.0105 0.78104-0.0825 1.0286 0 0.0559 0.0187 0.0997 0.0718 0.15825 0.0791 0.86797 0.1085 1.8394-0.0544 2.6902 0.15825 0.33494 0.0837 0.69877 0.0758 1.0286 0.15824 0.8044 0.2011 1.6285 0.35698 2.4528 0.47474 0.15666 0.0224 0.31865-0.026 0.47474 0 0.92232 0.15372 1.8466 0.38085 2.7693 0.55387 0.41694 0.0782 0.85684 0.11463 1.266 0.23737 1.1832 0.35494 2.4111 0.72708 3.5606 1.1868 0.21903 0.0876 0.41485 0.22667 0.63298 0.31649 0.9134 0.3761 1.8642 0.62635 2.7693 1.0286 0.40481 0.17991 0.85693 0.232 1.266 0.39561 0.4962 0.19849 0.87748 0.55743 1.3451 0.79124 0.55012 0.27506 1.1807 0.39048 1.6616 0.79123 0.1175 0.17625 0.15543 0.26677 0.31649 0.39562 0.22463 0.17971 0.33112 0.17287 0.55387 0.39561 0.83642 0.83643-0.43236-0.22995 0.55386 0.63299 0.29639 0.25935 0.61071 0.48832 0.87036 0.79124 0.23085 0.26933 0.4306 0.56603 0.71211 0.79123 0.25572 0.20458 0.62357 0.26149 0.79123 0.39562 0.0743 0.0594 0.091 0.17013 0.15825 0.23737 0.15617 0.15617 0.73329 0.55949 0.79123 0.79123 0.0658 0.26315 0.0898 0.51758 0.15825 0.79123 0.0994 0.39743-0.0804 0.86372 0 1.266 0.17926 0.89629 0.15824 1.8445 0.15824 2.7693" />
          <path d="m113.66 82.377c1.6924-0.73555 2.3938-2.4224 3.5606-3.7188 0.22594-0.25106 0.5524-0.39416 0.79123-0.63299 0.74549-0.74549 1.342-1.7498 2.2154-2.3737 0.57463-0.41044 1.2883-0.74131 1.899-1.1077 0.75147-0.45089 1.4283-1.0306 2.2154-1.4242 0.40311-0.20156 0.87467-0.25114 1.266-0.47474 0.76574-0.43757 1.5542-0.90176 2.3737-1.266 1.4352-0.63789 3.2231-0.83877 4.5892-1.4242 0.17482-0.0749 0.29431-0.25635 0.47474-0.31649 0.30026-0.10008 0.6373 0.052 0.94949 0 1.2384-0.2064 2.5099-0.4596 3.7979-0.3165 0.78015 0.0867 1.4612 0.44444 2.2154 0.63299 1.1324 0.2831 2.2857 0.74722 3.3232 1.266 0.57293 0.28646 1.033 0.77803 1.5825 1.1077 0.20229 0.12137 0.49145 0.12778 0.63299 0.3165 0.10008 0.13344 0.0582 0.34129 0.15825 0.47474 0.31548 0.42065 1.1566 0.54806 1.4242 0.94948 0.51747 0.77621 0.77709 1.5203 1.5825 2.0572 0.0396 0.0264 0.63298 1.264 0.63298 0.79123 0-0.25185-0.13187 0.0264-0.31649-0.15825-0.10421-0.1042-0.0534-1.2642 0-1.4242 0.10793-0.32379 0.49752-0.61082 0.63299-0.94948 0.26871-0.67179 0.59297-1.5424 1.1077-2.0572 0.13449-0.13448 0.35299-0.17038 0.47474-0.31649 0.15102-0.18122 0.16548-0.45177 0.3165-0.63299 0.12175-0.1461 0.32623-0.19768 0.47474-0.31649 0.44955-0.35964 0.66319-0.88495 1.1077-1.266 0.69364-0.59454 1.504-1.0291 2.2155-1.5825 0.23554-0.1832 0.38471-0.46747 0.63299-0.63299 0.23635-0.15757 0.55035-0.16594 0.79123-0.3165 0.18978-0.11861 0.28496-0.35612 0.47474-0.47473 0.49007-0.30629 0.93416-0.3267 1.4242-0.63299 1.2322-0.77012 2.623-1.4647 3.9562-2.0572 1.1604-0.51576 2.4495-0.711 3.6397-1.1077 0.44759-0.14919 0.81407-0.49741 1.266-0.63299 0.91633-0.27489 1.9106-0.43202 2.8484-0.63298 0.70154-0.15033 1.3513-0.50464 2.0572-0.63299 0.82974-0.15086 1.9272-0.11909 2.8484-0.31649 3.419-0.73263 6.9416-1.1077 10.444-1.1077 1.4606 0 3.1638-0.2305 4.5892 0.15825 0.45517 0.12414 0.82792 0.45776 1.266 0.63299 1.1264 0.45055 2.2082 0.94635 3.3232 1.4242 0.30665 0.13141 0.6511 0.16729 0.94949 0.31649 0.2359 0.11795 0.40243 0.34665 0.63299 0.47474 0.24831 0.13795 0.55035 0.16594 0.79123 0.31649 1.3777 0.86107-0.30248 0.0745 0.79124 0.94949 0.13025 0.1042 0.31649 0.10549 0.47474 0.15824 0.10549 0.15825 0.182 0.34026 0.31649 0.47474 0.32086 0.32086 0.7632 0.49593 1.1077 0.79124 0.5643 0.48369 1.0116 1.1067 1.5825 1.5825 0.32054 0.26711 0.90674 0.54749 1.1077 0.94948 0.0472 0.0944-0.0472 0.22214 0 0.3165 0.24967 0.49933 0.45205 0.11286 0.63299 0.47474 0.46077 0.92154 1.1696 1.2577 1.7407 2.0572 0.13712 0.19197 0.16548 0.45177 0.3165 0.63299 0.12175 0.14611 0.35593 0.16798 0.47474 0.3165 0.17745 0.22181 0.17034 0.54765 0.31649 0.79123 0.33949 0.56582 0.82096 1.4146 0.94948 2.0572 0.031 0.15517-0.0435 0.32258 0 0.47474 0.0648 0.22682 0.23366 0.41211 0.31649 0.63298 0.44906 1.1975 0.3165 2.5448 0.3165 3.7979 0 0.89881-0.14467 1.5146-0.3165 2.3737-0.0788 0.39386 0.12603 0.88792 0 1.266-0.0334 0.10009-0.25797 0.0878-0.31649 0-0.72041-1.0806 0.67678-2.2702 1.266-3.0067 1.494-1.8675-0.69526 0.8055 0.47473-0.94949 0.12414-0.1862 0.33494-0.29998 0.47475-0.47473 0.29688-0.37111 0.40635-0.86937 0.63298-1.266 1.9908-3.4839 4.7926-7.0846 8.3871-9.0201 2.6408-1.4219 5.4879-2.1794 8.3871-2.8484 0.37418-0.0864 0.72708-0.26574 1.1077-0.31649 1.2326-0.16435 3.0104-0.15825 4.2727-0.15825 0.99693 0 2.1747-0.16504 3.1649 0 1.5414 0.2569 2.8681 1.0384 4.2727 1.7407 0.57008 0.28504 1.1361 0.58968 1.7407 0.79123 0.10008 0.0334 0.22871-0.0585 0.31649 0 0.0981 0.0654 0.0748 0.23309 0.15825 0.31649 0.13827 0.13828 0.66763 0.2547 0.79123 0.3165 0.15329 0.0767 0.59708 0.56827 0.79123 0.63299 0.10009 0.0334 0.22214-0.0472 0.3165 0 0.87623 0.43811 3.384 4.0779 3.7979 4.9056 0.0943 0.18869 0.1739 0.64863 0.31649 0.79123 0.0834 0.0834 0.23309 0.0748 0.3165 0.15824 0.0373 0.0373-0.0528 0.15825 0 0.15825 0.17814 0 2.3318-1.8071 2.532-2.0572 0.14736-0.1842 0.16297-0.45388 0.31649-0.63298 0.24299-0.2835 0.80448-0.54864 1.1077-0.79124 0.29125-0.233 0.50803-0.54849 0.79123-0.79123 0.52843-0.45295 1.2533-0.77854 1.7407-1.266 0.13448-0.13448 0.16798-0.35593 0.31649-0.47473 0.13025-0.10421 0.32554-0.0837 0.47474-0.15825 0.8474-0.42371 1.6537-0.75644 2.532-1.1077 0.61104-0.24441 1.0966-0.6302 1.7407-0.79123 1.1744-0.29361 2.2868-0.50025 3.4814-0.63299 1.6559-0.18399 3.4358-0.7821 5.0639-1.1077 1.3309-0.26618 2.7637-0.0995 4.1144-0.15825 7.1281-0.50914-2.4415 0.12152 4.2727-0.15824 1.722-0.0718 3.492-0.31554 5.2221-0.15825 1.0012 0.091 2.002 0.3834 3.0067 0.47474 0.26266 0.0239 0.54102-0.0834 0.79123 0 0.1119 0.0373 0.0571 0.25581 0.15825 0.3165 0.14727 0.0884 1.3431 0.28269 1.4242 0.31649 0.39256 0.16357 0.71811 0.46253 1.1077 0.63299 0.45846 0.20057 0.96426 0.27761 1.4242 0.47474 0.34962 0.14983 0.58862 0.5127 0.94948 0.63298 0.10009 0.0334 0.2321-0.0633 0.31649 0 0.15216 0.11412 0.1721 0.35097 0.3165 0.47474 0.55142 0.33086 0.94474 0.52994 1.4242 0.94949 0.81376 0.71204 1.4982 1.1278 2.3737 1.7407 0.2767 0.19369 0.49472 0.47125 0.79123 0.63299 0.61844 0.33732 1.4369 0.43679 2.0572 0.79123 0.1295 0.074 1.085 0.61027 1.266 0.79123 0.0834 0.0834 0.0639 0.24573 0.15824 0.3165 0.26689 0.20016 0.67801 0.12258 0.94948 0.31649 1.1839 0.84561 1.8377 2.1083 2.532 3.3232 0.35741 0.62546 0.88608 1.1329 1.266 1.7407 0.22539 0.36063 0.48366 0.70953 0.63298 1.1077 0.27086 0.72228 0.0236 0.68028 0.3165 1.266 0.46236 0.92472 0.20957 0.0214 0.47474 0.94948 0.0376 0.13167 0.21301 0.93526 0.31649 1.1077 0.0768 0.12793 0.26932 0.17495 0.3165 0.31649 0.0667 0.20017-0.0414 0.42609 0 0.63299 0.0146 0.0731 0.13465 0.0875 0.15824 0.15824 0.0489 0.14685 0.24772 3.213 0.15825 3.4814-0.19555 0.58664-0.15825-0.19289-0.15825 0.3165" />
          <path d="m306.33 87.836c2.4394-0.56152 1.7406-0.6856 3.0067-2.6902 0.74867-1.1854 1.6085-2.1754 2.3737-3.3232 0.50141-0.75211 0.10009-0.57483 0.79124-1.266 0.13448-0.13448 0.31649-0.21099 0.47474-0.31649 0.21099-0.21099 0.43649-0.40842 0.63298-0.63299 0.17368-0.19848 0.28825-0.44649 0.47474-0.63298 0.51927-0.51926 1.2215-0.90496 1.7407-1.4242 0.13448-0.13449 0.17039-0.35299 0.31649-0.47474 0.18123-0.15102 0.43671-0.18564 0.63299-0.3165 0.7868-0.52453 1.5749-1.1032 2.3737-1.5825 0.41523-0.24914 0.82249-0.28468 1.266-0.47475 1.7215-0.73779 3.4827-1.3452 5.3804-1.5825 1.0718-0.13398 2.243 0 3.3232 0 0.88797 0 1.8607-0.11826 2.6902 0.15824 0.30026 0.10009 0.63299 0 0.94948 0 1.4114 0 2.9241-0.13302 4.2727 0.3165 0.14154 0.0472 0.17495 0.26931 0.31649 0.31649 0.35794 0.11932 0.73615 0.13071 1.1077 0.31649 0.29903 0.14952 1.9158 1.1415 2.0572 1.4242 0.15224 0.30448 0.50364 0.87766 0.79123 1.1077 0.13025 0.10421 0.33595 0.0657 0.47474 0.15825 0.0878 0.0585-0.0746 0.2419 0 0.31649 0.0528 0.0528 0.42199 0.1055 0.47474 0.15825 0.0359 0.0359 0.79124 0.89008 0.79124 0.94948 0 0.11795-0.26375-0.0528-0.3165-0.15825-0.20562-0.41125-0.31649-1.1317-0.31649-1.5825 0-0.26298-0.0949-0.88636 0-1.1077 0.21537-0.50255 1.3169-2.1082 1.7407-2.532 1.1382-1.1382 2.7859-1.0801 4.2727-1.266 2.5339-0.31674 5.5028-0.48909 7.9124 0.47474 1.0714 0.42856 1.9748 1.2248 3.0067 1.7407 0.70533 0.35266 1.5262 0.55561 2.2155 0.94948 0.93 0.53143 1.6781 1.3866 2.532 1.899 0.14303 0.0858 0.34129 0.0582 0.47474 0.15825 0.38548 0.28911-0.0478 0.29261 0.31649 0.47474 0.1492 0.0746 0.34449 0.054 0.47474 0.15825 0.14851 0.11881 0.18201 0.34025 0.31649 0.47474 0.29132 0.29131 0.63299 0.52749 0.94948 0.79123 1.0922 0.9102 2.3911 1.5974 3.4814 2.532 0.42423 0.36362 0.81958 0.77293 1.266 1.1077 0.29905 0.22428 0.67624 0.35974 0.94948 0.63298 0.21133 0.21134 0.3989 0.61567 0.63299 0.79124 0.235 0.17625 0.888 0.44988 1.1077 0.63298 0.25948 0.21623 0.33089 0.64019 0.63299 0.79124 0.31058 0.15529 0.80929 0.41981 1.1077 0.63299 1.0007 0.71477 0.0553 0.38768 0.79123 0.63298 0.25459 0.0849 0.25079 0.48369 0.47474 0.63299 0.29916 0.19944 1.0619 0.42887 1.266 0.63299 0.11795 0.11795 0.0403 0.35679 0.15824 0.47474 0.0746 0.0746 0.3165 0.1055 0.3165 0 0-0.0528-0.12095 0.0373-0.15825 0-0.11795-0.11795-0.12553-0.31118-0.15825-0.47474-0.0798-0.39919-0.0576-1.179 0-1.5825 0.14676-1.0273 0.99317-2.3399 1.5825-3.1649 0.13008-0.1821 0.3506-0.28853 0.47474-0.47474 0.19628-0.29442 0.27182-0.65959 0.47474-0.94948 0.17112-0.24445 0.44979-0.39745 0.63299-0.63298 0.18883-0.24279 0.28591-0.54845 0.47474-0.79124 0.52341-0.67296 1.8754-2.0336 2.532-2.6902 1.2825-1.2825 4.4685-3.182 6.1716-3.9562 0.40724-0.35807 0.96426-0.27762 1.4242-0.47474 0.34963-0.14984 0.58862-0.5127 0.94948-0.63299 0.15013-0.05 0.32122 0.0384 0.47474 0 0.71211-0.17803 0.78477-0.3772 1.4242-0.63299 0.93195-0.37278 1.9184-0.48121 2.8484-0.79123 0.3357-0.1119 0.61379-0.36284 0.94948-0.47474 0.3044-0.10146 0.64281-0.0639 0.94949-0.15825 0.38395-0.11814 0.71956-0.37123 1.1077-0.47474 0.41092-0.10958 0.8534-0.0551 1.266-0.15825 1.1872-0.2968 2.3126-0.93203 3.4814-1.266 0.35864-0.10247 0.74428-0.0744 1.1077-0.15825 1.0227-0.236 1.9712-0.74239 3.0067-0.94948 0.83404-0.1668 1.6943-0.16868 2.532-0.31649 1.5206-0.26833 3.0458-0.65092 4.5892-0.79123 0.99368-0.0903 2.011 0.0664 3.0067 0 1.7991-0.11995 3.572-0.15825 5.3804-0.15825 1.1883 0 2.4614-0.12403 3.6397 0 0.53498 0.0563 1.0478 0.25709 1.5825 0.31649 0.41941 0.0466 0.84523-0.0324 1.266 0 0.84367 0.0649 1.6019 0.40144 2.3737 0.63299 1.1806 0.35418 3.1776 0.56017 4.2727 1.1077 0.13344 0.0667 0.18856 0.23973 0.31649 0.31649 0.14304 0.0858 0.34449 0.054 0.47474 0.15825 0.14851 0.11881 0.17039 0.35298 0.3165 0.47474 0.51455 0.42879 0.69267 0.24542 1.266 0.47474 0.20197 0.0808 0.18762 0.34587 0.31649 0.47474 1.1979 1.1979-0.40475-0.94113 1.1077 0.94948 0.0329 0.0412-0.0373 0.12095 0 0.15825 0.58373 0.58373 0.0639-0.37896 0.63299 0.47474 0.15332 0.22998 0.27704 0.68588 0.47474 0.94948 0.17153 0.22871 0.49642 0.49642 0.63299 0.63298 0.48424 0.48425 0.8218 1.8936 0.94948 2.532 0.0895 0.44756 0.52196 0.82187 0.63298 1.266 0.17946 0.71782 0.3165 1.4487 0.3165 2.2154" />
          <path d="m21.721 79.528c-0.54294-1.8744-0.59068-3.8452-1.0277-5.7389-0.26455-1.1464-0.9093-5.0915-1.7904-6.2663-0.67618-0.90157-1.8478-0.61593-2.6855-0.89518-1.2115-0.40385-2.3873-0.94498-3.5807-1.3428-2.5648-0.85494-5.8622 0.44759-8.5042 0.44759-0.65859 0-0.68418 0.44759-1.3428 0.44759-0.37845 0-1.5575-0.23289-1.7904 0-0.1055 0.1055 0 0.29839 0 0.44759" />
          <path d="m445.9 79.291c-1.1845-4.7736-1.4092-11.381 2.6874-14.453 0.33758-0.2532 0.66108-0.54406 0.89519-0.89518 0.0827-0.12414-0.13346-0.38087 0-0.44759 0.26688-0.13344 0.61812 0.11082 0.89516 0 0.71742-0.28696 1.9283-1.6011 2.6856-1.7904 3.1746 0 0.26218 0.31649 1.7904-0.44759 1.307-0.65353 4.2849 0 5.8187 0" />
        </g>
      </g>
    </svg>
  );
}

export default Lights;
