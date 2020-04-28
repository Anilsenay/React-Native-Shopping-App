import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteButton = props => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M469.585 80.732c-55.679-52.984-146.306-52.984-202.003-.012l-11.581 11-11.569-10.995c-55.703-52.979-146.318-52.973-202.021 0C15.061 106.739 0 141.244 0 177.874c0 36.642 15.061 71.141 42.415 97.166l201.219 191.033A17.886 17.886 0 00256 471.007c4.449 0 8.899-1.647 12.366-4.94L469.585 275.04C496.933 249.021 512 214.517 512 177.88c0-36.636-15.067-71.135-42.415-97.148zm-24.756 168.259L256 428.269 67.177 248.997C47.026 229.835 35.93 204.576 35.93 177.88s11.096-51.955 31.247-71.117c21.019-20.001 48.625-29.995 76.237-29.995 27.618 0 55.236 10.006 76.255 30.007l23.953 22.75c6.934 6.593 17.815 6.593 24.75 0l23.959-22.762c42.044-39.996 110.448-39.996 152.492 0 20.145 19.163 31.247 44.421 31.247 71.117s-11.102 51.949-31.241 71.111z" />
    </Svg>
  );
};

const HomeButton = props => {
  return (
    <Svg height="511pt" viewBox="0 1 511 511.999" width="511pt" {...props}>
      <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
    </Svg>
  );
};

const BagButton = props => {
  return (
    <Svg height="512pt" viewBox="0 -31 512 512" width="512pt" {...props}>
      <Path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0014.422-10.879l60-210a15.003 15.003 0 00-2.445-13.152A15.006 15.006 0 00497 60H130.367l-10.722-48.254A15.003 15.003 0 00105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zm0 0M150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0M362 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
    </Svg>
  );
};

const AccountButton = props => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
    </Svg>
  );
};
export {FavoriteButton, HomeButton, BagButton, AccountButton};
