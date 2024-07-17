import MultipleCard from "../multipleCards/MultipleCard"
import Lottie from 'lottie-react'
import animationData from '../../assets/images/Animation - 1721241433895.json'
import "./services.css"
const AppService = () => {
  return (
    <>
      <div className="services-sec ">
        <h1>SoftMark Solutions - Building Your Digital Future <span>|</span></h1>
        <div className="services-wrapper container">
          <div className="services-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quis doloribus architecto dicta officia eius iusto sequi nobis recusandae tempora, magnam soluta adipisci odio incidunt a vel eum sunt. Natus?
              Aliquam neque in totam, vero nulla a voluptatem cum reprehenderit nesciunt exercitationem doloribus tempora odit quas rerum quos quibusdam temporibus aut ab est, ipsam vel ipsa id! Tenetur, itaque veritatis.
              Modi provident ex accusamus minus accusantium dolore doloribus eos blanditiis.
            </p>
          </div>
          <div className="services-img">
            <div className="img">
            <Lottie animationData={animationData}  />
            </div>
          </div>
        </div>
      </div>
      <MultipleCard />
    </>
  )
}

export default AppService
