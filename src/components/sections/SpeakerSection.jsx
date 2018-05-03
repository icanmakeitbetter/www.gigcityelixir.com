import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "emotion";
import { orange } from "../../styles/variables";

import Bio from "../Bio";

import brucePic from "./../../images/bruce.jpg";
import davePic from "./../../images/dave.jpg";
import johnPic from "./../../images/john.jpg";
import mikiPic from "./../../images/miki.jpg";
import hannahPic from "./../../images/hannah.jpg";
import chrisPic from "./../../images/chris.jpg";
import jamesPic from "./../../images/james.jpg";
import stuPic from "./../../images/stu.jpg";
import chriskPic from "./../../images/chrisk.jpg";
import annanPic from "./../../images/annan.jpg";
import JeffMPic from "./../../images/jeffm.jpg";

const DavesBio = (
  <div>
    <p>
      Dave Thomas has written code just about every day in the last 45 years.
      One day he’ll get it right.
    </p>
    <p>
      He’s an author: The Pragmatic Programmer, The Manifesto for Agile Software
      Development, Programming Ruby, Agile Web Development with Rails, and
      recently Programming Elixir. He speaks at conferences around the world,
      and runs training for folks who want to enjoy themselves while learning
      (kind of like a Comedy Defensive Driving class).
    </p>
    <p>
      But mostly he writes code; sometimes to solve problems, sometimes to
      understand problems, and often to create them.
    </p>
    <p>
      He has strong and controversial views on how Elixir should be written;
      prepare to be both entertained and annoyed.
    </p>
  </div>
);

const JohnHsBio = (
  <p>
    John Hughes has been a functional programming enthusiast for more than
    thirty years, at the Universities of Oxford, Glasgow, and since 1992
    Chalmers University in Gothenburg, Sweden. He served on the Haskell design
    committee, co-chairing the committee for Haskell 98, and is the author of
    more than 75 papers, including "Why Functional Programming Matters", one of
    the classics of the area. With Koen Claessen, he created QuickCheck, the
    most popular testing tool among Haskell programmers, and in 2006 he founded
    Quviq to commercialise the technology using Erlang.
  </p>
);

const BrucesBio = (
  <p>
    Bruce is a mountain biker, climber, and father of two from Chattanooga. He
    is the author of more than ten books, including Seven Languages in Seven
    Weeks, Programming Phoenix, and Adopting Elixir. As the Chief Technology
    Officer of icanmakeitbetter.com, he is responsible for developing the
    icanmakeitbetter market research community platform using Elixir and Ruby
    using small, productive teams.
  </p>
);

const MikiBio = (
  <p>
    Miki Rezentes transitioned to software engineering after many years of
    teaching. Previously a javascripter, Miki became a Rubyist when she joined
    her current team at Spreedly. The mother of five enjoys learning, teaching,
    solving problems, eating, skating, volleyball and pranks. Miki holds two
    hackathon titles from Rally Software.
  </p>
);

const HannahsBio = (
  <div>
    <p>
      Hannah Howard is a senior developer and tech generalist with over 15 years
      experience in programming and other technical fields.
    </p>
    <p>
      Prior to programming, Hannah worked for 10 years in the non-profit sector
      in Los Angeles, specializing in LGBT advocacy and community organizing.
      Hannah returned to coding in 2012, and brings her passion and experience
      from community organizing to helping new programmers get up to speed on
      technical topics.
    </p>
  </div>
);

const ChrisBio = (
  <p>
    I’m the author of{" "}
    <a href="https://pragprog.com/book/cmelixir/metaprogramming-elixir">
      Metaprogramming Elixir
    </a>{" "}
    and creator of the{" "}
    <a href="http://www.phoenixframework.org">Phoenix Framework</a>. You can
    find me traveling the world to speak about Elixir, working with DockYard on{" "}
    <a href="https://dockyard.com/phoenix-consulting">
      Ember and Phoenix Consulting
    </a>, and teaching others the tools of the trade. I love spreading my joy
    for Elixir and helping others tackle interesting problems.
  </p>
);

const ChrisKBio = (
  <p>
    Chris is a software engineer building services and applications for Bleacher
    Report. Although he started out writing C for embedded systems, these days
    he spends his time in Elixir, Haskell, Go, and Rust. When not writing code
    for work, Chris can be found writing code for fun, talking about the joys of
    functional programming, playing pinball, roasting coffee, or building lego
    with his kids.
  </p>
);

const StuBio = (
  <div>
    <p>
      Stuart Halloway is a founder and President of Cognitect, Inc. (<a href="http://cognitect.com">
        www.cognitect.com
      </a>). He is a <a href="http://clojure.org/">Clojure committer</a>, and a
      developer of the <a href="http://datomic.com/">Datomic</a> database.
    </p>
    <p>
      Stuart has spoken at a variety of industry events, including StrangeLoop,
      Clojure/conj, EuroClojure, ClojureWest, SpeakerConf, QCon, GOTO, OSCON,
      RailsConf, RubyConf, JavaOne, and NFJS.
    </p>
    <p>
      Stuart has written a number of books and technical articles. Of these, he
      is most proud of{" "}
      <a href="http://pragprog.com/book/shcloj2/programming-clojure">
        Programming Clojure
      </a>.
    </p>
    <p>
      Learn more about Stu's presentations on his{" "}
      <a href="https://github.com/stuarthalloway/presentations/wiki">wiki</a>.
    </p>
  </div>
);

