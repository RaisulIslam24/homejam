import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="nav navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img style={{height: '2em', width: '4em'}} src="https://s3-alpha-sig.figma.com/img/a903/9b46/0662010ff5502364c9f4da64de3b3531?Expires=1621814400&Signature=NzlEGdyMvGjERpxW7iLiwoit510rjb2jCH2xsf98Y2o1v-Mvw~vFMGqhUaJwdHMQYvUKyYs3X-x11zDzUR6jisKHf594tmv6l7ApWX~a9sAdKbRl8L3m5i9F1v96TsG3NgaVZ-3w51~RpC3BIqtcyBAsng9acIMnyoMqKU66VFQpzhrSYVdW3ELAkpRdfk~dzp7jLccv314TneLW2paaw56sP5o7nF4prgJs5oBWuE2cdWW86W5Zr0Xxdve6dqHY1d6mKxIgDdFxHoRRNkzsJqxy6Pb60aeozneUUcPuGaYNIuJoLevHH473CSLVSEKPSAe4T2EXWEX7J0aG7EVZbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" /></a>
          <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navItem collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active text-white me-4" aria-current="page" href="#"><FontAwesomeIcon icon={faSearch} /> Search</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white me-4" href="#">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white me-4" href="#">Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white me-4" href="#"><FontAwesomeIcon icon={faBriefcase} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;