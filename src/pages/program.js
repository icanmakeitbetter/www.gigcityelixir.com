import React from "react";
import Link from "gatsby-link";
import SectionWrapper from "../components/SectionWrapper";

const Program = () => (
  <SectionWrapper
    header="Program"
    subhead="A word from conference founder and head organizer Bruce Tate."
    suppressLine={true}>
    <p>
      Some of the best programmers in the world are coming to Chattanooga, and
      you’ll want to be there to hear them.
    </p>
    <p>
      James E Gray II and Dave Thomas both had key roles in the discovery and
      evolution of the Ruby language. John Hughes was on the committee that
      created Haskell and has worked to enhance the language since then. Stuart
      Halloway and myself both wrote award winning books in the Java space so we
      know object oriented programming.
    </p>
    <p>
      As a conference, GigCityElixir has one overarching strength, our speakers.
      With six speakers who have done keynotes across two or more continents, we
      have access to many of the best programmers in the world. As organizers,
      the goal of every session is the same: to make each attendee a better
      programmer.
    </p>

    <h3>New Programming Techniques for a New World</h3>

    <p>
      The programming industry is in transition. The long dominant paradigm of
      Object Oriented Programming is giving ground to the newly revitalized
      school Functional Programming. Most of your old knowledge still applies,
      but you'll need to cock your head and squint a little to see it in new
      contexts. You need a program designed to bridge the gap from experts who
      have lived on both sides and that's exactly what we've built with
      GigCityElixir.
    </p>
    <p>
      The best way to become a better programmer is to see great programmers
      code. We will focus on sessions that demonstrate how great programmers
      solve problems. Many conferences spend time on individual frameworks and
      tools to solve specific problems. While that is a fine approach, we offer
      a conference that focuses on programming principles and concepts instead.
    </p>
    <h3>Object Oriented Programmers</h3>

    <p>
      Elixir is a new programming language, but you don’t have to be an Elixir
      programmer to take advantage. Most of our talks will focus on techniques
      to solve everyday problems. For example,
    </p>

    <ul>
      <li>
        The Java, Ruby, Python, JavaScript and C# programming languages support
        lambdas, or anonymous functions, yet most programmers only scratch the
        surface in their use. Learn to use lambdas to enforce policies and delay
        execution.{" "}
      </li>
      <li>
        As processor designs include more cores and require more concurrency,
        programming without side effects becomes more important. Object oriented
        developers have traditionally embraced changing state but can learn
        techniques to improve their handling of concurrency. The final and
        sealed keywords, found in Java and Elixir, are examples of this. Also
        learn API designs that offer better layering for concurrency and
        strategies to handle errors.{" "}
      </li>
      <li>
        Modern APIs have greater demands than ever before. Learn how to build
        them in layers that will make more sense to your users.{" "}
      </li>
    </ul>

    <p>
      This conference represents where programming is going. Learning to be
      fluent in more than one language improves the tools you have to apply to
      each one. In short, a great programmer is a multilinguist. See how they
      use their tool sets to express beautiful code and learn to do more of the
      same yourself.
    </p>
    <h3>Functional Programmers</h3>
    <p>
      If you are interested in exploring the future of programming or are
      already a functional programmer, we have something for you too. With so
      many gifted teachers and talks that go beyond “how” to “why”, this
      conference will improve your everyday craft in ways both surprising and
      predictable.
    </p>
    <h3>Innovators</h3>
    <p>
      If you are coming from a startup, learn about the techniques and tools
      that can give you an edge. With folks from successfully acquired startups
      like Bleacher Report and icanmakeitbetter, you can see talks from the
      folks that made those platforms scale and have conversations with people
      making difficult programming decisions for their businesses every day.
    </p>
    <p>Can’t wait to see all of you there.</p>

    <p>~ Bruce Tate</p>
  </SectionWrapper>
);

export default Program;
