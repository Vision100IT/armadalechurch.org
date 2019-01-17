/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


import OurPeople from './pages/OurPeople';
import Events from './pages/Events';

import ContactUs from './pages/ContactUs';
import WhatWeBelieve from './pages/WhatWeBelieve';
import SundayService from './pages/AboutUs/SundayService';


import PastoralCare from './pages/Ministries/PastoralCare';
import ChildrensChurch from './pages/Ministries/ChildrensChurch';
import PraiseTeam from './pages/Ministries/PraiseTeam';
import GrowthGroups from './pages/Ministries/GrowthGroups';
import PrayerMeetings from './pages/Ministries/PrayerMeetings';
import MensBreakfast from './pages/Ministries/MensBreakfast';
import WomensMinistry from './pages/Ministries/WomensMinistry';
import BoysGirlsBrigades from './pages/Ministries/BoysGirlsBrigades';
import Helps from './pages/Ministries/Helps';
import BreadMinistry from './pages/Ministries/BreadMinistry';
import OurTeam from './pages/AboutUs/OurTeam';
import OurVision from './pages/AboutUs/OurVision';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
          <Route exact path="/SundayService" component={SundayService} />
          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Team" component={OurTeam} />
          <Route exact path="/Vision" component={OurVision} />

          <Route exact path="/PastoralCare" component={PastoralCare} />
          <Route exact path="/ChildrensChurch" component={ChildrensChurch} />
          <Route exact path="/PraiseTeam" component={PraiseTeam} />
          <Route exact path="/GrowthGroups" component={GrowthGroups} />
          <Route exact path="/PrayerMeetings" component={PrayerMeetings} />
          <Route exact path="/MensBreakfast" component={MensBreakfast} />
          <Route exact path="/WomensMinistry" component={WomensMinistry} />
          <Route exact path="/Brigades" component={BoysGirlsBrigades} />
          <Route exact path="/Helps" component={Helps} />
          <Route exact path="/Bread" component={BreadMinistry} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
