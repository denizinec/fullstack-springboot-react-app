import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
    return(
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 
            text-white d-flex justify-content-center">
                <div>
                    <h1 className="display-5 fw-bold">Yeni maceranı bul!</h1>
                    <p className="col-md-8 fs-4">Size nasıl yardımcı olabiliriz?</p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link type="button" className="btn main-color btn-lg text-white " to="/search">
                        En çok satanlar
                    </Link>
                    <Link type="button" className="btn main-color btn-lg text-white " to="/search">
                        En iyi yazarlar
                    </Link>
                    </div>
                </div>
            </div>
            
        </div>
        

    );
}