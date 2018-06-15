import React from "react";
import "./About.css";
import NavHeader from "../NavHeader/NavHeader";
import { Icon } from "antd";

const About = () => {
  return (
    <div className="about-full">
      <NavHeader />
      <div className="about">
        <div className="about-contents">
          <span className="about-company-title">Hermes CS</span>
          <span className="about-title">
            <Icon type="info-circle-o" /> About
          </span>
          <div className="about-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              fermentum ut lectus quis lacinia. Sed quis venenatis sem. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Vestibulum semper tempor magna non convallis. Duis
              tincidunt purus nulla, quis suscipit dui accumsan et. Nunc nec
              risus nisl. Aliquam in arcu risus. Mauris vulputate mattis
              ultricies. Praesent porta enim ut ex lobortis tincidunt. Cras non
              mi et ex tempor maximus at vitae ipsum. Phasellus lorem elit,
              facilisis vel fermentum a, feugiat imperdiet lorem. Sed ultricies
              mi nulla, ac mattis sem congue et. Praesent dolor quam, vehicula
              eget scelerisque et, feugiat id enim. Etiam tristique sagittis
              arcu quis egestas. Sed vitae dolor pulvinar, laoreet mi vel,
              auctor odio. Phasellus erat metus, pellentesque ut sagittis a,
              facilisis eu enim.
            </p>
            <p>
              Nullam a volutpat nulla. Donec bibendum nisl ligula, euismod
              luctus purus malesuada et. Morbi commodo diam a odio suscipit
              faucibus. Donec dignissim pharetra eros. Donec vel tincidunt
              velit, in lacinia metus. Quisque et ultrices purus. Quisque
              ultrices, lectus nec tincidunt lacinia, massa sapien consequat mi,
              eu blandit dolor velit quis risus. Praesent ultrices ligula vel mi
              bibendum, in egestas ligula faucibus. Quisque in tortor nisi.
              Donec nibh felis, malesuada vitae lorem ac, varius dignissim eros.
              Donec sodales vehicula erat, a pretium metus tincidunt ac.
              Vestibulum vehicula, urna nec dictum aliquet, metus leo vehicula
              tellus, non malesuada arcu nunc sit amet urna. Mauris sem nibh,
              condimentum sit amet facilisis ac, ornare blandit ex.
            </p>
            <p>
              Aenean laoreet, neque eu ultricies tempus, metus ipsum elementum
              diam, ac maximus purus diam eu sapien. Phasellus ornare lobortis
              velit sed vulputate. Morbi finibus erat interdum fermentum
              tincidunt. Suspendisse quam lectus, tristique ultricies vehicula
              et, maximus a augue. Phasellus felis arcu, ornare et elit eu,
              feugiat ornare arcu. Cras sagittis blandit diam, ac faucibus erat
              ultrices a. Phasellus posuere volutpat consectetur. Fusce suscipit
              odio nec sollicitudin rutrum. In tempor metus ex, id lobortis mi
              aliquam vel. Nulla facilisi. Nulla facilisi. Ut molestie, elit sed
              semper sagittis, mi dolor bibendum turpis, a auctor eros neque sit
              amet ipsum. Proin id velit tortor. Curabitur pharetra rutrum
              magna. Quisque consequat eu urna dictum cursus.
            </p>
            <p>
              Vestibulum dictum, lectus vitae vehicula porta, velit mi sagittis
              orci, sed tincidunt nisl augue nec ligula. Ut sit amet rutrum
              lectus. Praesent varius, ex eget eleifend sollicitudin, quam leo
              hendrerit nisl, in sodales lorem odio vitae erat. Nullam in arcu
              justo. In ultrices, enim in sollicitudin ultricies, tellus lacus
              lacinia risus, id consequat purus quam vel tellus. Fusce vitae
              lacus malesuada, auctor quam lacinia, laoreet augue. Vestibulum
              convallis interdum leo at iaculis. Curabitur sit amet mattis est.
            </p>
            <p>
              Phasellus non quam ut velit rhoncus convallis at at tellus. Nam
              leo urna, ullamcorper eu mauris sed, maximus vestibulum est. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Morbi commodo blandit turpis, sit amet blandit
              sem eleifend eu. Donec quis urna feugiat, aliquet ante eleifend,
              eleifend arcu. Aliquam eget faucibus nibh, quis faucibus lectus.
              Nullam porttitor rutrum massa at faucibus"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
