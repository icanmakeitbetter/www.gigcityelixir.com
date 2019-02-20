import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import AbstractModal from "../components/AbstractModal";

const JhA = (
  <p>
    Almost 30 years ago, I published “Why Functional Programming Matters”, a
    paper that was both a manifesto for functional programming, and a tutorial
    on some of its basic ideas. But the subject is much older than that! In this
    talk I’ll take a deep dive into the history of functional programming,
    covering selected highlights with both classic papers in the subject, and
    some personal favourites that may be a little less known.
  </p>
);

const PdA = (
  <p>
    Use the BEAM to take over remote nodes and create applications that
    replicate and deploy themselves! Sound ridiculous? Useful? The line between
    the two is often thin. All software grows in absurdity and eventually
    becomes difficult to change, Erlang provides us with constructs to manage
    this complexity. An invaluable but underused tool is the Application. How
    can it be (mis)used to enforce good architecture? Forget the last 10 years
    of devops and join the fun as we build ludicrously distributed systems in
    the name of leveraging the Application construct to limit our software's
    growing entropy.
  </p>
);

const JmA = (
  <div>
    <p>
      This talk is a saga covering the lifecycle of a project involving mobile
      development, hardware development, machine learning, and, most importantly
      beer. Work on this project yielded a scalable, modular, distributed
      self-pour draft beer system with Phoenix, Nerves, and Swift as the
      foundation along with a little AWS Rekognition sprinkled in. The talk will
      show what it was like to work on a project that was described by
      developers as “the most productive time period of my career”, and “the
      greatest thing I ever built”. The talk will involve process and decisions
      outside of writing code, but will dive deep on some technical details
      about our implementations on the Elixir side.
    </p>

    <p>
      The talk will fit most closely with the "Foundations" theme. As it will
      focus heavily on getting general "software development foundations"
      correct, and will touch on how Elixir can help with that.
    </p>
  </div>
);

const HhA = (
  <div>
    <p>
      TLDR: When we write web applications in Elixir, when do we reach into the
      Erlang ecosystem of tools to solve problems, and when do we fall back on
      well tested traditional web server solutions?
    </p>
    <p>
      When we write web applications in Elixir and Phoenix, we have all the
      technologies of the web (SQL databases, stateless servers, key-value
      caches like Redis) and all of the technologies of OTP (GenServers,
      Supervisors, ETS, and Mnesia) at our disposal. Our problem is not a lack
      of tools in our toolbox but having an embarrassment of riches -- we have
      so much technology it’s hard to know which tool to use when. This talk
      will look at several case studies in writing Elixir web servers, and
      examine when and why we might choose to employ a tool from OTP versus
      using an existing web solution. What novel solutions might we uncover
      combining these technology stacks? Is it possible to overuse OTP? How can
      OTP solve web server problems we might have thought incredibly hard if not
      impossible?
    </p>
  </div>
);

const BtOgA = (
  <div>
    <p>
      Since we were all two year old developers running around in our virtual
      crocs, Momma always told us we had to eat our veggies, wash behind our
      ears and COMMENT OUR CODE. Since that time, we’ve learned that Momma was
      sometimes wrong. Over time, COMMENTS BECOME LIES!
    </p>
    <p>
      In this talk, you’ll learn techniques that you can use instead of writing
      comments. We can’t promise you clean ears or vitamin C, but we can help
      your code be easier to understand, friendlier to maintain, and much more
      honest.
    </p>
  </div>
);

const CkA = (
  <div>
    <p>
      When you're building large scale systems failure is inevitable. Whether
      its dropped network connections, misbehaving hardware, massive GC pauses,
      or AWS outages our services should be able to weather the storm.
    </p>
    <p>
      At Bleacher Report we need to handle large scale traffic while also
      handling whatever transient failures come our way. To achieve this goal
      we've been exploring a design technique called Stacking Theory.
    </p>
    <p>
      In this talk we'll discuss stacking theory and see how to apply it in a
      real world system, we'll look at the role of data consistency in your
      applications, and finally we'll discuss ways to induce real failures in a
      production system to ensure the system is fault tolerant.
    </p>
  </div>
);

