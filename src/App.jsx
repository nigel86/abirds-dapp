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

      <header class="masthead-section" id="masthead">
        <div class="container d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-10 text-uppercase">The X-Birds</h1>
              <br />
              <br />
              <br />
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
                    MINT YOURS
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

      <section class="story-section" id="story">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-10">
              <h2 class="text-white my-5 text-center">The Tale of X-Birds</h2>
              <p class="text-white-50 my-5">
                In the ethereal realm of Aerendir Eyrie, once a haven for the
                graceful Moonbirds, a catastrophic event called the Celestial
                Turbulence shattered their tranquility. Envious of the
                Moonbirds' radiant beauty, the malevolent Shadow Sirens
                attacked, pushing the avian community to the brink of
                extinction. Amidst this chaos emerged Luminarael, a cosmic
                guardian with ancient wisdom and advanced technology. To save
                the Moonbirds, Luminarael transformed them into the
                awe-inspiring X-Birds—half-organic, half-mechanical aviators,
                each blessed with unique powers forged from celestial energy and
                cybernetic enhancements.
              </p>
              <p class="text-white-50 my-5">
                Now united as defenders of Aerendir Eyrie, the X-Birds soar
                through rejuvenated skies, safeguarding against remnants of the
                Celestial Turbulence. Guided by Luminarael's legacy, these
                cyborg avian beings embark on quests, forge alliances, and
                navigate a world teeming with ancient mysteries. As they strive
                to restore balance and harmony to their realm, the X-Birds, each
                with their distinct identity and powers, stand as a testament to
                resilience and transformation in the face of cosmic adversity.
                Through their journey, they seek not only to protect their home
                but also to discover the true extent of their extraordinary
                potential and the unity born from their shared struggles.
              </p>
            </div>
          </div>
        </div>
        <img
          class="img-fluid"
          src="src/assets/img/blue-light-sky.png"
          alt="..."
        />
      </section>

      <section class="intro-section bg-dark" id="intro">
        <div class="container my-5 text-white-50">
          <div class="row">
            <div class="col-md-8">
              <h2 class="text-white text-center mb-5">
                Discover the X-Birds World
              </h2>
              <p>
                X-Birds is a collection of 1,000 hand-drawn unique NFT birds
                living on the Optimism blockchain. Your xBird grants access to
                members-only experience and rewards. Future areas and perks can
                be unlocked by the community through roadmap activation.
              </p>
            </div>

            <div class="col-md-4">
              <div class="row g-4">
                <div class="col-6">
                  <img
                    src="src/assets/nft/1.jpg"
                    class="img-fluid rounded d-block mx-auto"
                    alt="Grid 1"
                  />
                </div>
                <div class="col-6">
                  <img
                    src="src/assets/nft/2.jpg"
                    class="img-fluid rounded d-block mx-auto"
                    alt="Grid 2"
                  />
                </div>
                <div class="col-6">
                  <img
                    src="src/assets/nft/3.jpg"
                    class="img-fluid rounded d-block mx-auto"
                    alt="Grid 3"
                  />
                </div>
                <div class="col-6">
                  <img
                    src="src/assets/nft/4.jpg"
                    class="img-fluid rounded d-block mx-auto"
                    alt="Grid 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="weapon-section bg-dark" id="weapon">
        <div class="container my-5 text-white-50">
          <div class="row">
            <div class="col">
              <h2 class="text-white text-center mb-5">The Powers Of X</h2>
            </div>
          </div>
          <div class="row my-5 justify-content-center">
            <div class="col-md-2 col-sm-4 mb-4">
              <img
                src="src/assets/img/weapon1.jpg"
                alt="X-Bird Power 1"
                class="img-fluid"
              />
              <div class="caption text-center mt-2">
                <p class="mb-1 text-secondary">Celestial Wing Blades</p>
                <p class="mb-0 text-secondary fw-light">Secret Rare</p>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 mb-4">
              <img
                src="src/assets/img/weapon2.jpg"
                alt="X-Bird Power 2"
                class="img-fluid"
              />
              <div class="caption text-center mt-2">
                <p class="mb-1 text-secondary">Resonant Energy Shield</p>
                <p class="mb-0 text-secondary fw-light">Ultra Rare</p>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 mb-4">
              <img
                src="src/assets/img/weapon3.jpg"
                alt="X-Bird Power 3"
                class="img-fluid"
              />
              <div class="caption text-center mt-2">
                <p class="mb-1 text-secondary">Stellar Cannon Blaster</p>
                <p class="mb-0 text-secondary fw-light">Rare</p>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 mb-4">
              <img
                src="src/assets/img/weapon4.jpg"
                alt="X-Bird Power 4"
                class="img-fluid"
              />
              <div class="caption text-center mt-2">
                <p class="mb-1 text-secondary">Mind's Eye Gauntlet</p>
                <p class="mb-0 text-secondary fw-light">Uncommon</p>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 mb-4">
              <img
                src="src/assets/img/weapon5.jpg"
                alt="X-Bird Power 5"
                class="img-fluid"
              />
              <div class="caption text-center mt-2">
                <p class="mb-1 text-secondary">Harmonic Prism</p>
                <p class="mb-0 text-secondary fw-light">Common</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline-section bg-dark" id="timeline">
        <div class="container my-5 text-white">
          <div class="row text-center justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <h2 class="my-5 font-weight-bold">X-Birds Evolution</h2>
              <p class="my-5 text-white-50">
                We’re very proud of the path we’ve taken. Explore the history
                that made us who we are today.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div
                class="timeline-steps aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2003"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 mt-3 mb-1">25 Mar '24</p>
                    <p class="h6 text-white-50 mb-0 mb-lg-0">SNAPSHOT</p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2004"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 mt-3 mb-1">29 Mar '24</p>
                    <p class="h6 text-white-50 mb-0 mb-lg-0">WHITELIST SALE</p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2005"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 mt-3 mb-1">30 Mar '24</p>
                    <p class="h6 text-white-50 mb-0 mb-lg-0">PUBLIC SALE</p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2010"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 mt-3 mb-1">1 Apr '24</p>
                    <p class="h6 text-white-50 mb-0 mb-lg-0">REVEAL</p>
                  </div>
                </div>
                <div class="timeline-step mb-0">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2020"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 mt-3 mb-1">Q2 '24</p>
                    <p class="h6 text-white-50 mb-0 mb-lg-0">NEXT MILESTONE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="team-section bg-dark" id="team">
        <div class="container text-white my-5">
          <div class="row justify-content-center">
            <div class="col">
              <div class="section_heading text-center wow fadeInUp">
                <h3 class="my-5">
                  Our Creative <span> Team</span>
                </h3>
                <p class="my-5 text-white-50">
                  Discover the masterminds behind X-BIRDS, crafting innovation
                  through creativity and imagination.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="profile wow fadeInUp">
                <div class="profile_thumb">
                  <img src="src/assets/nft/1.jpg" class="img-fluid" alt="" />
                </div>
                <div class="profile-detail">
                  <h6>mattgene.eth</h6>
                  <p class="role">Lead Designer</p>
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile wow fadeInUp">
                <div class="profile_thumb">
                  <img src="src/assets/nft/2.jpg" class="img-fluid" alt="" />
                </div>
                <div class="profile-detail">
                  <h6>davidsfh40542.eth</h6>
                  <p class="role">Content Director</p>
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="profile wow fadeInUp">
                <div class="profile_thumb">
                  <img src="src/assets/nft/3.jpg" class="img-fluid" alt="" />
                </div>
                <div class="profile-detail">
                  <h6>nigel86.eth</h6>
                  <p class="role">Developer</p>{" "}
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a class="mx-1 text-white" href="#">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section bg-dark" id="faq">
        <div class="container text-white my-5">
          <div class="row">
            <div class="col-md-2"> </div>
            <div class="col-md-8">
              <h1 class="text-center my-5">F.A.Q.</h1>

              <div class="accordion" id="accordionExample">
                {/* 1 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button fs-6"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      HOW MANY PEOPLE OF CAPTAIN LASERHAWK: A BLOOD DRAGON REMIX
                      - THE SANDBOX AVATAR COLLECTION ARE THERE?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 1</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      HOW DOES RARITY WORK?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 2</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      WHERE DO I GET MY AVATAR
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 3</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      WHAT IS AN ALLOWLIST?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 4</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      WHEN IS THE SALE AND HOW MANY AVATARS CAN I BUY?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 5</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      HOW MUCH SHOULD I EXPECT TO PAY FOR ONE AVATAR NFT?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 6</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>
                {/* 7 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      HOW DO I GET ALLOW LISTED?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 7</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 8 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      HOW CAN I JOIN THE ALLOW LIST FOR HEYMINT?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 8</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 9 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingNine">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      WHEN WILL THE ALLOW LIST FOR HEYMINT.XYZ BE OPENED?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 9</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 10 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTen">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      HOW MANY SPOTS ARE AVAILABLE ON THE ALLOW LIST?
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 10</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 11 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEleven">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      WHEN WILL THE ALLOW LIST FOR HEYMINT CLOSE?
                    </button>
                  </h2>
                  <div
                    id="collapseEleven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEleven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 11</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 12 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwelve">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      CAN I ACCESS HEYMINT.XYZ THROUGH ANY OTHER MEANS EXCEPT
                      FOR THE LINK SHARED BY THE SANDBOX?
                    </button>
                  </h2>
                  <div
                    id="collapseTwelve"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwelve"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 12</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>

                {/* 13 */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThirteen">
                    <button
                      class="accordion-button fs-6 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                    >
                      HOW DO I KNOW IF I'M ALLOW LISTED?
                    </button>
                  </h2>
                  <div
                    id="collapseThirteen"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThirteen"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body fs-6">
                      <strong>Answer to Question 13</strong> - Placeholder text
                      for the answer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"> </div>
          </div>
        </div>
      </section>

      <section class="signup-section" id="signup">
        <div class="container">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 class="text-white mb-5">Join our Forest</h2>

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
                      Notify Me
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

      <footer class="footer bg-black small text-center text-white-50 text-center text-lg-start ">
        <div class="d-flex justify-content-center justify-content-lg-between p-4">
          <div class="me-5">
            <span>
              Buidl with <i class="fa-solid fa-heart"></i> on
              <img
                class="mx-2"
                src="src/assets/logo/op.svg"
                alt="External Logo"
                width="100"
              />
            </span>
          </div>
          <div>
            <a href="" class="me-4 text-reset">
              <img
                class="mx-2"
                src="src/assets/logo/etherscan.svg"
                alt="External Logo"
                width="15"
              />
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-brands fa-discord"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div class="container text-center p-4">
          <p class="fw-bold">x-birds</p> Copyright © 2023-2024 All Rights
          Reserved
        </div>
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
