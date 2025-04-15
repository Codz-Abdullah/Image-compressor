import React, { useState } from 'react';
import imageCompressor from "browser-image-compression";
import './Compressor.css';
import '../Components/pricing.js';
// import Download from '../Use Images/Download.png';
// import Upload from '../Use Images/Upload.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
// import { faImage } from '@fortawesome/free-solid-svg-icons';
function Compressor() {
    const [compressedLink, setCompressedLink] = useState("");
    const [originalImage, setOriginalImage] = useState("");
    const [originalLink, setOriginalLink] = useState("");
    const [clicked, setClicked] = useState(false);
    const [uploadImage, setUploadImage] = useState(false);
    const [outputFileName, setOutputFileName] = useState("");
    function uploadLink(event) {
        const imageFile = event.target.files[0];
        setOriginalLink(URL.createObjectURL(imageFile));
        setOriginalImage(imageFile);
        setOutputFileName(imageFile.name);
        setUploadImage(true);
    }
    //After Clicked
    function click(e) {
        e.preventDefault();
        const options = {
            maxSizeMB: 3,
            maxWidthOrHeight: 800,
            useWebWorker: true
        };
        if (originalImage.size / (1024 * 1024) < options.maxSizeMB) {

            alert("Image is too small.")
            return 0;


        }
        let output;
        imageCompressor(originalImage, options).then(x => {
            output = x;
            const downloadLink = URL.createObjectURL(output);
            setCompressedLink(downloadLink);
        });
      

        setClicked(true);
        return 1;
    };

    return (
    <div id='center' className=' align-item-center img-fluid'>
    <header class="bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
     {/*Remove After Code Written*/}

      {/* <div class="col-md-3 mb-2 mb-md-0" bis_skin_checked="1">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div> */}

      <ul class="nav col-12 mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-dark">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>
{/* Remove it After Work */}
      {/* <div class="col-md-3 text-end" bis_skin_checked="1">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div> */}
    </header>

      <div className='text-dark mt-2 lg-col-6'>
        <h2>MB To KB Converter</h2>
        <p>Get Best Quality Image</p>
      </div>
      <div className='row mt-5'>
        <card-img className="ht" variant="top"></card-img>
      </div>
<input type='file' accept='image/*' className='mt-2 btn btn-light w-55' onChange={uploadLink}></input>
<div>
  <div>
    <div class='col-xl-4 col-lg-4 col-md-12 mb-5 mt-4 col-sm-12 d-flex justify-content-center align-items-baseline'></div>
<br/>
<button type='button' className='btn btn-dark'  onClick={e => click(e)}>Compress</button>

</div>
<div>

<div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 align-item-center '>
{/* <Card.Img class='image' variant='top' src={compressedLink}></Card.Img> */}
  {clicked ? (
 <div className='col-xl-12 col-lg-12  justify-content-center align-item-center'>
 <a href={compressedLink}  download={outputFileName}  class='btn btn-dark'>Download</a>
  </div>     
    ):(<></>)
  }
  
</div>
<h1 style={{padding:10}} className='p-5'>🌟 Key Features</h1>
<div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
  <div class="col">
    <div class="card">
      {/* <img class="card-img-top" alt="..."/> */}
      <div class="card-body" >
        <h5 class="card-title">✅ Fast Image Compression</h5>
        <p className='card-text'>✨ Instantly compress large images with no quality loss.</p>
        <p className='card-text'>⚡ Fast, free & no installation needed!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">🆓 Free & Unlimited</h5>
        <p className='card-text'>Enjoy unlimited image compression.🎉</p>
        <p className='card-text'>No any restrictions or charges! 🔓</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Use Anywhere🌍</h5>
        <p className='card-text'>📱 Works on phones, tablets & desktops — Anytime</p>
        <p className='card-text'>📲 Seamless on phones, tablets & desktops — Optimized!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="" class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">🖼️ Support for Multiple Formats</h5>
        <p class="card-text">Supports JPG, PNG, GIF, WebP, SVG.</p>
        <p class="card-text">Reduces size, maintains quality for faster loading.</p>

      </div>
    </div>
  </div>
</div>
{/*Hero section*/}
<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-18 col-sm-8 col-lg-6">
        <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-QSmyq_9z8KjGJwnvN3suh5U46ombH1XDjuTUyP2ch_ZVyoKmdZUjgOSWxpy55g8ZPz2VfZNkQXsQrdEha-D6X1lWPyG01IEp6G5ZY1DiYeS0MbZWk5zc2K5STXz2tjfJSoKqkagR7aYqFh1K-sxtNpeew6iHimFgByVNxw8cwwFETU2Jpa5GVlPAHv8b/s320/ChatGPT_Image_Apr_14__2025__04_26_49_PM-removebg-preview.png' class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Best Quality Images</h1>
        <p class="lead">Compress your images without compromising quality. Our smart image compressor reduces file size while keeping every detail sharp—perfect for faster loading and stunning visuals. Try it now and experience the best quality in every pixel.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a type="button" class="btn btn-primary btn-lg px-4 me-md-2" href='#'>Compress</a>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  </div>
{/*Footer*/}
<div class="container" bis_skin_checked="1">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href='#'class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2025 Company, Inc</p>
  </footer>
</div>
</div>
</div>
</div>

)}
export default Compressor;





    
    
//         <div class='mainContainer'>
//             <Navbar class='navbar justify-content-center' bg='light' variant='light'>
//                 <Navbar.Brand class='navbar-content' href='/'>
//                     {/* <FontAwesomeIcon class='social-icons changeOn' icon={faImage} size={''} />{''} */}
//                     Image Compressor
//                 </Navbar.Brand>
//             </Navbar>
//             <div class='row mt-5'>
//                 <div class='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
//                      {uploadImage ? (
//                         <Card.Img
//                             class='image'
//                             variant='top'
//                             src={originalLink}>
//                         </Card.Img>
//                     ) : (
//                       /*Img used?*/
//                         <Card.Img
//                             class='uploadCard'
//                             variant='top'
//                             src=""> 

//                             </Card.Img>
//                     )} 
//                     {/* image uploading from Computer*/}
//                     <div class='d-flex justify-content-center upload-btn-wrapper'>
//                         <label class="btn btn-dark">Upload a Image
//                         <input
//                             type='file'
//                             hidden
//                             onChange={uploadLink}
//                         />
//                         </label>
//                     </div>
//                 </div>
//                 {/* image compressing */}
//                 <div class='col-xl-4 col-lg-4 col-md-12 mb-5 mt-4 col-sm-12 d-flex justify-content-center align-items-baseline'></div>
//                 <br />
//                 {outputFileName ? (
//                     <button
//                         type='button'
//                         class='btn btn-primary'
//                         onClick={e => click(e)}>
//                         Compress
//                     </button>
//                 ) : (
//                 <></>
//                 )}

// </div>
// {/* download */}
//             <div class='col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3'></div>
//             <Card.Img class='image' variant='top' src={compressedLink}></Card.Img>
//             {clicked ? (
//                 <div class='d-flex justify-content-center'>
//                     <a

//                         href={compressedLink}
//                         download={outputFileName}
//                         class='mt-2 btn btn-dark w-75'
//                     >
//                         Download
//                     </a>
              
// </div>
//             ) : (
//                 <Card.Img
//                     class='uploadCard'
//                     variant='top'
//                     src={Download}></Card.Img>

//             )
//             }

//         </div>
//     )


// }
