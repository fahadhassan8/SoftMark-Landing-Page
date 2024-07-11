
import img1 from '../../assets/images/card-1.png';
import img2 from '../../assets/images/card-2.png';
import img3 from '../../assets/images/card-3.png';
import img4 from '../../assets/images/card-4.png';
import img5 from '../../assets/images/card-5.png';
import Cards from '../Cards/Cards';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './multipleCard.css';

const MultipleCard = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const serviceData = [
    {
      path: img1,
      title: 'Web Development',
      para: 'Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.',
    },
    {
      path: img2,
      title: 'Mobile App Development',
      para: 'Crafting seamless and intuitive mobile experiences tailored to your unique vision. From concept to launch, trust our team to bring your app idea to life with precision and innovation.',
    },
    {
      path: img3,
      title: 'Search Engine Optimization',
      para: 'Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.',
    },
    {
      path: img4,
      title: 'Digital Marketing',
      para: 'Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.',
    },
    {
      path: img5,
      title: 'Logo Design',
      para: 'Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.',
    },
  ];

  return (
    <div className="card-sec">
      <div className="main-heading" data-aos="fade-up" data-aos-duration="1500">
        <h1>Our Services</h1>
      </div>
      <div className="sub-cards container">
        {serviceData.map((item, index) => (
          <Cards key={index} path={item.path} title={item.title} para={item.para} />
        ))}
      </div>
    </div>
  );
};

export default MultipleCard;
