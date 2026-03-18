import Hero from '../../../components/Hero';
import Features from '../../../components/Features';
import Menu from '../../../components/Menu';
import Story from '../../../components/Story';

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Features />
        <Menu />
        <Story />
      </div>
    </>
  );
}

export default Home;
