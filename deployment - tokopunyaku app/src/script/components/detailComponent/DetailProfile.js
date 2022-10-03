import userPic from '../../../image/user/Delivery boy.png';

const template = document.createElement('template');
template.innerHTML = `
  <style>
	.profile {
		cursor: pointer;
		position: relative;
	}

	.header__profile {
		opacity: 1;
		visibility: visible;
		display: flex;
		gap: 0.8rem;
		align-items: center;
		transition: all .3s ease;
	}

	.profile_img {
		width: 35px;
	}

	.profile_name {
		font-family: 'Satoshi', sans-serif;
		font-weight: 600;
	}

	.detail__profile {
		position: absolute;
		right: 0;
		left: -70px;
		z-index: 100;
		width: 240px;
		padding: 0.5em;
		background-color: #e4dcea;
		border-radius: 0.6em;
		border: 3px solid #322d69;
		transition: all .3s ease;
		transform: translateY(-15px);
	}

	.detail__img {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		top: -45px;
		right: 0;
		left: 0;
		margin: 0 auto;
		width: 85px;
		border: 3px solid #322d69;
		border-radius: 50%;
	}

	.detail__name {
		opacity: 0;
		visibility: hidden;
		margin: 2.5em 0 0.4em;
    text-align: center;
    font-size: 1.4rem;
	}

	.detail__desc {
		opacity: 0;
		visibility: hidden;
		margin-top: 0;
    font-family: 'Satoshi', sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
	}

	.detail__stick {
		display: flex;
		flex-direction: column;
		gap: 0.4em;
	}
	.detail__stick span {
		height: 4px;
		background-color: #3770cd;
	}
	.detail__stick span:nth-child(1) {
		width: 40px;
	}
	.detail__stick span:nth-child(2) {
		width: 60px;
	}
	.detail__stick span:nth-child(3) {
		width: 80px;
	}

	.hidden {
		opacity: 0;
		visibility: hidden;
		transform: translateY(0);
	}

	.slide-fwd-bottom {
		opacity: 1;
		visibility: visible;
		-webkit-animation: slide-fwd-bottom 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
						animation: slide-fwd-bottom 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}

	.slide-right {
		opacity: 1;
		visibility: visible;
		-webkit-animation: slide-right 0.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) both;
		animation: slide-right 0.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) both;
	}


	@keyframes slide-fwd-bottom {
		0% {
			-webkit-transform: translateZ(160px) translateY(100px);
							transform: translateZ(160px) translateY(100px);
		}
		100% {
			-webkit-transform: translateZ(0) translateY(0);
							transform: translateZ(0) translateY(0);
		}
	}
	
	@keyframes slide-right {
		0% {
			-webkit-transform: translateX(100px);
			transform: translateX(100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}	

	@media (max-width: 568px) {
		.detail__profile {
			width: 200px;
			left: -50px;
		}
		.detail__img {
			width: 75px;
		}
		.detail__name {
			font-size: 1.3rem;
		}
		.detail__desc {
			font-size: 0.9rem;
		}
		.detail__stick span:nth-child(1) {
      width: 20px;
		}
		.detail__stick span:nth-child(2) {
			width: 40px;
		}
		.detail__stick span:nth-child(3) {
			width: 60px;
		}
	}
  </style>


	<div class="profile">
		<div class="header__profile">
		<img src="${userPic}" alt="profile" class="profile_img" />
		<h3 class="profile_name">Ebayyou</h3>
		</div>

		<div class="detail__profile hidden">
			<img src="${userPic}" alt="detail_profile" class="detail__img" />
			<h3 class="detail__name">Ebayyou</h3>
			<p class="detail__desc"> Hi my name is Bayu anggoro, I am a fresh graduate computer and network engineering in Triguna utama scholl, and I want a carrer as a front end development.</p>
			<div class="detail__stick">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
`;

class DetailProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.profile').addEventListener('click', () => {
      this.clickEvent();
    });
  }

  clickEvent() {
    const detailProfile = this.shadowRoot.querySelector('.detail__profile');
    const headerProfile = this.shadowRoot.querySelector('.header__profile');

    if (detailProfile.classList.contains('hidden')) {
      detailProfile.classList.remove('hidden');
      headerProfile.classList.add('hidden');
      this.shadowRoot.querySelector('.detail__img').classList.add('slide-fwd-bottom');
      this.shadowRoot.querySelector('.detail__name').classList.add('slide-right');
      this.shadowRoot.querySelector('.detail__desc').classList.add('slide-right');
    } else {
      detailProfile.classList.add('hidden');
      headerProfile.classList.remove('hidden');
      this.shadowRoot.querySelector('.detail__img').classList.remove('slide-fwd-bottom');
      this.shadowRoot.querySelector('.detail__name').classList.remove('slide-right');
      this.shadowRoot.querySelector('.detail__desc').classList.remove('slide-right');
    }
  }
}

customElements.define('detail-profile', DetailProfile);
