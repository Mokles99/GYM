import React from "react";
import BannerImage from "../assets/detailsrpm2.png";
import "../styles/Detailsrpm.css";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";
import BannerImage1 from "../assets/slider6.jpeg";

function Detailsrpm() {
  return (
    <div className="">
      <div
        class="background-title"
        style={{ backgroundImage: "url(" + BannerImage1 + ")" }}
      >
        <h1 className="details-title">RPM™</h1>
        <div className="under-title"> Courses / RPM™ / About RPM™ </div>
      </div>
      <div className="section-title">
        <h1>LE RPM™ EST PLUS FACILE QUE LE VÉLO</h1>
        <br></br>
        <div className="section-title-border"></div>
      </div>
      <div className="section-description">
        <p>
          Inspiré de la course cycliste, le RPM™ simule des montées et des
          sprints au cours d’un entraînement où vous contrôlez l’intensité.
        </p>
      </div>
      <div className="section-img">
        <img src={BannerImage} />
      </div>
      <div className="section-centent">
        <p>
          Un maximum de résultats avec un minimum d’impact sur vos
          articulations. Sur une musique énergisante, prenez la route avec votre
          coach qui vous emmènera sur un parcours fait de collines à grimper, de
          sprints et de plats. Vous contrôlez votre niveau de résistance et la
          vitesse pour améliorer votre condition physique au fil du temps.
        </p>
        <p>
          Le RPM™ est un excellent cours pour se sentir mieux dans son corps,
          transpirer à grosses gouttes, évacuer le stress et sécréter des
          endorphines. Imprégnez-vous de l’ambiance générale, pédalez avec le
          reste du groupe dans le peloton, attaquez quand votre instructeur vous
          le dit. Révélez le cycliste qui est en vous !
        </p>
      </div>

      <div className="section-info">
        <div className="section-info-1">
          <div className="section-title">
            <h3>
              {" "}
              <BsEmojiSmile></BsEmojiSmile> Les avantages du RPM™
            </h3>
            <br></br>
            <div className="section-title-border"></div>
          </div>

          <ul className="section-info-centent">
            <li>Améliore votre capacité cardiovasculaire</li>
            <li>Tonifie et sculpte vos jambes, vos hanches et vos fesses</li>
            <li>
              Brûle jusqu’à 700 calories au cours d’une séance normale de 45
              minutes
            </li>
            <li>
              Libère des endorphines pour vous apporter un sentiment d’euphorie
              naturelle et vous permettre de vous sentir en super forme
            </li>
          </ul>
        </div>
        <div className="section-info-2">
          <div className="section-title">
            <h3>
              {" "}
              <AiOutlineInfo></AiOutlineInfo> C'est votre 1ére fois ?
            </h3>
            <br></br>
            <div className="section-title-border"></div>

            <p className="section-info-centent">
              Votre selle devrait être à hauteur de hanche, et vous devriez
              avoir les genoux légèrement pliés lorsque vos pieds sont situés au
              point le plus bas de la rotation. N’hésitez pas à demander à votre
              instructeur RPM de vous montrer comment régler votre vélo et tous
              les mouvements de base du cyclisme. Commencez par 4 à 5 chansons
              et augmentez progressivement jusqu’à faire un cours complet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailsrpm;
