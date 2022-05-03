import { FC } from 'react';
import { Global, css } from '@emotion/react'

import roboto_v29_latin_300_eot from './roboto-v29-latin-300.eot';
import roboto_v29_latin_300_svg from './roboto-v29-latin-300.svg';
import roboto_v29_latin_300_ttf from './roboto-v29-latin-300.ttf';
import roboto_v29_latin_300_woff from './roboto-v29-latin-300.woff';
import roboto_v29_latin_300_woff2 from './roboto-v29-latin-300.woff2';
import roboto_v29_latin_500_eot from './roboto-v29-latin-500.eot';
import roboto_v29_latin_500_svg from './roboto-v29-latin-500.svg';
import roboto_v29_latin_500_ttf from './roboto-v29-latin-500.ttf';
import roboto_v29_latin_500_woff from './roboto-v29-latin-500.woff';
import roboto_v29_latin_500_woff2 from './roboto-v29-latin-500.woff2';
import roboto_v29_latin_700_eot from './roboto-v29-latin-700.eot';
import roboto_v29_latin_700_svg from './roboto-v29-latin-700.svg';
import roboto_v29_latin_700_ttf from './roboto-v29-latin-700.ttf';
import roboto_v29_latin_700_woff from './roboto-v29-latin-700.woff';
import roboto_v29_latin_700_woff2 from './roboto-v29-latin-700.woff2';
import roboto_v29_latin_regular_eot from './roboto-v29-latin-regular.eot';
import roboto_v29_latin_regular_svg from './roboto-v29-latin-regular.svg';
import roboto_v29_latin_regular_ttf from './roboto-v29-latin-regular.ttf';
import roboto_v29_latin_regular_woff from './roboto-v29-latin-regular.woff';
import roboto_v29_latin_regular_woff2 from './roboto-v29-latin-regular.woff2';


const Fonts: FC = () => {
  return (
    <Global
      styles={css
`/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('${roboto_v29_latin_300_eot}'); /* IE9 Compat Modes */
  src: local(''),
       url('${roboto_v29_latin_300_eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${roboto_v29_latin_300_woff2}') format('woff2'), /* Super Modern Browsers */
       url('${roboto_v29_latin_300_woff}') format('woff'), /* Modern Browsers */
       url('${roboto_v29_latin_300_ttf}') format('truetype'), /* Safari, Android, iOS */
       url('${roboto_v29_latin_300_svg}#Roboto') format('svg'); /* Legacy iOS */
}

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('${roboto_v29_latin_regular_eot}'); /* IE9 Compat Modes */
  src: local(''),
       url('${roboto_v29_latin_regular_eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${roboto_v29_latin_regular_woff2}') format('woff2'), /* Super Modern Browsers */
       url('${roboto_v29_latin_regular_woff}') format('woff'), /* Modern Browsers */
       url('${roboto_v29_latin_regular_ttf}') format('truetype'), /* Safari, Android, iOS */
       url('${roboto_v29_latin_regular_svg}#Roboto') format('svg'); /* Legacy iOS */
}

/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('${roboto_v29_latin_500_eot}'); /* IE9 Compat Modes */
  src: local(''),
       url('${roboto_v29_latin_500_eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${roboto_v29_latin_500_woff2}') format('woff2'), /* Super Modern Browsers */
       url('${roboto_v29_latin_500_woff}') format('woff'), /* Modern Browsers */
       url('${roboto_v29_latin_500_ttf}') format('truetype'), /* Safari, Android, iOS */
       url('${roboto_v29_latin_500_svg}#Roboto') format('svg'); /* Legacy iOS */
}

/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('${roboto_v29_latin_700_eot}'); /* IE9 Compat Modes */
  src: local(''),
       url('${roboto_v29_latin_700_eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('${roboto_v29_latin_700_woff2}') format('woff2'), /* Super Modern Browsers */
       url('${roboto_v29_latin_700_woff}') format('woff'), /* Modern Browsers */
       url('${roboto_v29_latin_700_ttf}') format('truetype'), /* Safari, Android, iOS */
       url('${roboto_v29_latin_700_svg}#Roboto') format('svg'); /* Legacy iOS */
}`
      }
    />
  );
};

export default Fonts;