const AnnanBio = (
  <p>
    Anna is a San Francisco native who has done a lot of work in the ruby
    community in SF and currently sits on the board of RailsBridge. She has
    taken this community organizing experience and last year co-founded
    ElixirBridge in SF - an organization that offers free weekend-long
    workshops, with the goal of creating an inclusive welcoming space for
    underrepresented populations in tech to learn elixir. By day she works as a
    Developer at Carbon Five. When not in front of a keyboard, she is trying to
    get better at climbing rocks.
  </p>
);

const JamesBio = (
  <p>
    James Edward Gray II has been a continuously running system for over 40
    years now. He spends his days processing a work message queue that builds
    and maintains Web applications. His evenings are primarily dominated by
    messages from his seven-year-old child process. When he can get away from
    the chatter, he prefers to hibernate with his linked wife process. This
    diverse and significant demand has really taught James the value of
    accomplishing more with less code.
  </p>
);

const JeffMBio = (
  <div>
    <p>
      Jeff’s professional career has been focused on applying computation to
      engineering problems — the majority of which have involved simulation,
      calibration, system control, and optimization. The more he’s studied
      machine learning, the more he’s become motivated to understand how it can
      be applied effectively to complex problems in the real (engineering)
      world. At Very, he brings his applied mathematics and machine learning
      knowledge to a wide array of problems and projects involving images,
      natural language, social graphs, temporal data, and geospacial data. His
      academic background in control systems and robotics, has allowed him to
      contribute to IoT hardware projects at Very as well.
    </p>
    <p>
      Before joining Very, Jeff was a research and design engineer at Variable,
      Inc., where he developed proprietary mathematical models for accurate
      color measurement; set up a scientific analysis python environment with
      custom modules for internal company use; and built and deployed internal
      tools that allow non-technical workers to apply machine learning models.
    </p>
  </div>
);

const SpeakerSection = () => (
  <SectionWrapper header="Our Speakers" subhead="More to be announced.">
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-column-gap: 30px;
      `}>
      <Bio
        name="Dave Thomas"
        bioName="Dave's"
        bio={DavesBio}
        pic={davePic}
        twitterLink="https://twitter.com/pragdave"
        twitterHandle="@pragdave"
        siteLink="https://pragdave.me/"
        siteTitle="pragdave.me"
        alt="picture of dave thomas"
      />
      <Bio
        name="John Hughes"
        bioName="John's"
        bio={JohnHsBio}
        pic={johnPic}
        twitterLink="https://twitter.com/rjmh"
        twitterHandle="@rjmh"
        siteLink="http://www.cse.chalmers.se/~rjmh/"
        siteTitle="http://www.cse.chalmers.se/~rjmh/"
        alt="picture of johns hughes"
      />
      <Bio
        name="Miki Rezentes"
        bioName="Miki's"
        bio={MikiBio}
        twitterLink="https://twitter.com/mikirez"
        twitterHandle="@mikirez"
        pic={mikiPic}
        alt="picture of Miki Rezentes"
      />
      <Bio
        name="Hannah Howard"
        bioName="Hannah's"
        twitterLink="https://twitter.com/techgirlwonder"
        twitterHandle="@techgirlwonder"
        bio={HannahsBio}
        pic={hannahPic}
        alt="picture of Hannah Howard"
      />
      <Bio
        name="Chris McCord"
        bioName="Chris'"
        twitterLink="https://twitter.com/chris_mccord"
        twitterHandle="@chris_mccord"
        bio={ChrisBio}
        pic={chrisPic}
        alt="picture of chris mccord"
      />
      <Bio
        name="Stuart Halloway"
        bioName="Stuart's"
        twitterLink="https://twitter.com/stuarthalloway"
        twitterHandle="@stuarthalloway"
        siteLink="https://cognitect.com/"
        siteTitle="https://cognitect.com/"
        bio={StuBio}
        pic={stuPic}
        alt="picture of Stuart Halloway"
      />
      <Bio
        name="Bruce Tate"
        bioName="Bruce's"
        bio={BrucesBio}
        twitterLink="https://twitter.com/redrapids"
        twitterHandle="@redrapids"
        siteLink="http://icanmakeitbetter.com/"
        siteTitle="http://icanmakeitbetter.com/"
        pic={brucePic}
        alt="picture of bruce tate"
      />
      <Bio
        name="Anna Neyzberg"
        bioName="Anna's"
        bio={AnnanBio}
        twitterLink="https://www.twitter.com/ANeyzb"
        twitterHandle="@ANeyzb"
        pic={annanPic}
        alt="picture of Anna"
      />
      <Bio
        name="Chris Keathley"
        bioName="Chris'"
        bio={ChrisKBio}
        twitterLink="https://twitter.com/ChrisKeathley"
        twitterHandle="@ChrisKeathley"
        pic={chriskPic}
        alt="picture of Chris Keathley"
      />
      <Bio
        name="Jeff McGhee"
        bioName="Jeff's"
        bio={JeffMBio}
        pic={JeffMPic}
        alt="picture of Jeff McGhee"
      />
      <Bio
        name="James Edward Gray II"
        bioName="James'"
        bio={JamesBio}
        twitterLink="https://twitter.com/JEG2"
        twitterHandle="@JEG2"
        siteLink="http://graysoftinc.com/"
        siteTitle="http://graysoftinc.com/"
        pic={jamesPic}
        alt="picture of james edward gray ii with brow furrowed"
      />
    </div>
  </SectionWrapper>
);

export default SpeakerSection;
