import { FaFacebook, FaInstagram  } from "react-icons/fa";
import comingSoonImage from '../../images/about/coming-soon.png';
import gerald from './members-img/gerald-member.png'
import './member-list.css'
const MemberList = () => {
  return (
    <div className="wehoops-members">
    {/* MEMBERS SECTION */}
    <div className="members-section">
      <div className="members-header">
        <h2 className="members-title">Wehoops Members</h2>
      </div>
      {/* MEMBERS LIST */}
      {/* MEMBER ONE */}
      <div className="members-list">
        <div className="member member-one" >
          <img className="members-image" src={gerald} alt="Gerald Achazo" />
          <div className="members-info">
            <p className="sub-member-title">Founder</p>
            <h3 className="members-name">Gerald Achazo</h3>
            <div className="members-info-text">
              <p>
                Gerald Achazo is a dedicated and passionate sports and organization manager with a profound love for basketball. 
                With years of experience in multiple industries, Gerald has honed his skills in managing teams, organizing events, and fostering a positive and collaborative environment. 
                His ability to connect with people, especially kids, makes him a standout leader and mentor. 
              </p>
              <br />
              <p>
                Outside of his work with WEHOOPS, Gerald runs two additional non-profit organizations that focus on giving back to the community of Wetaskiwin. 
                His main professional role is as a Fabrication Supervisor at Vulcraft, Nucor Canada, where he has developed strong leadership and management skills. 
                Gerald is also a professional photographer and videographer, specializing in weddings, corporate events, concerts, and more. 
              </p>
                <br />
              <p>
                On a personal level, Gerald is looking forward to welcoming a beautiful daughter this coming summer. 
                His commitment to excellence, genuine care for others, and diverse skill set make him an invaluable asset to any sports organization and the broader community.
              </p>
            </div>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* MEMBER TWO */}
      <div className="members-list">
        <div className="member member-two">
        <div className="members-info">
            <p className="sub-member-title">Founder</p>
            <h3 className="members-name">Xriz Mission</h3>
            <p className="members-info-text">
              {`Raised on the courts of the urban game, Xriz brings a streetball edge to the sidelines.
              With a streetball pedigree and a passion for nurturing young minds, 
              he seamlessly balances his roles as a dedicated coach and a compassionate caregiver.
              As a former streetball player, Xriz brings a unique flair and grit to his coaching style, 
              inspiring his players to reach new heights both physically and mentally.
              But Xriz talents extend far beyond the basketball court - he's also a dedicated caregiver, armed  with a deep understanding
              of child development that allows him to provide enriching experiences for children of all ages. By day, he leads his team to victory,
              honing their athletic skills and mental toughness. But his true passion lies in his role as a caregiver,
              where he promotes healthy attachments, physical and intellectual development, and social and emotional well-being.`}
            </p>
            <div className="list-of-details">
              <p className="member-achievement-title">Canada Basketball:</p>
              <ul className="achievement-item">
                <li className="achievement-list">Fundamentals Certified</li>
                <li className="achievement-list">Learn to Train Certified</li>
                <li className="achievement-list">Professional Development Certified</li>
                <li className="achievement-list">In training: Train to train, Train to compete</li>
              </ul>
            </div>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
        </div>
      </div>
      {/*  */}
      {/* MEMBER THREE */}
      <div className="members-list">
        <div className="member member-three">
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
          <div className="members-info">
            <p className="sub-member-title">Director</p>
            <h3 className="members-name">Alec Tolosa</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* MEMBER FOUR */}
      <div className="members-list">
        <div className="member member-four">
        <div className="members-info">
            <p className="sub-member-title">Director</p>
            <h3 className="members-name">Pierre Munoz</h3>
            <p className="members-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam. 
              Mauris  efficitur felis a ultrices lacinia. Fusce ex diam, faucibus vehicula  urna id, eleifend volutpat quam.
            </p>
            <div className="members-social-media">
              <a href="" target="_blank" className="member-social-link">
                <FaFacebook className="members-social-icon"/>
              </a>
              <a href="" target="_blank" className="member-social-link">
                <FaInstagram className="members-social-icon"/>
              </a>
            </div>
          </div>
          <img className="members-image" src={comingSoonImage} alt="Members Name" />
        </div>
      </div>
      {/*  */}
    </div>
    {/* OTHER MEMBERS LIST */}
    <div className="other-members-section">
      <div className="other-members-header">
        <h2 className="other-member-title">Other Members</h2>
      </div>
      <div className="other-members-list">
        <img className="other-image" src={comingSoonImage} alt="John Renz Quisao" />
        <img className="other-image" src={comingSoonImage} alt="JB Abad" />
        <img className="other-image" src={comingSoonImage} alt="Francis Zapata" />
        <img className="other-image" src={comingSoonImage} alt="Jayson Julian" />
      </div>
    </div>
  </div>
  )
}

export default MemberList
