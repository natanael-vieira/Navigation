import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}> 
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {props.voltar
                ? <Button 
                    title='Anterior'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    />
                : false
            }
            {props.avancar
                ? <Button 
                    title='Próxima'
                    onPress={() => {
                        props.navigation.push(props.avancar)
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