import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import ClientsHeader from '../components/ClientsHeader';
import ProjectsHeader from '../components/ProjectsHeader';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <ProjectsHeader />
      <hr />
      <Projects />
      <ClientsHeader />
      <hr />
      <Clients />
    </>
  );
}
