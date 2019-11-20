'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c9a3832f803051154cb82126149f386e"' : 'data-target="#xs-components-links-module-AppModule-c9a3832f803051154cb82126149f386e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c9a3832f803051154cb82126149f386e"' :
                                            'id="xs-components-links-module-AppModule-c9a3832f803051154cb82126149f386e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuctionModule.html" data-type="entity-link">AuctionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuctionModule-ffb15c97e5914695038e13bf62066615"' : 'data-target="#xs-components-links-module-AuctionModule-ffb15c97e5914695038e13bf62066615"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuctionModule-ffb15c97e5914695038e13bf62066615"' :
                                            'id="xs-components-links-module-AuctionModule-ffb15c97e5914695038e13bf62066615"' }>
                                            <li class="link">
                                                <a href="components/BidFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BidFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuctionRoutingModule.html" data-type="entity-link">AuctionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarModule-21aa0d42662196a58b9eaf2e001a9f62"' : 'data-target="#xs-components-links-module-CalendarModule-21aa0d42662196a58b9eaf2e001a9f62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarModule-21aa0d42662196a58b9eaf2e001a9f62"' :
                                            'id="xs-components-links-module-CalendarModule-21aa0d42662196a58b9eaf2e001a9f62"' }>
                                            <li class="link">
                                                <a href="components/CalendarPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarRoutingModule.html" data-type="entity-link">CalendarRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-f07d58c30220885a390ddf077eeaffa5"' : 'data-target="#xs-components-links-module-DashboardModule-f07d58c30220885a390ddf077eeaffa5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-f07d58c30220885a390ddf077eeaffa5"' :
                                            'id="xs-components-links-module-DashboardModule-f07d58c30220885a390ddf077eeaffa5"' }>
                                            <li class="link">
                                                <a href="components/AuctionsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuctionsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModule.html" data-type="entity-link">HistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HistoryModule-54a9e5bdaa6dedbab33c2f26c512b709"' : 'data-target="#xs-components-links-module-HistoryModule-54a9e5bdaa6dedbab33c2f26c512b709"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoryModule-54a9e5bdaa6dedbab33c2f26c512b709"' :
                                            'id="xs-components-links-module-HistoryModule-54a9e5bdaa6dedbab33c2f26c512b709"' }>
                                            <li class="link">
                                                <a href="components/HistoryPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoryPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryRoutingModule.html" data-type="entity-link">HistoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InboxModule.html" data-type="entity-link">InboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InboxModule-1f90b0128881d98260e11c13f73bc861"' : 'data-target="#xs-components-links-module-InboxModule-1f90b0128881d98260e11c13f73bc861"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InboxModule-1f90b0128881d98260e11c13f73bc861"' :
                                            'id="xs-components-links-module-InboxModule-1f90b0128881d98260e11c13f73bc861"' }>
                                            <li class="link">
                                                <a href="components/InboxPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InboxPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InboxRoutingModule.html" data-type="entity-link">InboxRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarMaterialModule.html" data-type="entity-link">NavbarMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link">NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavbarModule-65e8cf98bb0c930ec257bbebade2f9a5"' : 'data-target="#xs-components-links-module-NavbarModule-65e8cf98bb0c930ec257bbebade2f9a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-65e8cf98bb0c930ec257bbebade2f9a5"' :
                                            'id="xs-components-links-module-NavbarModule-65e8cf98bb0c930ec257bbebade2f9a5"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewProposalModule.html" data-type="entity-link">NewProposalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewProposalModule-d9ad1c4758d857d24f5414fa92699363"' : 'data-target="#xs-components-links-module-NewProposalModule-d9ad1c4758d857d24f5414fa92699363"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewProposalModule-d9ad1c4758d857d24f5414fa92699363"' :
                                            'id="xs-components-links-module-NewProposalModule-d9ad1c4758d857d24f5414fa92699363"' }>
                                            <li class="link">
                                                <a href="components/NewProposalPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewProposalPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewProposalRoutingModule.html" data-type="entity-link">NewProposalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-e5d0bc1c081435f179ba4c009a8831c1"' : 'data-target="#xs-components-links-module-ProfileModule-e5d0bc1c081435f179ba4c009a8831c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-e5d0bc1c081435f179ba4c009a8831c1"' :
                                            'id="xs-components-links-module-ProfileModule-e5d0bc1c081435f179ba4c009a8831c1"' }>
                                            <li class="link">
                                                <a href="components/ProfilePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-ead3cef7b94588b3c58fc38f1518e329"' : 'data-target="#xs-components-links-module-RegisterModule-ead3cef7b94588b3c58fc38f1518e329"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-ead3cef7b94588b3c58fc38f1518e329"' :
                                            'id="xs-components-links-module-RegisterModule-ead3cef7b94588b3c58fc38f1518e329"' }>
                                            <li class="link">
                                                <a href="components/RegisterPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link">RegisterRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuctionsDataService.html" data-type="entity-link">AuctionsDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommunicatorService.html" data-type="entity-link">CommunicatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkingService.html" data-type="entity-link">NetworkingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdvertisedAuction.html" data-type="entity-link">AdvertisedAuction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Auction.html" data-type="entity-link">Auction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommunicatorProtocol.html" data-type="entity-link">CommunicatorProtocol</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});