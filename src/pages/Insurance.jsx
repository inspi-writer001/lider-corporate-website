import React from 'react';
import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import PartnersList from '../components/PartnersList';
import { t } from 'i18next';

const Insurance = () => {
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
            <div className="_low_price">{t('insurance.price')}</div>
            <div className="_insurance">{t('insurance.insurance')}</div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <div className="left_" style={{ fontSize: '2.5rem' }}>
              {t('insurance.why_us')}
            </div>
            <div className="right_">{t('insurance.text1')}</div>
          </div>
          <div className="bottom_div">
            <div className="left_ a">{t('insurance.text2')}</div>
            <div className="right_ a">{t('insurance.text3')}</div>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: '-18rem', transform: 'rotate(180deg)' }}
          ></div>
        </div>
        <div className="best_offer second_banner" style={{ top: '12rem' }}>
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: '9rem', fontSize: '1.8rem', color: 'white' }}
            >
              {t('insurance.best')}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: '-11rem',
                fontSize: '2.5rem',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              {t('insurance.offers')}
            </div>
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
        <div className="partners">
          <div className="those_container">
            <div className="those">{t('insurance.trust')}</div>
            {/* <div className="those">THOSE</div> */}
          </div>
          <div className="partners_">
            <div className="grid">
              {PartnersList.map((item, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <img
                      src={item.img}
                      alt={item.desc}
                      style={{ width: '9rem' }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
