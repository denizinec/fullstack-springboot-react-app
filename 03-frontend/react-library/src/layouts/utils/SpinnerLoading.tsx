export const SpinnerLoading = () => {
    return(
        <div className="container m-5 loading"
        style={{height: 550}}>
            <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">
                        Yükleniyor...
                    </span>
            </div>
            
        </div>
    );
}