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
        expanded: false, selected:false, category_Name: "Sepsis și Tratamentul Infecțiilor Bacteriene", sub_Category: [{ id: 1, name: 'Sepsis și șocul septic',subSelected:false }]
      },

      {
        expanded: false, category_Name: "Echilibrul Hidric, Fluide și Electroliți", sub_Category: [{ id: 2, 
          name: 'Tulburări electrolitice și acido-bazice. Tulburări ale echilibrului acido-bazic. Tulburări ale echilibrului hidro-electrolitic' }]
      },

      {
        expanded: false, category_Name: "Hematologie", sub_Category: [{ id: 3, name: 'Anemiile. Anemia feriprivă. Deficitul de vitamină B12 și acid folic' }, { id: 4, name: 'Anemiile hemolitice dobândite' },]
      },

      {
        expanded: false, category_Name: "REUMATOLOGIE", sub_Category: [{ id: 5, name: 'Boli inflamatorii reumatice cronice. Poliartrita reumatoidă' },
        { id: 6, name: 'Spondilita anchilozantă și spondiloartritele' }, { id: 7, name: 'Lupusul eritematos sistemic' }]
      },

      {
        expanded: false, category_Name: "ENDOCRINOLOGIE", sub_Category: [{ id: 8, name: 'Glanda tiroidă. Hipotiroidismul adultului. Tireotoxicoza' },
        { id: 9, name: 'Cancerul tiroidian' }]
      },

      {
        expanded: false, category_Name: "DIABETUL ZAHARAT", sub_Category: []
      },
      {
        expanded: false, category_Name: "NEUROLOGIE", sub_Category: [{ id: 10, name: 'Accidentele vasculare cerebrale' }, { id: 11, name: 'Infectiile sistemului nervos - meningite, encefalite' }, 
        { id: 12, name: 'Pierderea conștienței și comele' }]
      },
      {
        expanded: false, category_Name: "AFECȚIUNILE RESPIRATORII", sub_Category: [{ id: 13, name: 'Astmul bronșic' }, { id: 14, name: 'Bronhopneumopatia obstructivă cronică' }, 
        { id: 15, name: 'Pneumoniile' }, { id: 16, name: 'Tuberculoza' }, { id: 17, name: 'Cancerele bronhopulmonare' }]
      },
      {
        expanded: false, category_Name: "BOALA VENOASĂ TROMBOEMBOLICĂ", sub_Category: [{ id: 1, name: 'Trombembolismul pulmonar'}]
      },
      {
        expanded: false, category_Name: "CARDIOLOGIE", sub_Category: [{ id: 18, name: 'Stopul cardiac' }, { id: 19, name: 'Aritmiile și tulburările de conducere' }, 
        { id: 20, name: 'Insuficiența cardiacă. Insuficiența cardiacă cronică. Insuficiența cardiacă acută' }, 
        { id: 21, name: 'Boala coronariană. Boala coronariană cronică stabilă. Angina pectorală stabilă. Alte forme de boală cardiacă ischemică. Sindroame coronariene acute cu supradenivelare de segment ST. Sindroame coronariene acute fără supradenivelare de segment ST' }, 
        { id: 22, name: 'Valvulopatiile. Endocardita infecțioasă' }, { id: 23, name: 'Cardiomiopatiile' }, { id: 24, name: 'Pericardita' }]
      },
      {
        expanded: false, category_Name: "HIPERTENSIUNEA", sub_Category: []
      },
      {
        expanded: false, category_Name: "GASTROENTEROLOGIE", sub_Category: [{ id: 25, name: 'Refluxul gastroesofagian' }, { id: 26, name: 'Boala ulceroasă' }, 
        { id: 27, name: 'Bolile inflamatorii intestinale' }]
      },
      {
        expanded: false, category_Name: "AFECȚIUNILE FICATULUI", sub_Category: [{ id: 28, name: 'Hepatitele virale' }, 
        { id: 29, name: 'Ciroza hepatică' }, ]
      },
      {
        expanded: false, category_Name: "PATOLOGIA RENALĂ ȘI A TRACTULUI URINAR", sub_Category: [{ id: 30, name: 'Glomerulopatii' }, { id: 31, name: 'Nefropatii tubulo-interstițiale' }, 
        { id: 32, name: 'Boala cronică de rinichi' }]
      },
      {
        expanded: false, category_Name: "INFECȚII CU TRANSMITERE SEXUALĂ ȘI HIV", sub_Category: [{ id: 33, name: 'Infecția HIV' }]
      },
      {
        expanded: false, category_Name: "TERAPIE INTENSIVĂ", sub_Category: [{ id: 34, name: 'Insuficienta respiratorii si a Sindromului de detresă respiratorie acută' }]
      },
      {
        expanded: false, category_Name: "EVALUAREA PERIOPERATORIE ȘI MANAGEMENTUL PACIENTULUI CHIRURGICAL", sub_Category: []
      },
      {
        expanded: false, category_Name: "SÂNGERAREA CHIRURGICALĂ: TULBURĂRI DE SÂNGERARE, STATUSUL DE HIPERCOAGULABILITATE", sub_Category: []
      },
      {
        expanded: false, category_Name: "INFECȚIILE CHIRURGICALE", sub_Category: []
      },
      {
        expanded: false, category_Name: "TRAUMA", sub_Category: []
      },
      {
        expanded: false, category_Name: "ARSURILE", sub_Category: []
      },
      {
        expanded: false, category_Name: "PERETELE ABDOMINAL; HERNIILE", sub_Category: []
      },
      {
        expanded: false, category_Name: "ESOFAGUL", sub_Category: []
      },
      {
        expanded: false, category_Name: "STOMACUL ȘI DUODENUL", sub_Category: []
      },
      {
        expanded: false, category_Name: "INTESTINUL SUBȚIRE ȘI APENDICELE", sub_Category: []
      },
      {
        expanded: false, category_Name: "COLON, RECT, ANUS", sub_Category: []
      },
      {
        expanded: false, category_Name: "TRACTUL BILIAR", sub_Category: []
      },
      {
        expanded: false, category_Name: "PANCREASUL", sub_Category: []
      },
      {
        expanded: false, category_Name: "FICATUL ȘI SPLINA", sub_Category: []
      },
      {
        expanded: false, category_Name: "AFECȚIUNI ALE SISTEMULUI VASCULAR", sub_Category: [{ id: 35, name: 'Boala arterială periferică ocluzivă' }, { id: 18, name: 'Patologie venoasă' }]
      },
      {
        expanded: false, category_Name: "ORL: AFECȚIUNI ALE CAPULUI ȘI GÂTULUI", sub_Category: []
      },
      {
        expanded: false, category_Name: "ORTOPEDIE: AFECȚIUNI ALE SISTEMULUI MUSCULOSCHELETAL", sub_Category: []
      },
      {
        expanded: false, category_Name: "UROLOGIE: AFECȚIUNI ALE SISTEMULUI GENITO-URINAR", sub_Category: []
      },
      {
        expanded: false, category_Name: "DERMATOLOGIE", sub_Category: []
      },
      {
        expanded: false, category_Name: "PEDIATRIE", sub_Category: []
      },
      {
        expanded: false, category_Name: "GINECOLOGIE ȘI AFECȚIUNILE SÂNULUI", sub_Category: []
      },
      {
        expanded: false, category_Name: "OBSTETRICĂ", sub_Category: []
      },
      {
        expanded: false, category_Name: "AFECȚIUNI PSIHIATRICE", sub_Category: []
      },
      {
        expanded: false, category_Name: "EPIDEMIOLOGIE ȘI ETICĂ", sub_Category: []
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
