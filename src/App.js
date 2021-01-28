import GlobalStyles from './styles/global';
import Login from './Pages/Login/index';
import Chatroom from './Pages/Chatroom';






function App() {
  return (
    <>
      <GlobalStyles/>
      <h1>Hello World</h1>
      <section>
        <Login></Login>
        <Chatroom></Chatroom>
                {/* {user ? <Chatroom/> : <Login/>} */}
            </section>
    </>
  );
}

export default App;
