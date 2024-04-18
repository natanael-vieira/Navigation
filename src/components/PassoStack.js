import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}> 
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {props.avancar
                ? <Button 
                    title='Próxima'
                    onPress={() => {
                        props.navigation.navigate(props.avancar)
                    }}
                    />
                : false
            }
            {props.voltar
                ? <Button 
                    title='Anterior'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)