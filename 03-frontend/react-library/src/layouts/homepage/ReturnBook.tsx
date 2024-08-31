import React from 'react'

export const ReturnBook = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                        alt="book"
                                        width='151'
                                        height='233' />
                                    <h6 className="mt-6">Kitap</h6>
                                    <p>Yazar</p>
                                    <a className="btn main-color text-white" href="">Ayırt</a>
                                </div>
                            </div>

    );

}