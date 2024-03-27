import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {MainContext} from './context/MainContext';
import data from './data.js';
import Search from './components/header/search';
import Home from './components/home/Home';

function App(): React.JSX.Element {
  const [getData, setGetData] = useState(data);
  const [updata, setUpdata] = useState(data);
  return (
    <MainContext.Provider value={{getData, setGetData, updata, setUpdata}}>
      <SafeAreaView>
        <Search />
        <Home />
      </SafeAreaView>
    </MainContext.Provider>
  );
}
export default App;
