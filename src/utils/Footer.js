import React, { Component } from 'react'
import Styles from '../css/Footer.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class Footer extends Component {
      render() {
            return (
                  <div>
                        <div className={Styles.footer}>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>SOLUTIONS</div>
                                    <div className={Styles.footerminitext}>Home</div>
                                    <div className={Styles.footerminitext}>Portfolio</div>
                                    <div className={Styles.footerminitext}>Services</div>
                                    <div className={Styles.footerminitext}>How we work</div>
                                    <div className={Styles.footerminitext}>Careers </div>
                                    <div className={Styles.footerminitext}> About </div>

                              </div>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>SERVICES</div>
                                    <div className={Styles.footerminitext}> Android App Development</div>
                                    <div className={Styles.footerminitext}>Cross Platform</div>
                                    <div className={Styles.footerminitext}>Web Development</div>
                                    <div className={Styles.footerminitext}>How we work</div>
                                    <div className={Styles.footerminitext}>UI/UX Designs </div>
                                    <div className={Styles.footerminitext}> CRM Solutions </div>

                              </div>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>INDUSTRIES</div>
                                    <div className={Styles.footerminitext}> Food and Restaurants</div>
                                    <div className={Styles.footerminitext}>Business and Ecommerce</div>
                                    <div className={Styles.footerminitext}> Travel</div>
                                    <div className={Styles.footerminitext}>Fitness and Gym</div>
                                    <div className={Styles.footerminitext}>Banking </div>
                                    <div className={Styles.footerminitext}> Sports</div>
                                    <div className={Styles.footerminitext}>Real Estate  </div>
                                    <div className={Styles.footerminitext}>Healthcare</div>
                                    <div className={Styles.footerminitext}>Job and Career </div>
                                    <div className={Styles.footerminitext}> Education</div>

                              </div>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}> CONTACT</div>
                                    <div className={Styles.footerminitext}>123, ABC Stgreet,  </div>
                                    <div className={Styles.footerminitext}>ABC City India </div>
                                    <div className={Styles.footerminitext}>+91-1234567890</div>
                                    <div className={Styles.footerminitext}>hello@company.com</div>

                              </div>
                        </div>

                        <div className={Styles.footerline}>
                              <div className={Styles.copyright}>Copyright ??2020 - 2022. All rights reserved.</div>
                              <div className={Styles.logo_Name}>
                                    <img className={Styles.logo} src={ImageStyle.GranzaXLogoTransparent} />
                                    <div className={Styles.ftily}> GranzaX Team LLP</div>
                              </div>
                        </div>
                  </div>
            );
      }
}



