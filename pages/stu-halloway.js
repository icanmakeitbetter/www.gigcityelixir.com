import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="stu.jpg"
      name="Stu Halloway"
      subtitle="Cognitect, Clojure, Datomic"
    >
      <p>
        Stuart Halloway is a founder and President of Cognitect, Inc. (
        <a href="http://cognitect.com">www.cognitect.com</a>
        ). He is a <a href="http://clojure.org/">Clojure committer</a>, and a
        developer of the <a href="http://datomic.com/">Datomic</a> database.
      </p>
      <p>
        Stuart has spoken at a variety of industry events, including
        StrangeLoop, Clojure/conj, EuroClojure, ClojureWest, SpeakerConf, QCon,
        GOTO, OSCON, RailsConf, RubyConf, JavaOne, and NFJS.
      </p>
      <p>
        Stuart has written a number of books and technical articles. Of these,
        he is most proud of{" "}
        <a href="http://pragprog.com/book/shcloj2/programming-clojure">
          Programming Clojure
        </a>
        .
      </p>
      <p>
        Learn more about Stu's presentations on his{" "}
        <a href="https://github.com/stuarthalloway/presentations/wiki">wiki</a>.
      </p>
      <ExternalLink href="https://twitter.com/stuarthalloway">
        @stuarthalloway
      </ExternalLink>
    </BioPage>
  );
}
