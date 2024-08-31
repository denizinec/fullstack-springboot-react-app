export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center 
                align-items-center">
                        <div className="ml-2">
                            <h1>Ne okuyordunuz?</h1>
                            <p className="lead">
                                Kitapçım ekibi ne okuduğunuzu bilmek ister.
                                İster yeni bir beceri öğrenmek, ister bir beceride kendinizi geliştirmek olsun,
                                sizin için en iyi içeriği sağlamak istiyoruz!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Hep yeni kitaplar getiriyoruz!</h1>
                            <p className="lead">
                                Koleksiyonumuz sürekli değiştiği için günlük olarak kontrol etmeye çalışın!
                                Kitapçım okurları için mümkün olan en doğru kitap seçimini sağlamak için durmadan çalışıyoruz.
                                Kitap seçimimizde titiz davranıyoruz ve kitaplarımız her zaman
                                bizim için en yüksek önceliğimiz olacak!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>
            
            {/* Mobile */}

            <div className="d-lg-none">
                <div className="container ">
                    <div className="col-image-left">
                        <div className="mt-2">
                        <h1>Ne okuyordunuz?</h1>
                            <p className="lead">
                                Kitapçım ekibi ne okuduğunuzu bilmek ister.
                                İster yeni bir beceri öğrenmek, ister bir beceride kendinizi geliştirmek olsun,
                                sizin için en iyi içeriği sağlamak istiyoruz!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="">Sign up</a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                        <h1>Hep yeni kitaplar getiriyoruz!</h1>
                            <p className="lead">
                                Koleksiyonumuz sürekli değiştiği için günlük olarak kontrol etmeye çalışın!
                                Kitapçım okurları için mümkün olan en doğru kitap seçimini sağlamak için durmadan çalışıyoruz.
                                Kitap seçimimizde titiz davranıyoruz ve kitaplarımız her zaman
                                bizim için en yüksek önceliğimiz olacak!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}