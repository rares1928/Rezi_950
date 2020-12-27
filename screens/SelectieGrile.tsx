import React, { Component } from 'react';

import { Alert, LayoutAnimation,TouchableHighlight, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);

  }



  render() {
    return (
      <View style={styles.Panel_Holder}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={[styles.patratel,{backgroundColor: this.props.item.selected ? '#000000' :'#FFFFFF'}]}>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={[styles.category_View, {flex:1}]}>
            <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>
            <Image
              source= {require(this.props.item.expanded ? '../assets/images/jos.png' : '../assets/images/dreapta.png')}
              style={styles.iconStyle} />

          </TouchableOpacity>
        </View>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>
                <View style={{    flexDirection: 'row', alignItems: 'center',}}>
                  <View style={[styles.patratel,{backgroundColor:'#FFFFFF'}]}></View>
                  <Text style={{flex:1}}> {item.name} </Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}

export default class SelectieGrileScreen extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, selected:false, category_Name: "Mobiles", sub_Category: [{ id: 1, name: 'Mi',subSelected:false }, { id: 2, name: 'RealMe',subSelected:false }, { id: 3, name: 'Samsung',subSelected:false },
        { id: 4, name: 'Infinix',subSelected:false }, { id: 5, name: 'Oppo',subSelected:false }, { id: 6, name: 'Apple',subSelected:false }, { id: 7, name: 'Honor',subSelected:false }]
      },

      {
        expanded: false, category_Name: "Laptops", sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
        { id: 11, name: 'ASUS' }]
      },

      {
        expanded: false, category_Name: "Computer Accessories", sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
        { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
      },

      {
        expanded: false, category_Name: "Home Entertainment", sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
        { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
      },

      {
        expanded: false, category_Name: "TVs by brand", sub_Category: [{ id: 20, name: 'Mi' },
        { id: 21, name: 'Thomson' }, { id: 22, name: 'LG' }, { id: 23, name: 'SONY' }]
      },

      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: []
      },
      {
        expanded: false, category_Name: "Muie Liverpool", sub_Category: [{id:29,name:"jones e bad"}]
      },
    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array,
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },

  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'left',
    flex:1,
    color: '#fff',
    fontSize: 21,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1eb092'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  },
  patratel:{
    marginLeft:5,
    marginRight:5,
    height:12,
    width:12,
    borderRadius:4,
    borderColor:'black',
    borderWidth:2,
  }
});
