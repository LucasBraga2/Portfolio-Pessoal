import Sobre from './Sobre';
import Experiencia from './Experiencia';
import Skills from './Skills';

function Home() {
  return (
    <>
      <section id="sobre" className="mb-16 pt-10">
        <Sobre />
      </section>

      <section id="experiencia" className="mb-16 pt-10">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <Experiencia />
        </div>
      </section>

      <section id="skills" className="pt-10">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <Skills />
        </div>
      </section>
    </>
  );
}

export default Home;