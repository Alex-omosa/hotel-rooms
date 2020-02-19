import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
    </React.Fragment>
  );
}
