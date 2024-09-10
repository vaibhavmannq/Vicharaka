// // import Image from 'next/image';
// import BookList from './components/BookList';
// import Banner from './components/Banner';
// import { Suspense } from 'react';
// import Loading from '@/components/Loading';

// export default async function Home() {
//     return(
//         <>
//         <Banner/>
//         <Suspense fallback={<Loading />}>
//             <BookList/>
//         </Suspense>
//         </>
//     );
// };


import React from 'react';
import BookList from './components/BookList';
import Banner from './components/Banner';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <Layout>
            <Banner />
            <Suspense fallback={<Loading />}>
                <BookList />
            </Suspense>
        </Layout>
    );
}
