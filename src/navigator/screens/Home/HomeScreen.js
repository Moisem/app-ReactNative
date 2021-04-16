import * as React from 'react';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Component } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, Image } from 'react-native';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('http://udylglsk.lucusvirtual.es/api/sliderPosts')
            //fetch('https://jsonplaceholder.typicode.com/posts')
            //fetch('https://reactnative.dev/movies.json')
            .then(console.log(this.data))
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.sliderPosts });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {

        const { data, isLoading } = this.state;

        return (
            <View style={styles.container}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatListSlider
                        data={data}
                        width={450}
                        timer={5000}
                        indicatorActiveColor={'#3DD6AF'}
                        indicatorInActiveColor={'black'}
                        indicatorActiveWidth={40}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Image style={{ flex: 1, justifyContent: "center" }} source={{ uri: item.image }} />
                        )}
                        onPress={id => alert(JSON.stringify(id))}
                    />
                )}
                <View style={styles.box2}>
                    <View style={styles.box21}></View>
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}></View>
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}></View>
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1, fontWeight: '300', fontSize: 40,
    },
    box1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8BE27E',
        maxHeight: 300,
        marginBottom: 30
    },
    box2: {
        flex: .5,
        flexDirection: 'row',
        margin: 25,
        justifyContent: 'center'
    },
    box21: {
        flex: 2,
        backgroundColor: '#3DD6AF',
        width: 100,
        margin: 5
    },
    box22: {
        flex: 2,
        backgroundColor: '#10BCE3',
        flexDirection: 'column',
        width: 100,
        margin: 5
    },
    box23: {
        flex: 2,
        backgroundColor: '#2469A0',
        flexDirection: 'column',
        width: 100,
        margin: 5
    },
});
