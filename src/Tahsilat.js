import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";




function Tahsilat() {
  const [allCollections, setAllCollections] = useState([]);
  useEffect(() => {
    const getAllCollectionInfo = async () => {
      let response = await axios.get(
        'https://private-5abaf2-tahsilatapi.apiary-mock.com/Tahsilat'
      );

      console.log("getAllPaymentInfo" + response.data.CollectionList);

      setAllCollections(response.data.CollectionList);

    }

    // call the function
    getAllCollectionInfo().catch(console.error);

  }, [])
  return (
  
   <>

  <Header />


  {/* BEGIN PAGE CONTENT */}
  <div className="page-content">
    <div className="container">
      {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
      <div
        className="modal fade"
        id="portlet-config"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              />
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">Widget settings form goes here</div>
            <div className="modal-footer">
              <button type="button" className="btn blue">
                Save changes
              </button>
              <button
                type="button"
                className="btn default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
      {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
      {/* BEGIN PAGE BREADCRUMB */}
      <ul className="page-breadcrumb breadcrumb">
        <li>
          <a href="#">Operasyon</a>
          <i className="fa fa-circle" />
        </li>
        <li>
          <a href="#">Tahsilat</a>
          <i className="fa fa-circle" />
        </li>
        <li>
          <a href="tahsilat_liste.html">Liste</a>
        </li>
      </ul>
      {/* END PAGE BREADCRUMB */}
      {/* BEGIN PAGE CONTENT INNER */}
      <div className="row">
        <div className="col-md-12">
          {/* <div class="note note-success note-bordered">
						<p>
							 Please try to re-size your browser window in order to see the tables in responsive mode.
						</p>
					</div> */}
          {/* BEGIN SAMPLE TABLE PORTLET*/}
          <div className="portlet light">
            <div className="portlet-title">
              <div className="caption">
                <i className="fa fa-cogs font-green-sharp" />
                <span className="caption-subject font-green-sharp bold uppercase">
                  TAHSİLAT LİSTESİ
                </span>
              </div>
              <div className="tools">
                <a href="javascript:;" className="collapse"></a>
              </div>
            </div>
            <div className="portlet-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Müşteri</th>
                      <th>Para Birimi</th>
                      <th>Toplam Tutar</th>
                      <th>İlgili Sipariş</th>
                      <th>Tahsilat Tarihi</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                            allCollections.map((data) => (
                              <>
                                <tr>
                                  <td></td>
                                  <td>{data.Musteri}</td>
                                  <td>{data.ParaBirimi}</td>
                                  <td>{data.ToplamTutar}</td>
                                  <td>{data.İlgiliSiparis}</td>
                                  <td>{data.TahsilatTipi}</td>
                                </tr>
                              </>
                            )
                            )
                          }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* END SAMPLE TABLE PORTLET*/}
        </div>
      </div>
      {/* END PAGE CONTENT INNER */}
    </div>
  </div>
  {/* END PAGE CONTENT */}

  <Footer/> 

</>

  );
}

export default Tahsilat;
