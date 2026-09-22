import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import fullNameLogo from '../assets/fullnamelogo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">

          {/* <div className="navbar-logo">
            <svg
              width="120"
              height="120"
              viewBox="225 250 800 800">
              <defs>
                <linearGradient id="gradient_0" gradientUnits="userSpaceOnUse"
                  x1="618.4762" y1="724.48218"
                  x2="869.47516" y2="410.07599">
                  <stop offset="0" stop-color="#0050DF" />
                  <stop offset="1" stop-color="#328FFF" />
                </linearGradient>
              </defs>

              <path fill="url(#gradient_0)" d="M612.068 469.646C617.983 460.362 625.426 453.774 633.967 446.882C659.25 426.39 688.98 412.103 720.776 405.165C780.505 391.887 847.627 400.784 899.574 434.012C946.514 463.938 979.584 511.346 991.457 565.733C1006.56 635.037 989.216 703.969 944.461 758.424C936.373 768.265 948.612 786.783 953.477 796.873C964.256 819.203 974.828 841.633 985.19 864.16C989.486 873.61 995.037 883.814 997.284 893.798C999.602 904.102 991.966 916.944 981.371 918.647C965.522 921.194 947.511 903.395 935.188 894.448L878.083 853.221C867.905 845.868 852.33 833.996 841.857 828.118C826.1 832.388 810.255 837.105 794.157 839.712C779.865 841.848 765.419 842.78 750.971 842.498C691.655 842.029 634.999 817.816 593.665 775.27C564.559 744.828 545.676 706.063 539.648 664.379C537.611 649.6 537.447 634.822 537.691 619.942C537.128 607.514 537.772 594.263 537.532 581.644C536.478 526.272 494.057 485.183 437.625 487.972C436.561 476.65 428.676 477.686 419.37 477.742C412.787 473.318 408.719 472.268 401.899 469.039C395.868 466.184 389.289 457.523 383.966 453.26C380.576 450.545 377.282 447.124 373.157 445.238C364.842 441.553 355.932 439.076 347.754 434.918C346.099 434.338 341.327 430.268 339.834 430.64C334.906 431.867 332.467 440.297 326.394 434.555C375.762 403.856 434.388 392.419 491.345 405.829C536.56 416.474 577.394 444.527 601.776 484.293C614.329 504.813 622.408 527.752 625.483 551.609C632.825 611.553 612.638 666.191 665.598 717.383C682.414 733.435 703.144 744.798 725.721 750.34C764.098 759.599 804.579 753.345 838.373 732.936C869.219 714.195 891.321 683.929 899.784 648.841C907.692 614.625 901.699 578.668 883.119 548.867C837.487 476.048 736.337 468.091 673.343 522.322C660.926 533.012 653.361 544.296 643.006 556.429C637.226 517.946 632.724 503.643 612.068 469.646Z" />

              <path fill="#003FB8" d="M537.691 619.942C538.256 624.245 538.164 627.932 538.16 632.261C547.828 635.057 549.95 642.821 555.38 650.302C560.09 656.792 565.43 663.013 570.662 669.093C574.071 673.107 579.562 673.708 583.406 676.463C588.985 680.461 595.919 687.763 600.188 693.228C603.624 697.626 605.959 703.163 609.559 707.494C613.307 712.333 618.727 714.348 622.998 718.717C627.416 723.238 629.952 730.048 634.165 734.614C646.043 747.486 660.79 759.045 674.457 770.01C680.022 773.586 686.303 776.478 692.17 779.328C696.693 781.526 703.437 783.327 707.445 785.861C717.217 792.038 726.807 798.46 736.779 804.344C741.243 806.978 745.352 810.434 749.884 812.997C757.338 817.675 767.699 820.936 774.536 824.963C778.189 827.114 792.418 836.961 794.157 839.712C779.865 841.848 765.419 842.78 750.971 842.498C691.655 842.029 634.999 817.816 593.665 775.27C564.559 744.828 545.676 706.063 539.648 664.379C537.611 649.6 537.447 634.822 537.691 619.942Z" />

              <path fill="#003FB8" d="M326.394 434.555C332.467 440.297 334.906 431.867 339.834 430.64C341.327 430.268 346.099 434.338 347.754 434.918C355.932 439.076 364.842 441.553 373.157 445.238C377.282 447.124 380.576 450.545 383.966 453.26C389.289 457.523 395.868 466.184 401.899 469.039C408.719 472.268 412.787 473.318 419.37 477.742C428.676 477.686 436.561 476.65 437.625 487.972C415.884 488.973 394.85 495.998 376.87 508.262C321.128 546.217 330.196 595.725 330.232 654.047L330.202 762.759C330.251 775.902 331.748 796.34 329.448 808.782C324.32 836.521 293.247 845.244 268.507 839.999C229.856 831.805 234.85 803.215 235.093 772.264L235.184 718.503L235.129 631.392C235.046 608.892 233.838 575.988 238.654 554.786C249.945 505.078 283.464 461.414 326.394 434.555Z" />
            </svg>
          </div> */}

          <img src={fullNameLogo} alt="NROQ logo" style={{ width: '120px', height: 'auto' }} />
        </div>

        <div className="navbar-links">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#vocabulary" className="navbar-link">Vocabulary Moments</a>
          <a href="#how-it-works" className="navbar-link">How it works</a>
          <Link to="/about-us" className="navbar-link">About</Link>
        </div>

        <div className="navbar-action">
          <a href="#download" className="button-pill button-primary navbar-button">
            Get Started
            <ArrowRight className="button-icon" />
          </a>
        </div>

        <div className="navbar-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle-button">
            {isOpen ? <X className="navbar-toggle-icon" /> : <Menu className="navbar-toggle-icon" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            <a href="#features" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#vocabulary" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Vocabulary Moments</a>
            <a href="#how-it-works" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>How it works</a>
            <Link to="/about-us" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          </div>
          <div className="navbar-mobile-action">
            <a href="#download" className="button-pill button-primary navbar-button navbar-mobile-button" onClick={() => setIsOpen(false)}>
              Get Started
              <ArrowRight className="button-icon" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
