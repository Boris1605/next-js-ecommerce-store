// 'use client';

// import { useEffect, useState } from 'react';
// import { parseJson } from '../util/json';
// import styles from './CookieBanner.module.scss';

// export default function CookieBanner() {
//   const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

//   useEffect(() => {
//     const localStoreValue = getLocalStorage('cookiePolicy');
//     if (localStoreValue) {
//       setAreCookiesAccepted(parseJson(localStoreValue));
//     } else {
//       setAreCookiesAccepted(false);
//     }
//   }, []);

//   return (
//     <div
//       className={`${styles.cookieBanner} ${
//         areCookiesAccepted ? styles.closed : styles.open
//       }`}
//     >
//       <div>Do you accept the use of cookies?</div>
//       <button className={styles.button}
//         onClick={() => {
//           setLocalStorage('cookiePolicy', JSON.stringify(true));
//           setAreCookiesAccepted(true);
//         }}
//       >
//         Accept
//       </button>
//     </div>
//   );
// }
