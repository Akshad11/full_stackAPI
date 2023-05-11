import Courses from './Courses';
import Getall from './Getall'
import From from './Form'
import Delete from './Delete'
import Get from './Get'
import Patch from './Patch'

function App() {
  return (
    <div>
      <Getall></Getall>
      <From />
      <Delete />
      <Get />
      <Patch />
    </div>
  );
}

export default App;
