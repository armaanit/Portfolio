import { Element } from 'react-scroll';
import profilePic from './images/profilePic.jpg'
import { TypeAnimation } from 'react-type-animation';

function Introduction(){
    return (
        <Element name="introduction">
        <div className="intro pt-24">
            <div>
            <img className="profile-pic " src={profilePic} />
            </div>

            <div className="intro-content">
            <p className="text-3xl md:text-4xl font-bold mb-5">
            <TypeAnimation 
                        sequence={['Hi, I am Armaanit Singh', 1000,]}
                        repeat={0}
                        curson={true}
                        wrapper='p'
                    />
            </p>
            <p className="text-base md:text-lg block">
                I am a passionate learner and also a pretty enthusiastic person.
                I like to code and make websites.
                Average Cube Solver and loves to play different kinds of sports.
                Currently Studying at SRM.
            </p>
            </div>
        </div>
        </Element>
    )
}

export default Introduction;