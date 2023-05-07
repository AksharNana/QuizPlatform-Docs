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
                    <a href="index.html" data-type="index-link">quiz-platform documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' : 'data-target="#xs-components-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' :
                                            'id="xs-components-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookmarksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookmarksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FriendInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FriendInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FriendsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FriendsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeaderboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaderboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MasterAnswerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MasterAnswerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizAnswerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizAnswerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizTypeinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizTypeinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' : 'data-target="#xs-pipes-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' :
                                            'id="xs-pipes-links-module-AppModule-d77243a15aa0b9d87d269421889749637381066b8115db19a3769bcb597632d26850628b5dbe62108ea7d9be06d005c221a1dc72de3e5986561724ebf2c2972f"' }>
                                            <li class="link">
                                                <a href="pipes/BookFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterFriendsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterFriendsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                <a href="classes/AddBookmark.html" data-type="entity-link" >AddBookmark</a>
                            </li>
                            <li class="link">
                                <a href="classes/Answer.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bookmark.html" data-type="entity-link" >Bookmark</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQuiz.html" data-type="entity-link" >CreateQuiz</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUser.html" data-type="entity-link" >CreateUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUser.html" data-type="entity-link" >EditUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/FRIEND.html" data-type="entity-link" >FRIEND</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryArr.html" data-type="entity-link" >HistoryArr</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUser.html" data-type="entity-link" >LoginUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewAnswer.html" data-type="entity-link" >NewAnswer</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewQuestion.html" data-type="entity-link" >NewQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewQuestionAnswer.html" data-type="entity-link" >NewQuestionAnswer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quiz.html" data-type="entity-link" >Quiz</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnswer.html" data-type="entity-link" >UpdateAnswer</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuestion.html" data-type="entity-link" >UpdateQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
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
                                    <a href="injectables/AnswerService.html" data-type="entity-link" >AnswerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookmarkService.html" data-type="entity-link" >BookmarkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryService.html" data-type="entity-link" >HistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeaderboardService.html" data-type="entity-link" >LeaderboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link" >QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuizService.html" data-type="entity-link" >QuizService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EditProfileGuard.html" data-type="entity-link" >EditProfileGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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