import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";

export default function VenueSection() {
  return (
    <SectionWrapper
      subhead={
        <div>
          <div className="ff-odudomono-sb">October 17, 2019</div>
          Device to the Cloud with Nerves and NervesHub
        </div>
      }
      header="Nerves Training"
    >
      <p>
        The Elixir language and Erlang runtime provide a productive and uniquely
        robust environment that is perfect for everything from embedded devices
        to cloud servers. This class extends on previous Nerves training by
        introducing device/server communication techniques and device management
        with NervesHub. Attendees will use real devices (with buttons and an
        OLED screen!) and build a simple multi-user game with the help of the
        authors of Nerves.
      </p>
      <p>
        The workshop is appropriate for beginners and expert Elixir programmers
        alike since it focuses more on embedded development than pure coding.
        Since Nerves development is rapidly improving, even veteran embedded
        Elixir programmers will learn new ways of making their experience
        better. Beginners to Elixir are encouraged to create toy projects and
        learn about GenServers and OTP releases beforehand.
      </p>
      <p>
        We will be providing Raspberry Pi's and accessories to use during the
        class. It is unnecessary to buy hardware. We provide purchase lists for
        buying the hardware afterwards and recommendations on equipment that is
        useful for embedded development.
      </p>
      <a
        css={buttonCss}
        href="https://ti.to/gig-city-elixir/gig-city-elixir-2019/with/ewepw4oabjo"
      >
        Reserve your training spot
      </a>
    </SectionWrapper>
  );
}
