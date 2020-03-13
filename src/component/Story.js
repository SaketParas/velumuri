import React, { Component } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PieChartIcon from '@material-ui/icons/PieChart';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ExtensionIcon from '@material-ui/icons/Extension';
import SearchIcon from '@material-ui/icons/Search';


class story extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="topNav text-light d-flex justify-content-around">
                        <div></div>
                        <div>
                            <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" className="logoImg" />
                        </div>
                        <div><WidgetsIcon />CHANNELS</div>
                        <div className="text-white-50"><BookmarkIcon />BOOKMARKS</div>
                        <div className="text-white-50"><PieChartIcon />OVERVIEW</div>
                        <div className="text-white-50"><ExtensionIcon />WIDGETS</div>
                        <div></div>
                        <div></div>
                        <div>
                            <span>
                                <SearchIcon />
                            </span>
                            <span>
                                <img src="https://www.xing.com/image/7_0_a_8b3e07c17_15962515_3/lea-schneider-foto.1024x1024.jpg" className="leaImg mx-3" />
                            </span>
                            <span className="h5 mt-4">Lea Schneider</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="navbar d-flex justify-content-around bg-light">
                    <div></div>
                    <div></div>
                    <div className="text-primary">Trending</div>
                    <div>For You</div>
                    <div>Cooking</div>
                    <div>Nature</div>
                    <div>Science</div>
                    <div>Travel</div>
                    <div>Climate</div>
                    <div>Music</div>
                    <div>People</div>
                    <div></div>
                    <div className="line"></div>
                    <div></div>
                    <button className="button font-weight-bold btn btn-outline-secondary">Explore</button>
                    <div></div>
                </div>


                <div class="card-group mt-5 container">

                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <div class="card-body row">
                            <h2 class="card-title text pl-5 mt-4 pr-3">Fresh wave of climate strikes take place arond the world.</h2><br />
                            <h5 className="text-info pl-5 py-3 pr-3"><RssFeedIcon />The Guardian</h5>
                            <h5 className="text-muted p-3"><CalendarTodayIcon />Today</h5>
                            <div className="nature mt-3 offset-2">
                                <small className="font-weight-bold">NATURE</small>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="container mt-5">
                    <div class="card-deck">
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" class="card-img-top" style={{ "height": "215px" }} alt="..." />
                            <div class="card-body p-3">
                                <h3 class="card-title">Arctic sea ice extent hits record low for winter maximum</h3>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="text-danger font-weight-bold"><RssFeedIcon />CNN</div>
                                <div className="nature">NATURE</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"50%"}}>
                            <img src="https://cdn.shopify.com/s/files/1/0071/1167/1926/products/Cartoon_Moon_Beauty_Embroidery_Cross_Stitch_5D_DIY_Diamond_Painting_Kits_UK_grande.jpg?v=1571724152" style={{ "height": "215px" }} class="card-img-top" alt="..." />
                            <div class="card-body p-3">
                                <h3 class="card-title">New battery for smartphone can now charge in a minute</h3>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="text-primary font-weight-bold"><RssFeedIcon />Retuers</div>
                                <div className="nature" style={{ "width": "130px" }}>TECHNOLOGY</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://media.gettyimages.com/photos/cropped-image-of-person-eye-picture-id942369796?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body p-3">
                                <h3 class="card-title">The best Tropical plant you can grow indoors</h3>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="text-danger font-weight-bold"><RssFeedIcon />CNN</div>
                                <div className="nature">NATURE</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-around footer mt-5 text-black-50">
                    <div></div>
                    <div>About</div>
                    <div>Terms and Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Contact</div>
                    <div></div>
                    <div>
                        <img src="https://blog.skyprivate.com/wp-content/uploads/2018/10/facebook-twitter-instagram-png-3.png" className="socialIcon" />
                    </div>
                    <div>@2019 All rights reserved</div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default story
