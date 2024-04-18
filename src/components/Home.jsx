import React from "react";
import vg from "../assets/vg.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <main>
          <h1>TECHSTAR</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />

        <p>
          We are your one and only Solution to the tech problems you face every{" "}
          <br />
          day. We are leading tech company whose aim is to increase the problem{" "}
          <br />
          solving ability in children.
        </p>
      </div>

      <div className="home3">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            aliquid autem vel . Quaerat ullam sed quod perspiciatis ab sapiente
            voluptatibus molestiae a rerum officia cupiditate dicta quae
            laboriosam nihil mollitia, impedit doloribus ex pariatur eaque
            ducimus harum possimus ipsam eveniet perferendis. Veritatis officia
            dolores nesciunt, illum suscipit beatae ducimus tempora, quisquam
            repellendus alias obcaecati, explicabo earum provident est ipsa.
            Officiis, tempora modi dolor exercitationem cumque amet ratione hic
            placeat tenetur alias vitae pariatur deserunt esse nostrum delectus
            fuga, a ipsa eum nam, necessitatibus qui ut sequi quis. Possimus
            sint cum officia modi praesentium vel est quos quae asperiores
            expedita similique minus vero at aperiam autem, deleniti, quibusdam
            ex, molestiae eaque fugit. Sunt tempora odio omnis nostrum ipsa
            repellat dolore blanditiis exercitationem consequuntur, cupiditate
            asperiores ea suscipit, consequatur aut libero? Voluptates?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillYoutube />
              <p>You Tube</p>
            </div>

            <div
              style={{
                animationDelay: "1.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
