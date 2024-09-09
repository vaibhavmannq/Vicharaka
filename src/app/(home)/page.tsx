import Image from 'next/image';
import BookList from './components/BookList';
import Banner from './components/Banner';

export default async function Home() {
    // data fetching
    const response = await fetch(`${process.env.BACKEND_URL}/books`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const books = await response.json();
    console.log('books',books);

    return(
        <>
        <Banner/>
        <BookList books={books}/>
        </>
    );
};

