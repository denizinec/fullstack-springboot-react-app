import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean}> = (props) => {

    return(
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
            <div className="mt-3">
                <p>
                    <b>0/5 </b>
                    kitap ayırıldı.
                </p>
                <hr />
                {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 
                ?
                <h4 className="text-success">Stokta</h4>
                :
                <h4 className="text-danger">Bekleme Listesi</h4>
                
                }
                <div className="row">
                    <p className="col-6 lead">
                        <b>{props.book?.copies} </b>
                        kopya içerisinde
                    </p>
                    <p className="col-6 lead">
                        <b>{props.book?.copiesAvailable} </b>
                        stokta
                    </p>
                </div>
            </div>
            <Link to='/#' className="btn btn-success btn-lg" >Giriş Yap</Link>
            <hr />
            <p className="mt-3">
                Bu sayı sipariş tamamlanana kadar değişebilir.
            </p>
            <p>İnceleme yazabilmek için giriş yapın.</p>
            </div>
        </div>
    );



}