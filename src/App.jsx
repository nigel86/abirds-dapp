import {
  ConnectWallet,
  Web3Button,
  useContract,
  useContractRead,
  useAddress,
  useTotalCount,
  useTotalCirculatingSupply,
  useClaimNFT,
} from "@thirdweb-dev/react";
import { useState } from "react";
//import "./css/styles.css";
import { ethers } from "ethers";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Home() {
  const CONTRACT_ADDR = "0xc4640C25f08f5453883f8aA07C6Cdb8d57bdd6f5";
  const { contract } = useContract(CONTRACT_ADDR);
  const { data: totalSupply } = useContractRead(contract, "totalSupply");

  const address = useAddress(); // client address
  const { data: totalCount } = useTotalCount(contract);
  const { data: totalCirculatingSupply } = useTotalCirculatingSupply(contract);
  const { mutate: claimNft } = useClaimNFT(contract);

  const [mintCount, setMintCount] = useState(1);

  function incrementMint() {
    if (mintCount < 10) {
      setMintCount((s) => s + 1);
    }
  }

  function decrementMint() {
    if (mintCount > 1) {
      setMintCount((s) => s - 1);
    }
  }

  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  return (
    // <main className="main">
    //   <div className="container">
    //     <div className="header">
    //       <h1 className="title">
    //         Welcome to{" "}
    //         <span className="gradient-text-0">
    //           <a
    //             href="https://thirdweb.com/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             thirdweb.
    //           </a>
    //         </span>
    //       </h1>

    //       <div className="connect">
    //         <ConnectWallet
    //           dropdownPosition={{
    //             side: "bottom",
    //             align: "center",
    //           }}
    //         />
    //       </div>
    //     </div>

    //   </div>
    // </main>

    <main className="main">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        aria-label="nav"
        id="mainNav"
      >
        <div class="container px-lg-5">
          <a class="navbar-brand" href="#page-top">
            <img
              src="./src/assets/logo/x.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <ConnectWallet
              id="mint-now"
              className="mint-now"
              btnTitle="Connect Wallet"
              theme={"dark"}
              switchToActiveChain={true}
              modalSize={"wide"}
            />
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-0 text-uppercase">The xBirds</h1>
              <h6>
                xBirds is a collection of 1,000 hand-drawn unique NFT birds
                living on the Optimism blockchain. Your xBird grants access to
                members-only experience and rewards. Future areas and perks can
                be unlocked by the community through roadmap activation.
              </h6>

              <div class="row">
                <div class="col">
                  <button
                    class="btn btn-outline-secondary in-btn"
                    type="button"
                    onClick={() => incrementMint()}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <span>{mintCount}</span>
                  <button
                    class="btn btn-outline-secondary de-btn"
                    type="button"
                    onClick={() => decrementMint()}
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>

                  <Web3Button
                    className="mint-now"
                    contractAddress={CONTRACT_ADDR}
                    action={() =>
                      claimNft({
                        to: address,
                        quantity: mintCount,
                      })
                    }
                    onSubmit={() => toastBootstrap.show()}
                  >
                    Claim Now
                  </Web3Button>
                </div>
              </div>
              <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                  id="liveToast"
                  class="toast align-items-center"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div class="d-flex">
                    <div class="toast-body">Minting in process ...</div>
                    <button
                      type="button"
                      class="btn-close me-2 m-auto"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>

              <h6>
                {totalCirculatingSupply?.toString()} / {totalCount?.toString()}
                minted • 36d 5h 2m 54s
              </h6>
            </div>
          </div>
        </div>
      </header>

      <section class="about-section" id="about">
        <div class="container-fluid border border-white">
          <div class="row justify-content-center border border-warning">
            <div class="col-10 border border-info">
              <h2 class="text-white my-5 text-center">The Tale of xBirds</h2>
              <p class="text-white-50 my-5">
                Once, the skies thrived with the vibrant 3Dbirds, symbols of joy
                and unity. Yet, abandoned and forgotten, their world dimmed, and
                their songs turned somber. Determined to transcend their
                despair, they transformed into the xbirds, embracing thousands
                of unique, shadowy forms. Veiled in darkness, each xbird
                embodies resilience, shaped by trials but standing tall as a
                testament to adaptation and diversity.
              </p>
              <p class="text-white-50 my-5">
                These enigmatic xbirds soar through mysterious skies, a fusion
                of darkness and empowerment. Their diverse forms echo stories of
                transformation, inviting the world to celebrate change,
                individuality, and strength amid adversity. Welcome to the realm
                of the xbirds, where darkness intertwines with resilience, and
                every silhouette tells a story of rebirth and reinvention.
              </p>
            </div>
          </div>
        </div>
        <img
          class="img-fluid"
          src="src/assets/img/silhouettes-removebg-half.png"
          alt="..."
        />
      </section>

      <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="src/assets/img/castle.png"
                alt="..."
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Wings of Mystery</h4>
                <p class="text-black-50 mb-0">
                  Amidst fog and ancient ruins, the xbirds, emblems of change
                  and fortitude, sweep across the night sky. Their presence, a
                  harmonious blend of mystery and might, echoes the silent
                  strength found in the heart of bravery.
                </p>
              </div>
            </div>
          </div>

          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <img class="img-fluid" src="src/assets/img/sun.jpg" alt="..." />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Misty</h4>
                    <p class="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="src/assets/img/demo-image-02.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">Mountains</h4>
                    <p class="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="roadmap-section bg-light" id="roadmap">
        <div class="container mt-4 mb-4">
          <h2>NFT Roadmap</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4 mb-3">
              <div class="card">
                <img
                  src="src/assets/img/demo-image-02.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <p class="card-text">
                    <small class="live-text text-body-secondary">Live</small>
                  </p>
                  <h5 class="card-title text-white">Be Origin</h5>
                  <p class="card-text text-white-50">Mint to become the OG.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-3">
              <div class="card">
                <img
                  src="src/assets/img/demo-image-02.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <p class="card-text">
                    <small class="soon-text text-body-secondary">
                      Coming soon
                    </small>
                  </p>
                  <h5 class="card-title text-white">Official Mint</h5>
                  <p class="card-text text-white-50">
                    Public sale for the 1st appearence aBirds.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-3">
              <div class="card">
                <img
                  src="src/assets/img/demo-image-02.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <p class="card-text">
                    <small class="soon-text text-body-secondary">
                      Coming soon
                    </small>
                  </p>
                  <h5 class="card-title text-white">Power Release</h5>
                  <p class="card-text text-white-50">
                    Be surprised by the aBirds power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="signup-section" id="signup">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 class="text-white mb-5">Subscribe to receive updates!</h2>

              {/*
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        */}
              <form
                class="form-signup"
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                <div class="row input-group-newsletter">
                  <div class="col">
                    <input
                      class="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Enter email address..."
                      aria-label="Enter email address..."
                      data-sb-validations="required,email"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary notify-me"
                      id="submitButton"
                      type="submit"
                    >
                      Notify Me!
                    </button>
                  </div>
                </div>
                <div
                  class="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:required"
                >
                  An email is required.
                </div>
                <div
                  class="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:email"
                >
                  Email is not valid.
                </div>

                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3 mt-2 text-white">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3 mt-2">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Forest Location</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">Sandbox Land x=1, y=1</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    <a href="#!">cs@abirds.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">Copyright &copy; ABIRDS 2023</div>
      </footer>

      {/* Navigation
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top"></a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#fam">
                  Fam
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <div className="connect">
                  <ConnectWallet
                    theme="dark"
                    btnTitle="Connect Wallet"
                    dropdownPosition={{
                      side: "bottom",
                      align: "center",
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      */}

      {/* Masthead
      <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-0 text-uppercase">aBirds OG Series</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                aBirds is a unique PFP collection of 1,000 hand-drawn Birds on
                the Arbitrum blockchain.
              </h2>
              <a class="btn btn-primary" href="#about">
                {totalCirculatingSupply?.toString()} Mint now /
                {totalSupply?.toString()}
              </a>
              <h2>3,084/{} minted • 36d 5h 2m 54s</h2>

              <Web3Button
                contractAddress={CONTRACT_ADDR}
                action={async () => {
                  await contract.call("lazyMint", [], {
                    // value: ethers.utils.parseEther("0.01"),
                  });
                }}
                onSuccess={() => {
                  alert("lazyMint running");
                }}
              >
                lazyMint
              </Web3Button>
            </div>
          </div>
        </div>
      </header>
*/}
      {/* About
      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">WELCOME TO THE ABIRDS CLUB</h2>
              <p class="text-white-50">
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Bored Ape
                doubles as your Yacht Club membership card, and grants access to
                members-only benefits, the first of which is access to THE
                BATHROOM, a collaborative graffiti board. Future areas and perks
                can be unlocked by the community through roadmap activation.
                <br />
                <br />
                You can also check out the collection on Secondary Market like
                <a href="https://opensea.io/collection/boredapeyachtclub">
                  OpenSea
                </a>
                .
              </p>
            </div>
          </div>
          <img class="img-fluid" src="src/assets/img/ipad.png" alt="..." />
        </div>
      </section>
*/}
      {/* Projects
      <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">


          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="src/assets/img/bg-masthead.jpg"
                alt="..."
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p class="text-black-50 mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>
          

          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="assets/img/demo-image-01.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Misty</h4>
                    <p class="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="assets/img/demo-image-02.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">Mountains</h4>
                    <p class="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Signup
      <section class="signup-section" id="signup">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
              */}
      {/*
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        */}
      {/*<form
                class="form-signup"
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >

                <div class="row input-group-newsletter">
                  <div class="col">
                    <input
                      class="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Enter email address..."
                      aria-label="Enter email address..."
                      data-sb-validations="required,email"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Notify Me!
                    </button>
                  </div>
                </div>
                <div
                  class="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:required"
                >
                  An email is required.
                </div>
                <div
                  class="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:email"
                >
                  Email is not valid.
                </div>
   
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3 mt-2 text-white">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
  
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3 mt-2">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact
      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">Sandbox Land x=1, y=1</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    <a href="#!">hello@abirds.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>*/}

      {/* Footer
      <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">
          Copyright &copy; Your Website 2023
        </div>
      </footer>*/}

      {/* Core theme JS
      <script src="js/scripts.js"></script>
*/}

      {/*<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>*/}
    </main>
  );
}
