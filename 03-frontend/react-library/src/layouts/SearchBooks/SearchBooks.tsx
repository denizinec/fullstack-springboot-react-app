import { useState, useEffect } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";
import { Pagination } from "../utils/Pagination";

export const SearchBooks = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [categorySelection, setCategorySelection] = useState("Kategori");


    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:8080/api/books";

            let url: string = "";

            if (searchUrl === "") {
                url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`)
                url = baseUrl + searchWithPage;
            }

            const response = await fetch(url);

            if (!response.ok) {

                throw new Error('Something went wrong!');

            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.books;

            setTotalAmountOfBooks(responseJson.page.totalElements);
            setTotalPages(responseJson.page.totalPages);

            const loadedBooks: BookModel[] = [];

            for (const key in responseData) {

                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img,
                })
            }
            setBooks(loadedBooks);
            setIsLoading(false);
        };

        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className="container mt-5 loading">
                <p>{httpError}</p>
            </div>
        )

    }

    const searchHandleChange = () => {
        setCurrentPage(1);
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=<pageNumber>&size=${booksPerPage}`)
        }
        setCategorySelection("Bütün Kitaplar");
    }

    const handleKeyPress = (event : any) => {
        if (event.keyCode === 13 || event.which === 13) {
            searchHandleChange();
        }
      }

    const categoryField = (value:string) => {
        setCurrentPage(1);
        if(value.toLowerCase() === 'be' || 
        value.toLowerCase() === 'fe' ||
        value.toLowerCase() === 'data' ||
        value.toLowerCase() === 'devops')
        {
            setCategorySelection(value);
            setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${booksPerPage}`)
        } else {
            setCategorySelection("Bütün Kitaplar");
            setSearchUrl(`?page=<pageNumber>&size=${booksPerPage}`)
        }
    }


    const indexOfLastBook: number = currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
        booksPerPage * currentPage : totalAmountOfBooks;

    {/* 
            function getTurkishAblativeSuffixes(index: number): string {
                const lastDigit = index % 10;
                const lastTwoDigits = index % 100;
        
                if (lastTwoDigits > 10 && lastTwoDigits <= 20) {
        
                    switch (lastTwoDigits) {
                        case 11:
                        case 12:
                        case 17:
                        case 18:
                        case 20:
                            return "'den";
                        case 13:
                        case 14:
                        case 15:
                            return "'ten";
                        case 16:
                        case 19:
                            return "'dan";
                    }
        
                }
        
                switch (lastDigit) {
                    case 0:
                    case 6:
                    case 9:
                        return "'dan";
                    case 1:
                    case 2:
                    case 7:
                    case 8:
                        return "'den";
                    case 3:
                    case 4:
                    case 5:
                        return "'ten";
                    default:
                        return "'dan";
                }
            }
            function getTurkishDativeSuffixes(index: number): string {
                const lastDigit = index % 10;
                const lastTwoDigits = index % 100;
        
                if (lastTwoDigits > 10 && lastTwoDigits <= 99) {
                    let lastTwoDigits = index % 10;
                    switch (lastTwoDigits) {
                        case 11:
                        case 13:
                        case 14:
                        case 15:
                        case 18:
                            return "'e";
                        case 12:
                        case 17:
                        case 20:
                            return "'ye";
                        case 16:
                            return "'ya"
                        case 19:
                            return "'a";
                    }
        
                }
                switch (lastDigit) {
                    case 0:
                    case 6:
                    case 9:
                        return "'a";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 7:
                    case 8:
                        return "'e";
        
                    default:
                        return "'e";
                }
            }
        
            const suffixForFirstBook = getTurkishAblativeSuffixes(indexOfFirstBook);
            const suffixForLastItem = getTurkishDativeSuffixes(lastItem);    
        */}


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (

        <div>
            <div className="container">
                <div>
                    <div className="row mt-5 ">
                        <div className="col-6">
                            <div className="d-flex ">
                                <input className="form-control me-2 " type="search"
                                    placeholder="Ara" aria-labelledby="Search"
                                    onKeyDown={handleKeyPress} onChange={e => setSearch(e.target.value)} />
                                <button onClick={() => searchHandleChange()} className="btn btn-outline-success" >Ara</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dropdown ">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {categorySelection}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li onClick={() => categoryField("Bütün Kitaplar")} >
                                        <a className="dropdown-item" href="#">Bütün Kitaplar</a>
                                    </li>
                                    <li onClick={() => categoryField("FE")}>
                                        <a className="dropdown-item" href="#">Front-end</a>
                                    </li>
                                    <li onClick={() => categoryField("BE")}>
                                        <a className="dropdown-item" href="#">Back-end</a>
                                    </li>
                                    <li onClick={() => categoryField("Data")}>
                                        <a className="dropdown-item" href="#">Data</a>
                                    </li>
                                    <li onClick={() => categoryField("DevOps")}>
                                        <a className="dropdown-item" href="#">DevOps</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {totalAmountOfBooks > 0 ?
                        <>
                            <div className="mt-3">
                                <h5>Sonuç sayısı: ({totalAmountOfBooks})</h5>
                            </div>
                            <p>{totalAmountOfBooks} üründe {indexOfFirstBook} ile {lastItem} arasında olan kitaplar:</p>
                            {books.map(book => (
                                <SearchBook book={book} key={book.id} />))}
                        </>
                        :

                        <div className="m-5">
                            <h3>
                                Aradığınızı bulamıyor musunuz?
                            </h3>
                            <a type="button" className="btn main-color btn-md px-4 me-md-2 fw-bold text-white" href="#">
                                Kütüphane Hizmetleri
                            </a>
                        </div>
                    }
                    {totalPages > 1 &&
                        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                    }
                </div>
            </div>
        </div>


    );
}