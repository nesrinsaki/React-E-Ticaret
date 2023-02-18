import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const[name, setName] = useState(); 
  const[password, setPassword] = useState(); 
  const[result, setResult] = useState(); 

  const myButtonClick = async () => {

    let requestBody = {
      service_val_name:name,
      service_val_password:password
    }

    const response = await axios.post (
      'https://www.mockachino.com/1b9b9eca-13b9-41/login',
      requestBody
    );

    
    // console.log("Request:" + JSON.stringify(requestBody) );
    // console.log("Respone:" + JSON.stringify(response.data.result));

    if (response.data.result=="success") {
          setResult("Giriş Başarılı");

        localStorage.setItem("userName", name)
        navigate('/Musteri', { replace: true });

    } else {
          setResult("Hatalı kullanıcı adı veya şifre");
    }
    
    console.log("Resp:" + result);
   
}
  return (
  
   <>
  <div className="login">
   {/* BEGIN LOGIN */}
   <div className="content">
    {/* BEGIN LOGIN FORM */}
    <form className="login-form">
      <h3 className="form-title">Giriş</h3>
      <div className="alert alert-danger display-hide">
        <button className="close" data-close="alert" />
        <span>Kullanıcı adı ve şifre giriniz </span>
      </div>
      <div className="form-group">
        {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
        <label className="control-label visible-ie8 visible-ie9">
          Kullanıcı Adı
        </label>
        <input
          className="form-control form-control-solid placeholder-no-fix"
          type="text"
          autoComplete="off"
          placeholder="Kullanıcı Adı"
          name="username"
          onChange={e=>setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="control-label visible-ie8 visible-ie9">
          Şifre
        </label>
        <input
          className="form-control form-control-solid placeholder-no-fix"
          type="password"
          autoComplete="off"
          placeholder="Şifre"
          name="password"
          onChange={e=>setPassword(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <a className="btn btn-success uppercase" onClick={()=>myButtonClick()}>
          Giriş
        </a>
        <label className="rememberme check">
          <input type="checkbox" name="remember" defaultValue={1} />
          Hatırla{" "}
        </label>
        <a href="javascript:;" id="forget-password" className="forget-password">
          Şifrenizi mi unuttunuz?
        </a>
      </div>
      <div className="login-options">
        <h4>Veya ile giriş yap</h4>
        <ul className="social-icons">
          <li>
            <a
              className="social-icon-color facebook"
              data-original-title="facebook"
              href="javascript:;"
            />
          </li>
          <li>
            <a
              className="social-icon-color twitter"
              data-original-title="Twitter"
              href="javascript:;"
            />
          </li>
          <li>
            <a
              className="social-icon-color googleplus"
              data-original-title="Goole Plus"
              href="javascript:;"
            />
          </li>
          <li>
            <a
              className="social-icon-color linkedin"
              data-original-title="Linkedin"
              href="javascript:;"
            />
          </li>
        </ul>
      </div>
      <div className="create-account">
        <p>
          <a href="javascript:;" id="register-btn" className="uppercase">
            Hesap oluştur
          </a>
        </p>
      </div>
    </form>

  </div>
  <div className="copyright">2014 © Metronic. Admin Dashboard Template.</div>
  {/* END LOGIN */}

  </div>
</>

  );
}

export default Login;