const ShA = (
  <div>
    <p>
      How did a functional Lisp like <a href="https://clojure.org/">Clojure</a>{" "}
      get anywhere near the analysts'{" "}
      <a href="https://redmonk.com/sogrady/2018/08/10/language-rankings-6-18/">
        top right quadrant
      </a>
      ?? Clojure's success is nothing short of astonishing. A decade of stable
      growth has made Clojure a tool of choice for expert developers from
      <a href="https://www.quora.com/Which-startups-are-using-Clojure">
        startups
      </a>{" "}
      to the world's{" "}
      <a href="https://twitter.com/roman01la/status/942469177444569089">
        largest
      </a>{" "}
      <a href="http://blog.cognitect.com/blog/2015/6/30/walmart-runs-clojure-at-scale">
        companies
      </a>{" "}
      alike.
    </p>
    <p>
      {" "}
      There are many reasons for Clojure's success, but in this talk I want to
      emphasize just one: stewardship. Open source stewardship can be difficult
      and emotionally draining, but I will show you how to maintain balance,
      stay effective, and have fun stewarding open-source software.
    </p>
  </div>
);

const MrA = (
  <p>
    You are solving a new and different problem. You have the problem. You’re
    ready to start working on the solution. BUT WAIT! Where do you start? What
    do you do when you don’t know what to do? This talk will outline how many
    successful engineers conquer the unknown and how you can do the same.
  </p>
);
const CmA = (
  <div>
    <p>
      When Chris joined the Elixir community in 2013, he had been working on an
      approach in Rails to write interactive applications in a simpler way. Five
      years later, that dream is finally becoming a reality.
    </p>
    <p>
      One of the most controversial and interesting talks of the ElxiirConf
      conference was a live demonstration of this technique. Hear about the
      vision that moved Chris from Ruby to Elixir and prompted the development
      of Phoenix.
    </p>
  </div>
);
const BmA = (
  <p>
    One of Elixir's selling points is concurrency. But what actually happens
    when requests start coming into your app. How does the BEAM handle and
    distribute the work efficiently and effectively? In this talk, we'll explore
    how the BEAM picks up tasks, schedules and executes them. We'll also look at
    ways to identify bottlenecks and unexpected behavior and ways to resolve
    them.
  </p>
);
const AnA = (
  <p>
    What is Crypto? Why should we care? And why Elixir? This talk explains how
    Cryptocurrencies work and why they are valuable. Then we build are own
    cryptocurrency in Elixir - gaining insight into why Elixir is an interesting
    option for the blockchain.
  </p>
);
const DtA = (
  <div>
    <p>
      We're a generation of programmers who grew up with object orientation and
      imperative programming. When we transition to languages such as Elixir
      (and even some modern idioms in JavaScript), some of our old reflexes are
      no longer appropriate. Others are deeply useful, but in different and
      surprising ways. So, as we work towards the ideal of "programming by
      transforming", we mustn't forget to transform our thinking, too.
    </p>
    <p>(ps: reducers are objects...)</p>
  </div>
);
const JgA = (
  <div>
    <p>
      In programming we have a ton of principles to guide our work, but have you
      ever noticed how many of them are closely related? YAGNI (You Ain’t Gonna
      Need It), don’t gold plate features, design for deletability, don’t be an
      architecture astronaut, etc. We have a disease. We use too much code. We
      know we have this disease, but we still do it!
    </p>
    <p>
      Exactly how much code should we throw at a given problem? When should we
      bring in a heavy dependency? Is it worth building custom tooling, for
      needs like monitoring or deployment, or are we better off just using
      what’s available off the shelf? I can’t answer these questions for your
      project, but I will cover how we can begin to sense make sense of these
      tradeoffs.
    </p>
    <p>
      More importantly, we can—and should—counter with this important question,
      how can the computer help us solve these problems? I have good news here:
      Elixir helps more than some other languages. I’ll prove it to you, with
      code that fits on slides.
    </p>
  </div>
);

