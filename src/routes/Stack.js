// Por padrão o screenOptions vem com headerShown true, 
// mas podemos tirar ele incluindo esta opção e atribuindo false

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='TelaA' 
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name='TelaA' 
            options={{ title: 'Informações Iniciais' }}>
                {props => (
                    <PassoStack {...props} avancar='TelaB'>
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>
        <Stack.Screen name='TelaB' 
            options={{ title: 'Tela B' }} >
                {props => (
                    <PassoStack {...props} voltar avancar='TelaC' avancarParams={{ numero: 407 }}>
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>
        <Stack.Screen name='TelaC' 
            options={{ title: 'Tela C' }} >
                {props => (
                    <PassoStack {...props} voltar avancar='TelaC'>
                        <TelaC {...props} />
                    </PassoStack>
                )}
            </Stack.Screen>
    </Stack.Navigator>
)