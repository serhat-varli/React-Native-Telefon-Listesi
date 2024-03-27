import React from 'react';
import {Text, FlatList, View, Image, StyleSheet} from 'react-native';
import {MainContext, useContext} from '../../context/MainContext';

function Home(): React.JSX.Element {
  const context = useContext(MainContext);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          style.listITem,
          {backgroundColor: index % 2 === 1 ? '#fafafa' : ''},
        ]}>
        <Image style={style.avatar} source={{uri: item.picture}} />
        <View>
          <Text>{item.name}</Text>
          <Text>{item.company}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {context.updata.length > 0 ? (
        <FlatList
          data={context.updata}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      ) : (
        <Text style={style.noDate}>Veri Bulunamadı</Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  listITem: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: '#eee',
  },
  noDate: {
    fontSize: 17,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    padding: 20,
    textAlign: 'center',
  },
});

export default Home;
