import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Button, View } from "react-native";

const insurance = ['Proposal', 'Compliant', 'InsuranceRequest', 'HealthCondition', 'InsuranceData'];

export const Insurance = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {insurance.map((item, index) => (
                <View key={index} style={{ padding: 5, width: 200 }}>
                    <Button
                        title={item}
                        onPress={() => {
                            navigation.navigate(item);
                        }}
                    />
                </View>
            ))}
        </View>
    );
}
