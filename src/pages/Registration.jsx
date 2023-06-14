import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import { useTranslation } from 'react-i18next';

const Registration = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="insurance_body">
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: 'absolute',
              top: '-35rem',
              left: 'auto',
              right: 'auto',
              marginLeft: '0',
              marginRight: '0',
              zIndex: '0 !important',
            }}
          />
        </div>
        <div className="arc_container">
          <div className="top_arc" style={{ top: '10rem' }}></div>
        </div>
        <div className="second_banner">
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: '9rem', fontSize: '1.8rem', color: 'white' }}
            >
              {t('registration.register')}{' '}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: '-11rem',
                fontSize: '2.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {t('registration.vehicle')}
            </div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <div className="left_" style={{ fontSize: '2.5rem' }}>
              {t('registration.why_us')}
            </div>
            <div className="right_">{t('registration.text1')}</div>
          </div>
          <div className="second_banner">
            <div className="background_ball" style={{ top: '0' }}>
              <div
                className="_low_price"
                style={{
                  marginTop: '9rem',
                  fontSize: '1.8rem',
                  color: 'white',
                }}
              >
                {t('registration.instant')}
              </div>
              <div
                className="_insurance"
                style={{
                  marginTop: '-11rem',
                  fontSize: '2.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {t('registration.registration')}
              </div>
            </div>
          </div>
          <div className="bottom_div">
            <div className="left_">{t('registration.text2')}</div>

            <div className="right_">{t('registration.text3')}</div>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: '6rem', top: '-18rem', transform: 'rotate(180deg)' }}
          ></div>
        </div>
        {/* <div className="best_offer second_banner" style={{ top: "12rem" }}>
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              Best
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Offers
            </div>
          </div>
        </div> */}
        <div className="second_banner">
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: '9rem', fontSize: '1.8rem', color: 'white' }}
            >
              {t('registration.comprehensive')}{' '}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: '-11rem',
                fontSize: '2.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {t('registration.formalism')}{' '}
            </div>
          </div>
          <div
            className="trust_us"
            style={{ position: 'relative', top: '-3rem' }}
          >
            {t('registration.we_provide')}
          </div>
        </div>
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: 'absolute',
              top: '50rem',
              left: 'auto',
              right: 'auto',
              marginLeft: '0',
              marginRight: '0',
              zIndex: '0 !important',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