const Program = () => (
  <SectionWrapper header="Schedule" suppressLine={true}>
    <table
      css={`
        th,
        td {
          vertical-align: top;
        }
        th {
          white-space: nowrap;
          font-weight: normal;
          color: rgba(0, 0, 0, 0.5);
        }
        thead th {
          color: #772858;
          font-size: 20px;
          font-family: "OdudoMono-Regular", sans-serif;
          border-bottom: 1px solid currentColor;
          text-align: center;
          padding-top: 1em;
        }
      `}
    >
      <thead>
        <tr>
          <th colspan="2">Friday, October 26th</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>08:00 - 08:45</th> <td>Breakfast and Registration</td>
        </tr>
        <tr>
          <th>08:45 - 09:00</th> <td>Welcome</td>
        </tr>
        <tr>
          <th>09:00 - 10:00</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Why Functional Programming Matters"
              description={JhA}
              speaker="John Hughes"
            />
          </td>
        </tr>
        <tr>
          <th>10:10 - 10:40</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Applications with a Capital A"
              description={PdA}
              speaker="Paul Dawson"
            />
          </td>
        </tr>
        <tr>
          <th>10:40 - 11:05</th> <td>Break</td>
        </tr>
        <tr>
          <th>11:05 - 11:50</th>{" "}
          <td>
            <AbstractModal
              talkTitle="How to Pour Beer with Your Face (and Not on Your Face)"
              description={JmA}
              speaker="Jeff McGehee"
            />
          </td>
        </tr>
        <tr>
          <th>12:00 - 12:30</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Using OTP Effectively In Elixir Web Applications"
              description={HhA}
              speaker="Hannah Howard"
            />
          </td>
        </tr>
        <tr>
          <th>12:30 - 01:45</th> <td>Lunch</td>
        </tr>
        <tr>
          <th>01:45 - 02:30</th>{" "}
          <td>
            <strong>Elixir Outlaws Live Recording</strong>
          </td>
        </tr>
        <tr>
          <th>02:40 - 03:10</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Lies, Damn Lies and Comments"
              description={BtOgA}
              speaker="Bruce Tate and Osa Gaius - Obaseki"
            />
          </td>
        </tr>
        <tr>
          <th>03:10 - 03:35</th> <td>Break</td>
        </tr>
        <tr>
          <th>03:35 - 04:05</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Building Resilient Systems with Stacking"
              description={CkA}
              speaker="Chris Keathley"
            />
          </td>
        </tr>
        <tr>
          <th>04:15 - 05:00</th>{" "}
          <td>
            <AbstractModal
              talkTitle="You’re Doing Too Much"
              description={JgA}
              speaker="James Edward Gray II"
            />
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colspan="2">Saturday, October 27th</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>08:00 - 08:45</th> <td>Breakfast</td>
        </tr>
        <tr>
          <th>08:45 - 09:00</th> <td>Welcome, Day 2</td>
        </tr>
        <tr>
          <th>09:00 - 09:45</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Stewardship Made Practical"
              description={ShA}
              speaker="Stu Halloway"
            />
          </td>
        </tr>
        <tr>
          <th>09:55 - 10:40</th>{" "}
          <td>
            <AbstractModal
              talkTitle="QED - Question Educated Development"
              description={MrA}
              speaker="Miki Rezentes"
            />
          </td>
        </tr>
        <tr>
          <th>10:40 - 11:05</th> <td>Break</td>
        </tr>
        <tr>
          <th>11:05 - 11:50</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Phoenix LiveView"
              description={CmA}
              speaker="Chris McCord"
            />
          </td>
        </tr>
        <tr>
          <th>12:00 - 12:30</th>{" "}
          <td>
            <AbstractModal
              talkTitle="That One, For Now"
              description={BmA}
              speaker="Ben Marx"
            />
          </td>
        </tr>
        <tr>
          <th>12:30 - 01:45</th> <td>Lunch</td>
        </tr>
        <tr>
          <th>01:45 - 02:30</th>{" "}
          <td>
            <strong>Panel Discussion</strong>
          </td>
        </tr>
        <tr>
          <th>02:40 - 03:20</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Crypto + Concurrency"
              description={AnA}
              speaker="Anna Neyzberg"
            />
          </td>
        </tr>
        <tr>
          <th>03:20 - 03:45</th> <td>Break</td>
        </tr>
        <tr>
          <th>03:45 - 04:30</th>{" "}
          <td>
            <AbstractModal
              talkTitle="Transforming Programming"
              description={DtA}
              speaker="Dave Thomas"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </SectionWrapper>
);

export default Program;
