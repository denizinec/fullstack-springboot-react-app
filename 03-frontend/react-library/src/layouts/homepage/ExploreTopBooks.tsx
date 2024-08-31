export const ExploreTopBooks = () => {
    return(
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 
            text-white d-flex justify-content-center">
                <div>
                    <h1 className="display-5 fw-bold">Yeni maceranı bul!</h1>
                    <p className="col-md-8 fs-4">Size nasıl yardımcı olabiliriz?</p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <a type="button" className="btn main-color btn-lg text-white " href="">
                        En çok satanlar
                    </a>
                    <a type="button" className="btn main-color btn-lg text-white " href="">
                        En iyi yazarlar
                    </a>
                    </div>
                </div>
            </div>
            
        </div>
        

    );
}